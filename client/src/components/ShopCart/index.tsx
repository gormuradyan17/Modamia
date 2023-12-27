import HeadingUI from "shared/ui/HeadingUI/HeadingUI"
import './style.scss'
import CounterUI from "shared/ui/CounterUI/CounterUI"
import { ObjectType, appColor } from "shared/helpers/helpers"

interface Props {
    modelData: ObjectType,
    quantity:number,
    setQuantity:any
}

const ShopCartContent = ({ 
    modelData,
    quantity,
    setQuantity
}: Props) => {

    const { name = '', color = '', price = 0, size = '' } = modelData
    
    const total = price * quantity;
    
    return (
        <div className="product_info_body-content">
            <HeadingUI text={name} size="22px" color={appColor} />
            {color && <div className="product_info_body-content-text">
                <HeadingUI text='Color: ' size="16px" />
                <span>{color}</span>
            </div>}
            <div className="product_info_body-content-text">
                <HeadingUI text='Price: ' size="16px" />
                <span>${price}</span>
            </div>
            <div className="product_info_body-content-text">
                <HeadingUI text='Quantity: ' size="16px" />
                <CounterUI selected={quantity} onCountChange={(count: number) => setQuantity(count)} />
            </div>
            <div className="product_info_body-content-text">
                <HeadingUI text='Total: ' size="16px" />
                <span>${total}</span>
            </div>
            {size && <div className="product_info_body-content-text">
                <HeadingUI text='Size: ' size="16px" />
                <span>{size}</span>
            </div>}
        </div>
    )
}

export default ShopCartContent;