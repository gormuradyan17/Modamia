import { useEffect, useState } from 'react'
import Container from "layout/Container/Container";
import './style.scss'
import { ObjectType } from 'shared/helpers/helpers';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import EmptyBody from 'shared/ui/EmptyBodyUI/EmptyBodyUI';
import { addCart } from 'services/userService';
import CartProduct from './CartProduct';


const ShopCart = () => {
  const [modelData, setModelData] = useState<any>([])

  const link = {
    url: '/customization',
    CTAText: 'Start Shopping'
  }

  useEffect(() => {
    if (localStorage.hasOwnProperty('basket')) {
      setModelData(JSON.parse(localStorage.getItem('basket') || '[]'))
    }
  }, [])

  const checkoutItem = async (cartItem: ObjectType) => {
    await addCart({ details: cartItem })
    await removeFromCart(cartItem.id)
  }

  const removeFromCart = async (id: string) => {
    const data = localStorage.hasOwnProperty("basket") ? JSON.parse(localStorage.getItem("basket") || '[]') : []
    const newData = data?.filter((item: ObjectType) => item?.id !== id);
    if (!newData.length) {
      localStorage.removeItem('basket')
      setModelData([])
    }
    else {
      localStorage.setItem("basket", JSON.stringify(newData))
      setModelData(newData)
    }
  }

  return (
    <Container>
      {!modelData.length ? <EmptyBody
        icon={faCartShopping}
        heading='Your shop cart is empty'
        link={link}
      /> :
        <div className="shop_container">
          {modelData.map((data: ObjectType, idx: number) => {
            return <CartProduct
              data={data}
              key={idx}
              checkoutItem={checkoutItem}
              removeFromCart={removeFromCart}
            />
          })}
        </div>
      }
    </Container>
  )
}


export default ShopCart;