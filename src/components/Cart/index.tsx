import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { useEffect, useState } from "react";
import { removeCart, setCount, resetCart } from "@/features/cartSlice";

interface Cart {
  disable: boolean;
}

const Cart: React.FC<Cart> = ({ disable }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const setFc = (value) => {
    dispatch(setCount(value));
  };

  const submitOrder = () => {
    console.log({
      ...cartItems,
      total: totalPrice,
    });
    dispatch(resetCart());
  };

  useEffect(() => {
    setCartItems(selector.cart);
  }, [selector.cart]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((acc, el) => {
        return acc + +el.price * el.quantity;
      }, 0);
      const totalC = cartItems.reduce((accTotal, elTotal) => {
        return accTotal + elTotal.quantity;
      }, 0);
      setTotalPrice(total.toFixed(2));

      setFc(totalC);
    } else {
      setTotalPrice(0);
      setFc(0);
    }
  }, [cartItems]);

  const deleteItemCart = (product) => {
    dispatch(removeCart(product.id));
  };

  return (
    <div
      className={`absolute bg-[white] pt-[20px] p-[10px] w-[400px] -right-full ${
        disable ? "opacity-0 pointer-events-none " : "opacity-100 "
      } transition-opacity  duration-200 ease-in-out [box-shadow:0_0_10px_1px_rgba(184,_184,_184,_0.904)]`}
    >
      <div className="flex flex-col pb-[40px] max-h-[500px] overflow-y-auto overflow-x-hidden">
        {cartItems.length > 0 ? (
          cartItems?.map((item) => (
            <div className="flex gap-[20px] mx-[10px] my-[10px] items-center [box-shadow:0_0_10px_2px_rgba(0,_0,_0,_0.222)] p-[5px] rounded-[10px] relative">
              <div className="min-w-[60px] h-[85px] relative">
                <img
                  src={item.image}
                  alt=""
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>{item.title}</p>
                <span>Кол-во: {item.quantity}</span>
                <p>Цена: {(item.price * item.quantity).toFixed(2)} $</p>
              </div>
              <span
                className="absolute w-[20px] h-[20px] bg-[red]
             flex justify-center cursor-pointer items-center 
             text-[white] rounded-[5px] -top-[10px] -right-[10px]"
                onClick={() => deleteItemCart(item)}
              >
                ✖
              </span>
            </div>
          ))
        ) : (
          <span>Корзина пуста</span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <Button text="Оформить заказ" variation="black" onClick={submitOrder} />
        <span>Итого: {totalPrice} $</span>
      </div>
    </div>
  );
};

export default Cart;
