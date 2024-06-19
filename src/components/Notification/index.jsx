import { resetNotification } from "@/features/cartSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Notification = () => {
  const [show, setShow] = useState(false);
  const notification = useSelector((state) => state.cart.notification);
  const notificationText = useSelector((state) => state.cart.notificationText);
  const dispatch = useDispatch();

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(resetNotification());
      }, 1000);
    }
  }, [notification, dispatch]);

  useEffect(() => {
    notification === true ? setShow(true) : setShow(false);
  }, [notification]);

  return (
    <div
      className={`fixed px-[10px] py-[20px] z-10 bg-[rgb(46,_46,_46)] text-white rounded-[10px] top-[60px] left-[0] transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1>{notificationText}</h1>
    </div>
  );
};

export default Notification;
