import Container from "layout/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders, getUserOrdersLoading } from "redux/reducers/userReducer";
import { getUserShopifyOrders } from "services/userService";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { appColor } from "shared/helpers/helpers";
import OrdersContent from "components/Orders/OrdersContent";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";

const Orders = () => {
    
    const dispatch = useDispatch()
    const userOrders = useSelector(getUserOrders)
    const userOrdersLoading = useSelector(getUserOrdersLoading)

    useEffect(() => {
        getUserShopifyOrders(dispatch)
    }, [])

    return (
        <Container>
            <div className="orders">
                <HeadingUI text="My Orders" size="28px" color={appColor} />
                {userOrdersLoading 
                    ? <CustomizationLoader />
                    :userOrders?.length
                    ? <OrdersContent orders={userOrders} />
                    : <HeadingUI color={appColor} align="center" text="You don't have any orders" />
                }
            </div>
        </Container>
    );
};

export default Orders;