import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { ChangeEvent, useEffect, useMemo } from "react";
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
import { ObjectType, getIsNewGarmentApproved } from "shared/helpers/helpers";
import { useNavigate } from "react-router-dom";

const NewGarment = () => {

    const dispatch = useDispatch()
    const details = useSelector(garmentDetails)
    const navigate = useNavigate()

    useEffect(() => {
        getAvSilhouettes(dispatch)
        getAvMannequins(dispatch)
    }, [])

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

    const addNewGarment = async () => {
        if (details?.mannequin_id && details?.name) {
            await addGarment(details)
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
                    <InputUI
                        classN='add-garment-input'
                        callback={handleInputChange}
                        value={details?.name}
                        name='name'
                        label="Name*"
                    />
                    <GarmentsMannequinsList 
                        details={details}
                        callback={(event: ChangeEvent<HTMLInputElement>, id: string) => setGarmentMannequin(event, id)}
                    />
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