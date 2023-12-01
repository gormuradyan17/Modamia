import GarmentSilhouettesModel from '../models/GarmentSilhouettes'
import mongoose from 'mongoose';

export const getGarmentsQuery = async (isAdmin: boolean = false) => {
    const topQuery = [
        {
            $lookup: {
                from: 'garments',
                localField: 'garment_id',
                foreignField: '_id',
                as: 'garment'
            }
        },
        {
            $unwind: '$garment'
        },
        {
            $lookup: {
                from: 'silhouettes',
                localField: 'silhouette_id',
                foreignField: '_id',
                as: 'silhouette'
            }
        },
        {
            $unwind: '$silhouette'
        },
    ];
    const bottomQuery = [
        {
            $lookup: {
                from: 'mannequins',
                localField: 'garment.mannequin_id',
                foreignField: '_id',
                as: 'mannequin'
            }
        },
        {
            $unwind: '$mannequin'
        }
    ]
    if (isAdmin) {
        return await GarmentSilhouettesModel.aggregate([
            ...topQuery,
            {
                $group: {
                    _id: '$garment_id',
                    garment: { $first: '$garment' },
                    tops: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Top']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    },
                    bottoms: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Bottom']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    },
                    sleeves: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Sleeve']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    garment: '$garment',
                    mannequin: '$mannequin',
                    silhouettes: {
                        tops: {
                            $ifNull: [
                                {
                                    $filter: {
                                        input: '$tops',
                                        as: 'top',
                                        cond: {
                                            $ne: ['$$top', null]
                                        }
                                    }
                                },
                                []
                            ]
                        },
                        bottoms: {
                            $ifNull: [
                                {
                                    $filter: {
                                        input: '$bottoms',
                                        as: 'bottom',
                                        cond: {
                                            $ne: ['$$bottom', null]
                                        }
                                    }
                                },
                                []
                            ]
                        },
                        sleeves: {
                            $ifNull: [
                                {
                                    $filter: {
                                        input: '$sleeves',
                                        as: 'sleeve',
                                        cond: {
                                            $ne: ['$$sleeve', null]
                                        }
                                    }
                                },
                                []
                            ]
                        },
                    }
                }
            },
            ...bottomQuery
        ]);
    }
    return await GarmentSilhouettesModel.aggregate([
        ...topQuery,
        {
            $group: {
                _id: '$garment_id',
                garment: { $first: '$garment' },
                fronts: {
                    $push: {
                        $cond: {
                            if: {
                                $and: [
                                    { $eq: ['$silhouette.orientation', 'Front'] },
                                    { $ne: ['$silhouette.type', 'Sleeve'] }
                                ]
                            },
                            then: '$silhouette',
                            else: null
                        }
                    }
                },
                backs: {
                    $push: {
                        $cond: {
                            if: {
                                $and: [
                                    { $eq: ['$silhouette.orientation', 'Back'] },
                                    { $ne: ['$silhouette.type', 'Sleeve'] }
                                ]
                            },
                            then: '$silhouette',
                            else: null
                        }
                    }
                },
                sleeves: {
                    $push: {
                        $cond: {
                            if: { $eq: ['$silhouette.type', 'Sleeve'] },
                            then: '$silhouette',
                            else: null
                        }
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                garment: '$garment',
                silhouettes: {
                    fronts: {
                        tops: {
                            $filter: {
                                input: '$fronts',
                                as: 'front',
                                cond: {
                                    $and: [
                                        { $ne: ['$$front', null] },
                                        { $eq: ['$$front.type', 'Top'] }
                                    ]
                                }
                            }
                        },
                        bottoms: {
                            $filter: {
                                input: '$fronts',
                                as: 'front',
                                cond: {
                                    $and: [
                                        { $ne: ['$$front', null] },
                                        { $eq: ['$$front.type', 'Bottom'] }
                                    ]
                                }
                            }
                        }
                    },
                    backs: {
                        tops: {
                            $filter: {
                                input: '$backs',
                                as: 'back',
                                cond: {
                                    $and: [
                                        { $ne: ['$$back', null] },
                                        { $eq: ['$$back.type', 'Top'] }
                                    ]
                                }
                            }
                        },
                        bottoms: {
                            $filter: {
                                input: '$backs',
                                as: 'back',
                                cond: {
                                    $and: [
                                        { $ne: ['$$back', null] },
                                        { $eq: ['$$back.type', 'Bottom'] }
                                    ]
                                }
                            }
                        }
                    },
                    sleeves: {
                        $filter: {
                            input: '$sleeves',
                            as: 'sleeve',
                            cond: { $ne: ['$$sleeve', null] }
                        }
                    }
                }
            }
        },
        ...bottomQuery
    ]);
}

export const getGarmentQuery = async (garment_id: string = '', isAdmin: boolean = false) => {
    const topQuery = [
        {
            $match: {
                ...(garment_id && { garment_id: new mongoose.Types.ObjectId(garment_id) }),
            }
        },
        {
            $lookup: {
                from: 'garments',
                localField: 'garment_id',
                foreignField: '_id',
                as: 'garment'
            }
        },
        {
            $unwind: '$garment'
        },
        {
            $lookup: {
                from: 'silhouettes',
                localField: 'silhouette_id',
                foreignField: '_id',
                as: 'silhouette'
            }
        },
        {
            $unwind: '$silhouette'
        },
    ];
    const bottomQuery = [
        {
            $lookup: {
                from: 'mannequins',
                localField: 'garment.mannequin_id',
                foreignField: '_id',
                as: 'mannequin'
            }
        },
        {
            $unwind: '$mannequin'
        }
    ]
    if (isAdmin) {
        return await GarmentSilhouettesModel.aggregate([
            ...topQuery,
            {
                $group: {
                    _id: '$garment_id',
                    garment: { $first: '$garment' },
                    tops: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Top']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    },
                    bottoms: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Bottom']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    },
                    sleeves: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Sleeve']
                                },
                                then: '$silhouette',
                                else: null
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    garment: '$garment',
                    mannequin: '$mannequin',
                    silhouettes: {
                        tops: {
                            $filter: {
                                input: '$tops',
                                as: 'top',
                                cond: {
                                    $ne: ['$$top', null]
                                }
                            }
                        },
                        bottoms: {
                            $filter: {
                                input: '$bottoms',
                                as: 'bottom',
                                cond: {
                                    $ne: ['$$bottom', null]
                                }
                            }
                        },
                        sleeves: {
                            $filter: {
                                input: '$sleeves',
                                as: 'sleeve',
                                cond: {
                                    $ne: ['$$sleeve', null]
                                }
                            }
                        },
                    }
                }
            },
            ...bottomQuery
        ]);
    }
    return await GarmentSilhouettesModel.aggregate([
        ...topQuery,
        {
            $group: {
                _id: '$garment_id',
                garment: { $first: '$garment' },
                fronts: {
                    $push: {
                        $cond: {
                            if: {
                                $and: [
                                    { $eq: ['$silhouette.orientation', 'Front'] },
                                    { $ne: ['$silhouette.type', 'Sleeve'] }
                                ]
                            },
                            then: '$silhouette',
                            else: null
                        }
                    }
                },
                backs: {
                    $push: {
                        $cond: {
                            if: {
                                $and: [
                                    { $eq: ['$silhouette.orientation', 'Back'] },
                                    { $ne: ['$silhouette.type', 'Sleeve'] }
                                ]
                            },
                            then: '$silhouette',
                            else: null
                        }
                    }
                },
                sleeves: {
                    $push: {
                        $cond: {
                            if: { $eq: ['$silhouette.type', 'Sleeve'] },
                            then: '$silhouette',
                            else: null
                        }
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                garment: '$garment',
                silhouettes: {
                    fronts: {
                        tops: {
                            $filter: {
                                input: '$fronts',
                                as: 'front',
                                cond: {
                                    $and: [
                                        { $ne: ['$$front', null] },
                                        { $eq: ['$$front.type', 'Top'] }
                                    ]
                                }
                            }
                        },
                        bottoms: {
                            $filter: {
                                input: '$fronts',
                                as: 'front',
                                cond: {
                                    $and: [
                                        { $ne: ['$$front', null] },
                                        { $eq: ['$$front.type', 'Bottom'] }
                                    ]
                                }
                            }
                        }
                    },
                    backs: {
                        tops: {
                            $filter: {
                                input: '$backs',
                                as: 'back',
                                cond: {
                                    $and: [
                                        { $ne: ['$$back', null] },
                                        { $eq: ['$$back.type', 'Top'] }
                                    ]
                                }
                            }
                        },
                        bottoms: {
                            $filter: {
                                input: '$backs',
                                as: 'back',
                                cond: {
                                    $and: [
                                        { $ne: ['$$back', null] },
                                        { $eq: ['$$back.type', 'Bottom'] }
                                    ]
                                }
                            }
                        }
                    },
                    sleeves: {
                        tops: {
                            $filter: {
                                input: '$sleeves',
                                as: 'sleeve',
                                cond: { $ne: ['$$sleeve', null] }
                            }
                        },
                        bottoms: []
                    }
                }
            }
        },
        ...bottomQuery
    ]);
}

export const updateGarments = async (garment_id: string, list: Array<string>, type: string) => {

    if (!list?.length) {
        // Case 1: If array is empty, remove all fields where garment_id is garment_id
        return await GarmentSilhouettesModel.deleteMany({ garment_id, silhouetteType: type });
    } else {
        // Case 2: If array is not empty, add new items and update existing ones
        for (const silhouetteId of list) {

            const existingItem = await GarmentSilhouettesModel.findOne({
                garment_id,
                silhouette_id: silhouetteId
            });

            if (!existingItem) {
                // Item does not exist in the database, add it
                await GarmentSilhouettesModel.create({
                    garment_id,
                    silhouette_id: silhouetteId,
                    silhouetteType: type
                });
            }
        }

        // Case 3: Remove items not present in the array
        return await GarmentSilhouettesModel.deleteMany({
            garment_id,
            silhouetteType: type,
            silhouette_id: { $nin: list },
        });
    }
}