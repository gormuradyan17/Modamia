import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShopCartContent from 'components/ShopCart';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCount, setProductCount } from 'redux/reducers/addToCartReducer';
import { isLogged } from 'redux/reducers/userReducer';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { ObjectType } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import { Variant } from 'shared/ui/SnackbarUI/container/SnackbarContainer';
import useSnackbar from 'utils/hooks/useSnackbar';

interface Props {
    removeFromCart: CallbackSkeletonType,
    checkoutItem: CallbackSkeletonType,
    data: ObjectType
}

const CartProduct = ({
    removeFromCart,
    checkoutItem,
    data,
}: Props) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [quantity, setQuantity] = useState<number>(data?.count || 1)
    const isLoggedIn = useSelector(isLogged)

    const { appendSnackbar } = useSnackbar()

    useEffect(() => {
        canvasModelInit(1, data.modelData, 'fronts', canvasRef, data.activeMannequin, data.modelData, true,false)
    }, [data, canvasRef])

    const handleCheckout = async () => {
        if (isLoggedIn) return checkoutItem(data)
        await appendSnackbar(Variant.error, {
            autoHideDuration: 8000,
            message: 'Please first sign in to your account to purchase the product'
        })
    }

    return (
        <div className='product_canvas'>
            <div className="product_canvas-image">
                <canvas ref={canvasRef}></canvas>
            </div>
            <div className="product_info_body">
                <ShopCartContent modelData={data} setQuantity={setQuantity} quantity={quantity} />
                <div className="product_info_body-actions">
                    <ButtonUI classN='product_info_body-action' version='gray' onClick={() => removeFromCart(data?.id)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    <ButtonUI
                        classN='product_info_body-action'
                        onClick={handleCheckout}
                    >Checkout</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;