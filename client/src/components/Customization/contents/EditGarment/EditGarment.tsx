import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import './style.scss'
import useSnackbar from 'utils/hooks/useSnackbar';
import { Variant } from 'shared/ui/SnackbarUI/container/SnackbarContainer';
import { getIsGarmentSaveApproved } from 'shared/helpers/helpers';
import { useSelector } from 'react-redux';
import { getProduct } from 'redux/reducers/addToCartReducer';
import { getDetailsData } from 'redux/reducers/mannequinReducer';
import { addCart, editExistedCart } from 'services/userService';

interface Props {
    id: string,
}

const EditGarment = ({
    id
}: Props) => {

    const { appendSnackbar } = useSnackbar()
    const productData = useSelector(getProduct)
    const detailsData = useSelector(getDetailsData)
    const aprrovedSave = getIsGarmentSaveApproved(productData, detailsData?.details)

    const saveGarment = async () => {
        if (aprrovedSave) {
            await editExistedCart({ details: productData, _id: id })
            await appendSnackbar(Variant.success, {
                autoHideDuration: 5000,
                message: 'Garment data changed successfully!!'
            })
        }
    }

    return (
        <ButtonUI
            classN='edit-garment-btn'
            onClick={saveGarment}
        >Save</ButtonUI>
    );
};

export default EditGarment;