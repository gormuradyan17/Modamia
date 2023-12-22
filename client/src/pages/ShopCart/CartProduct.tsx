import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShopCartContent from 'components/ShopCart';
import React, { useEffect, useRef } from 'react';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { ObjectType } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';

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

    useEffect(() => {
        canvasModelInit(.3, data.modelData, 'fronts', canvasRef, data.activeMannequin, data.modelData, true)
    }, [data, canvasRef])

    return (
        <div className='product_canvas'>
            <div className="product_canvas-image">
                <canvas ref={canvasRef}></canvas>
            </div>
            <div className="product_info_body">
                <ShopCartContent modelData={data} />
                <div className="product_info_body-actions">
                    <ButtonUI classN='product_info_body-action' version='gray' onClick={() => removeFromCart(data?.id)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    <ButtonUI classN='product_info_body-action' onClick={() => checkoutItem(data)}>Checkout</ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;