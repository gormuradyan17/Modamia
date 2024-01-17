import { ObjectType, getConvertedOrderData } from "shared/helpers/helpers";

interface Props {
    order: ObjectType
}

const OrderContent = ({
    order
}: Props) => {
    return (
        <tr className="order__content">
            <td>#{order.order_number || ''}</td>
            <td>{getConvertedOrderData(order.created_at) || ''}</td>
            <td>{order.number || ''}</td>
            <td>{order.customer || ''}</td>
            <td>{order.total_price && `$${order.total_price}`}</td>
            <td>{order.financial_status || ''}</td>
            <td>{order.fulfillment_status || ''}</td>
            <td>{order.delivery_status || ''}</td>
            <td>{order.delivery_method || ''}</td>
            <td>{order.tags}</td>
        </tr>
    );
};

export default OrderContent;