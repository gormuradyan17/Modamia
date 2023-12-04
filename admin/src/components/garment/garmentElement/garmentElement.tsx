import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvSilhouettes } from "services/silhouetteService";
import { getAvMannequins } from "services/mannequinService";
import { garmentDetails, resetGarmentState, setGarmentFullState, setGarmentState } from "redux/reducers/garmentReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import { editGarment } from "shared/api/dataApi";
import InputUI from "shared/ui/InputUI/InputUI";
import { BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL, BASE_UPLOADS_SILHOUETTES_SLEEVES_URL, BASE_UPLOADS_SILHOUETTES_TOPS_URL } from "shared/constants/genericApiRoutes";
import { availableSilhouettes } from "redux/reducers/silhouetteReducer";
import { ObjectType, getIsEditGarmentApproved } from "shared/helpers/helpers";
import GarmentsSilhouettesListWrapper from "../newGarment/GarmentsSilhouettesListWrapper";
import GarmentsMannequinsList from "../newGarment/GarmentsMannequinsList";
import { getAvGarments, getSelectedGarment } from "services/garmentService";
import { useParams } from "react-router-dom";
import './style.scss'
import useSnackbar from "shared/ui/SnackbarUI/hook/useSnackbar";
import { Variant } from "shared/ui/SnackbarUI/container/SnackbarContainer";

const GarmentElement = () => {

    const dispatch = useDispatch()
    const details = useSelector(garmentDetails)
    const params = useParams()
    const { id = '' } = params;
    const [copyDetails, setCopyDetails] = useState<ObjectType>({})
    useEffect(() => {
        getAvGarments(dispatch)
        getAvSilhouettes(dispatch)
        getAvMannequins(dispatch)
        return () => {
            dispatch(resetGarmentState())
        }
    }, [])

    const { appendSnackbar } = useSnackbar()

    useEffect(() => {
        if (id) getSelectedGarment(dispatch, id)
    }, [id])

    useMemo(() => {
        if (details?.mannequin_id) setCopyDetails(details)
    }, [details])

    const silhouettes = useSelector(availableSilhouettes)

    const topSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette.type === 'Top')
    }, [silhouettes])

    const bottomSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette.type === 'Bottom')
    }, [silhouettes])

    const sleeveSilhouettes = useMemo(() => {
        return silhouettes.filter((silhouette: ObjectType) => silhouette?.type === 'Sleeve')
    }, [silhouettes])


    const saveGarment = async () => {
        if (isApproved) {
            const data = { ...copyDetails, id }
            await editGarment(data)
            await appendSnackbar(Variant.success, {
                autoHideDuration: 3000,
                message: 'Garment successfully updated!'
            })
            await dispatch(setGarmentFullState(copyDetails))
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setCopyDetails({
            ...copyDetails,
            [name]: value
        })
    }

    const setGarmentlist = (id: string, name: string) => {
        if (id) {
            const copyDetailsData: ObjectType = structuredClone(copyDetails)
            const data = copyDetailsData[name];
            const idx = data?.findIndex((item: ObjectType) => item.id === id)
            if (idx !== -1) data.splice(idx, 1)
            else data.push({
                id,
                order: 1
            })
            setCopyDetails({
                ...copyDetails,
                [name]: data
            })
        }
    }

    const setGarmentOrderlist = (data: ObjectType, id: string, name: string) => {
        if (id) {
            const { value } = data;
            const copyData = structuredClone(copyDetails)
            const dataCopy = copyData[name];
            const idx = dataCopy?.findIndex((item: ObjectType) => item.id === id)
            if (idx !== -1) {
                dataCopy[idx].order = value
                setCopyDetails({
                    ...copyDetails,
                    [name]: dataCopy
                })
            }
        }
    }

    const setGarmentMannequin = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        const { target: { checked } } = event;
        const name = 'mannequin_id'
        if (id) {
            setCopyDetails({
                ...copyDetails,
                [name]: checked ? id : ''
            })
        }
    }

    const isApproved = getIsEditGarmentApproved(details, copyDetails)

    return (
        <div>
            <MainHead text="New Garment" />
            <MainBody>
                <div className="garments-list-content">
                    <ButtonUI
                        classN="add-garment-button"
                        onClick={saveGarment}
                        type="button"
                        disabled={!isApproved}
                    >Save Garment</ButtonUI>
                    <InputUI
                        classN='add-garment-input'
                        callback={handleInputChange}
                        value={copyDetails?.name}
                        name='name'
                        label="Name*"
                    />
                    <GarmentsMannequinsList
                        details={copyDetails}
                        callback={(event: ChangeEvent<HTMLInputElement>, id: string) => setGarmentMannequin(event, id)}
                    />
                    <GarmentsSilhouettesListWrapper
                        header='Top Silhouettes'
                        content={topSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_TOPS_URL}
                        callback={(id: string) => setGarmentlist(id, 'tops')}
                        callbackDropdown={setGarmentOrderlist}
                        type='tops'
                        details={copyDetails}
                    />
                    <GarmentsSilhouettesListWrapper
                        header='Bottom Silhouettes'
                        content={bottomSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL}
                        callback={(id: string) => setGarmentlist(id, 'bottoms')}
                        callbackDropdown={setGarmentOrderlist}
                        type='bottoms'
                        details={copyDetails}
                    />
                    <GarmentsSilhouettesListWrapper
                        header='Sleeve Silhouettes'
                        content={sleeveSilhouettes}
                        srcBase={BASE_UPLOADS_SILHOUETTES_SLEEVES_URL}
                        callback={(id: string) => setGarmentlist(id, 'sleeves')}
                        callbackDropdown={setGarmentOrderlist}
                        type='sleeves'
                        details={copyDetails}
                    />
                </div>
            </MainBody>
        </div>
    );
};

export default GarmentElement;