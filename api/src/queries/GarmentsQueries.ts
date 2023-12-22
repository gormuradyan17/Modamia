import GarmentSilhouettesModel from '../models/GarmentSilhouettes'
import GarmentPalettesModel from '../models/GarmentPalettes'
import GarmentModel from '../models/Garment'
import mongoose from 'mongoose';
import MannequinModel from '../models/Mannequin'
import SilhouetteModel from '../models/Silhouette'
import CartModel from '../models/Cart';

export const getGarmentsQuery = async (isAdmin: boolean = false, user_id: string = '') => {
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
        },
        {
            $match: {
                ...(!user_id && { 'garment.user_id': { $exists: false } }),
            }
        },
        { $sort: { 'garment.createdAt': 1 } },
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
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
            }
        },
        {
            $project: {
                _id: 0,
                garment: '$garment',
            }
        },
        ...bottomQuery
    ]);
}

export const getGarmentQuery = async (garment_id: string = '', isAdmin: boolean = false, isSearchable: boolean = false, user_id: string = '') => {
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
        },
    ]
    if (isAdmin) {
        const result = await GarmentSilhouettesModel.aggregate([
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
                                else: null
                            },
                        },
                    },
                    bottoms: {
                        $push: {
                            $cond: {
                                if: {
                                    $eq: ['$silhouette.type', 'Bottom']
                                },
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
                                else: null
                            }
                        }
                    },
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
                            },
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
                    },
                }
            },
            ...bottomQuery
        ]);
        const palettes = await GarmentPalettesModel.aggregate([
            {
                $match: {
                    ...(garment_id && { garment_id: new mongoose.Types.ObjectId(garment_id) }),
                }
            },
            {
                $group: {
                    _id: "$garment_id",
                    colors: {
                        $push: {
                            $cond: {
                                if: { $eq: ["$palette_type", "colors"] },
                                then: "$palette_id",
                                else: null
                            }
                        }
                    },
                    prints: {
                        $push: {
                            $cond: {
                                if: { $eq: ["$palette_type", "prints"] },
                                then: "$palette_id",
                                else: null
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    palettes: {
                        colors: {
                            $filter: {
                                input: "$colors",
                                as: "color",
                                cond: { $ne: ["$$color", null] }
                            }
                        },
                        prints: {
                            $filter: {
                                input: "$prints",
                                as: "print",
                                cond: { $ne: ["$$print", null] }
                            }
                        }
                    }
                }
            }
        ])
        result[0].palettes = palettes?.[0]?.palettes || {
            colors: [],
            prints: []
        }
        return result?.[0] || {};
    }
    const result = await GarmentSilhouettesModel.aggregate([
        ...topQuery,
        {
            $group: {
                _id: '$garment_id',
                garment: { $first: '$garment' },
                ...(!isSearchable && {
                    fronts: {
                        $push: {
                            $cond: {
                                if: {
                                    $and: [
                                        { $eq: ['$silhouette.orientation', 'Front'] },
                                        { $ne: ['$silhouette.type', 'Sleeve'] }
                                    ]
                                },
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
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
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
                                else: null
                            }
                        }
                    },
                    sleeves: {
                        $push: {
                            $cond: {
                                if: { $eq: ['$silhouette.type', 'Sleeve'] },
                                then: {
                                    $mergeObjects: [
                                        '$silhouette',
                                        { order: '$order' }
                                    ]
                                },
                                else: null
                            }
                        }
                    }
                }),
            }
        },
        {
            $project: {
                _id: 0,
                garment: '$garment',
                ...(user_id && { details: '$details' }),
                ...(!isSearchable && {
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
                })
            }
        },
        ...bottomQuery
    ]);

    const palettes = await GarmentPalettesModel.aggregate([
        {
            $match: {
                ...(garment_id && { garment_id: new mongoose.Types.ObjectId(garment_id) }),
            }
        },
        {
            $group: {
                _id: "$garment_id",
                colors: {
                    $push: {
                        $cond: {
                            if: { $eq: ["$palette_type", "colors"] },
                            then: "$palette_id",
                            else: null
                        }
                    }
                },
                prints: {
                    $push: {
                        $cond: {
                            if: { $eq: ["$palette_type", "prints"] },
                            then: "$palette_id",
                            else: null
                        }
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                palettes: {
                    colors: {
                        $filter: {
                            input: "$colors",
                            as: "color",
                            cond: { $ne: ["$$color", null] }
                        }
                    },
                    prints: {
                        $filter: {
                            input: "$prints",
                            as: "print",
                            cond: { $ne: ["$$print", null] }
                        }
                    }
                }
            }
        }
    ])

    result[0].palettes = palettes?.[0]?.palettes || {
        colors: [],
        prints: []
    }

    if (user_id) {
        const garment_id_object = new mongoose.Types.ObjectId(garment_id);
        const garment_id_string = garment_id_object.toString();
        const details = await CartModel.find({ user_id: new mongoose.Types.ObjectId(user_id), 'details.garment_id': garment_id_string })
        result[0].details = details?.[0] || {}
    }

    return result?.[0] || {};
}

export const updateGarmentsQuery = async (garment_id: string, list: Array<Record<string, any>>, type: string, mannequin_id: string) => {

    if (!list?.length) {
        // Case 1: If array is empty, remove all fields where garment_id is garment_id
        return await GarmentSilhouettesModel.deleteMany({ garment_id, silhouetteType: type });
    } else {
        // Case 2: If array is not empty, add new items and update existing ones
        for (const silhouette of list) {

            const query = {
                garment_id,
                silhouette_id: silhouette?.id,
            }

            const existingItem = await GarmentSilhouettesModel.findOne(query);
            if (!existingItem) {
                // Item does not exist in the database, add it
                await GarmentSilhouettesModel.create({
                    garment_id,
                    silhouette_id: silhouette?.id,
                    order: silhouette?.order,
                    silhouetteType: type,
                });
                const queryMannequin = { _id: mannequin_id }
                const mannequin = await MannequinModel.find(queryMannequin)
                if (mannequin?.[0]) {
                    const querySilhouette = { '_id': silhouette?.id };
                    await SilhouetteModel.findOneAndUpdate(querySilhouette, {
                        width: mannequin?.[0]?.width || '',
                        height: mannequin?.[0]?.height || '',
                    }, { upsert: true });
                }
            } else {
                const queryUpdate = { '_id': existingItem?._id };
                await GarmentSilhouettesModel.findOneAndUpdate(queryUpdate, {
                    order: silhouette?.order,
                }, { upsert: true });
            }
        }

        // Case 3: Remove items not present in the array
        return await GarmentSilhouettesModel.deleteMany({
            garment_id,
            silhouetteType: type,
            $nor: list.map(item => ({ silhouette_id: item.id, order: item.order }))
        });
    }
}

export const updateGarmentPalettesQuery = async (garment_id: string, list: Array<Record<string, any>>, type: string) => {

    if (!list?.length) {
        return await GarmentPalettesModel.deleteMany({ garment_id: new mongoose.Types.ObjectId(garment_id), palette_type: type });
    } else {
        for (const paletteId of list) {

            const query = {
                garment_id,
                palette_id: paletteId,
            }

            const existingItem = await GarmentPalettesModel.findOne(query);
            if (!existingItem) {
                await GarmentPalettesModel.create({
                    garment_id,
                    palette_id: paletteId,
                    palette_type: type,
                });
            }
        }

        return await GarmentPalettesModel.deleteMany({
            garment_id,
            palette_type: type,
            $nor: list.map(item => ({ palette_id: item }))
        });
    }
}

export const searchGarmentsQuery = async (criteria: string = '', isAdmin: boolean = false, user_id: string = '') => {
    const topQuery = [
        {
            $lookup: {
                from: 'mannequins',
                localField: 'mannequin_id',
                foreignField: '_id',
                as: 'mannequin'
            }
        },
        {
            $unwind: '$mannequin',
        },
    ]
    const userQuery = {
        ...(user_id && { 'user_id': new mongoose.Types.ObjectId(user_id) }),
        ...(!user_id && { 'user_id': { $exists: false } }),
    }
    const data = await GarmentModel.aggregate([
        ...topQuery,
        {
            $match: {
                $or: [
                    { 'name': { $regex: criteria, $options: 'i' } },
                    { 'mannequin.name': { $regex: criteria, $options: 'i' } },
                ],
                $and: [userQuery],
            },
        },
        {
            $project: { _id: '$_id', }
        }
    ]);

    const res = await Promise.all(data.map(async (item: Record<string, any>) => {
        const garment = await getGarmentQuery(item?._id, isAdmin, true, user_id);
        return garment;
    }));

    // Filter out undefined values
    const filteredRes = res.filter((garment) => garment !== undefined);

    return filteredRes;
}

export const getGarmentsByCartQuery = async (isAdmin: boolean = false, user_id: string = '') => {

    return await CartModel.aggregate([
        {
            $match: {
                'user_id': new mongoose.Types.ObjectId(user_id),
            },
        },
        {
            $addFields: {
                'details.garment_id': {
                    $toObjectId: '$details.garment_id', // Convert to ObjectId
                },
                'details.activeMannequin._id': {
                    $toObjectId: '$details.activeMannequin._id', // Convert to ObjectId
                },
            },
        },
        {
            $lookup: {
                from: 'garments',
                localField: 'details.garment_id',
                foreignField: '_id',
                as: 'garmentArray',
            },
        },
        {
            $lookup: {
                from: 'mannequins',
                localField: 'details.activeMannequin._id',
                foreignField: '_id',
                as: 'mannequinArray',
            },
        },
        {
            $project: {
                garment: { $arrayElemAt: ['$garmentArray', 0] }, // Extract the first element from the array
                mannequin: { $arrayElemAt: ['$mannequinArray', 0] }, // Extract the first element from the array
                details: '$details',
            },
        },
    ])
}