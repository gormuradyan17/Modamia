import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvSilhouettes } from "services/silhouetteService";
import './style.scss'
import { getAvMannequins } from "services/mannequinService";
import GarmentsMannequinsList from "./GarmentsMannequinsList";
import { garmentDetails, resetGarmentState, setGarmentState } from "redux/reducers/garmentReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import { addGarment } from "shared/api/dataApi";
import InputUI from "shared/ui/InputUI/InputUI";
import GarmentsSilhouettesListWrapper from "./GarmentsSilhouettesListWrapper";
import { BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL, BASE_UPLOADS_SILHOUETTES_SLEEVES_URL, BASE_UPLOADS_SILHOUETTES_TOPS_URL } from "shared/constants/genericApiRoutes";
import { availableSilhouettes } from "redux/reducers/silhouetteReducer";
import { ArrayType, ObjectType, appColor, getDropdownOptionsFromItemsPalettes, getIsNewGarmentApproved } from "shared/helpers/helpers";
import { useNavigate } from "react-router-dom";
import GarmentDropdownCheckbox from "../garmentDropdownCheckbox/GarmentDropdownCheckbox";
import { colorsPalettes } from "redux/reducers/colorReducer";
import { printsPalettes } from "redux/reducers/printReducer";
import { getAvColorsPalettes } from "services/colorService";
import { getAvPrintsPalettes } from "services/printService";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import DropzoneUI from "shared/ui/DropzoneUI/DropzoneUI";
import { formValidator } from "utils/validators/validator";
import { garmentFilesOptions } from "utils/validators/validatorOptions";

const NewGarment = () => {

    const dispatch = useDispatch()
    const details = useSelector(garmentDetails)
    const navigate = useNavigate()
    const [file, setFile] = useState<any>(null)
    useEffect(() => {
        getAvSilhouettes(dispatch)
        getAvMannequins(dispatch)
        getAvColorsPalettes(dispatch)
        getAvPrintsPalettes(dispatch)
        return () => {
            dispatch(resetGarmentState())
        }
    }, [])

    const silhouettes = useSelector(availableSilhouettes)
    const [fileErrors, setFileErrors] = useState<ObjectType>({})
    const topSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette.type === 'Top')
    }, [silhouettes])

    const bottomSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette.type === 'Bottom')
    }, [silhouettes])

    const sleeveSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette?.type === 'Sleeve')
    }, [silhouettes])

    const colorPalettes = useSelector(colorsPalettes)
    const colorVariants = getDropdownOptionsFromItemsPalettes(colorPalettes) || [{}]

    const printPalettes = useSelector(printsPalettes)
    const printVariants = getDropdownOptionsFromItemsPalettes(printPalettes) || [{}]

    const addNewGarment = async () => {
        if (details?.mannequin_id && details?.name) {
            const formData = new FormData()
            const jsonItems = ['tops','bottoms','sleeves','palettes']
            Object.keys(details).forEach((key) => {
                if (jsonItems.includes(key)) formData.append(key, JSON.stringify(details[key])); 
                else formData.append(key, details[key]);
            });
            formData.append('background', file);
            await addGarment(formData)
            dispatch(resetGarmentState())
            navigate('/garments')
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setGarmentState({ name, value }))
    }

    const setGarmentlist = (id: string, name: string) => {
        if (id) {
            const copyDetails = structuredClone(details)
            const data = copyDetails[name];
            const idx = data?.findIndex((item: ObjectType) => item.id === id)
            if (idx !== -1) data.splice(idx, 1)
            else data.push({
                id,
                order: 1
            })
            dispatch(setGarmentState({ name, value: data }))
        }
    }

    const setGarmentOrderlist = (data: ObjectType, id: string, name: string) => {
        if (id) {
            const { value } = data;
            const copyDetails = structuredClone(details)
            const dataCopy = copyDetails[name];
            const idx = dataCopy?.findIndex((item: ObjectType) => item.id === id)
            if (idx !== -1) {
                dataCopy[idx].order = value
            }
            dispatch(setGarmentState({ name, value: dataCopy }))
        }
    }

    const setGarmentMannequin = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        const { target: { checked } } = event;
        const name = 'mannequin_id'
        if (id) {
            dispatch(setGarmentState({ name, value: checked ? id : '' }))
        }
    }

    const handleDropdownChange = (event: ChangeEvent<HTMLInputElement>, option: ObjectType, type: string) => {
        const { target: { checked } } = event
        const { id } = option;
        if (id) {
            const copyDetailsData: ObjectType = structuredClone(details)
            const palettes = copyDetailsData?.palettes;
            if (checked) palettes?.[type].push(id)
            else {
                const idx = palettes?.[type].findIndex((item: string) => item === id)
                if (idx !== -1) palettes?.[type].splice(idx, 1)
            }
            dispatch(setGarmentState({ name: 'palettes', value: palettes }))
        }
    }

    const validateFiles = (files: ArrayType, field: string) => {
        let err = {}
        files?.map(file => {
            const obj = {
                [field]: file?.name
            }
            err = formValidator(obj, garmentFilesOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    const addImage = (files: ArrayType) => {
        setFile(files[0])
    }

    const isApproved = getIsNewGarmentApproved(details)

    return (
        <div>
            <MainHead text="New Garment" />
            <MainBody>
                <div className="garments-list-content">
                    <ButtonUI
                        classN="add-garment-button"
                        onClick={addNewGarment}
                        type="button"
                        disabled={!isApproved}
                    >Add Garment</ButtonUI>
                    <div className="garments-list-content-top">
                        <InputUI
                            classN='add-garment-input'
                            callback={handleInputChange}
                            value={details?.name}
                            name='name'
                            label="Name*"
                        />
                        <div className="garments-list-content-top-background">
                            <HeadingUI text='Background' color={appColor} size="18px" />
                            <DropzoneUI
                                width="300px"
                                height="160px"
                                name="highresurl"
                                validationCallback={(files) => validateFiles(files, 'background')}
                                error={fileErrors?.highresurl?.message || ''}
                                onChange={(files: ArrayType) => addImage(files)}
                            />
                        </div>
                    </div>
                    <div className="garments-list-top">
                        <GarmentsMannequinsList
                            details={details}
                            callback={(event: ChangeEvent<HTMLInputElement>, id: string) => setGarmentMannequin(event, id)}
                        />
                        <div className="garments-list-dropdowns">
                            <GarmentDropdownCheckbox
                                options={colorVariants}
                                onChange={(e: any, option: ObjectType) => handleDropdownChange(e, option, 'colors')}
                                label="Color palettes"
                                details={details}
                                type='colors'
                            />
                            <GarmentDropdownCheckbox
                                options={printVariants}
                                onChange={(e: any, option: ObjectType) => handleDropdownChange(e, option, 'prints')}
                                label="Print palettes"
                                details={details}
                                type='prints'
                            />
                        </div>
                    </div>
                    <GarmentsSilhouettesListWrapper
                        header='Top Silhouettes'
                        content={topSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_TOPS_URL}
                        callback={(id: string) => setGarmentlist(id, 'tops')}
                        callbackDropdown={setGarmentOrderlist}
                        type='tops'
                        details={details}
                    />
                    <GarmentsSilhouettesListWrapper
                        header='Bottom Silhouettes'
                        content={bottomSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL}
                        callback={(id: string) => setGarmentlist(id, 'bottoms')}
                        callbackDropdown={setGarmentOrderlist}
                        type='bottoms'
                        details={details}
                    />
                    <GarmentsSilhouettesListWrapper
                        header='Sleeve Silhouettes'
                        content={sleeveSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_SLEEVES_URL}
                        callback={(id: string) => setGarmentlist(id, 'sleeves')}
                        callbackDropdown={setGarmentOrderlist}
                        type='sleeves'
                        details={details}
                    />
                </div>
            </MainBody>
        </div>
    );
};

export default NewGarment;