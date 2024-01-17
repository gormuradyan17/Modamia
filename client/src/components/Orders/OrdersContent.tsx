import { ArrayType, ObjectType } from "shared/helpers/helpers";
import OrderContent from "./OrderContent";
import './style.scss'

interface Props {
    orders?: ArrayType
}

const OrdersContent = ({
    orders = []
}: Props) => {
    return (
        <div className="orders__content customXScrollbar">
            <table className="orders__content-table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment Status</th>
                        <th>Fullfillment Status</th>
                        <th>Delivery Status</th>
                        <th>Delivery Method</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order: ObjectType, idx: number) => {
                        return <OrderContent key={idx} order={order} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersContent;