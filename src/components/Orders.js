import React, { useEffect, useState } from "react";
import { useStateValue } from "../contexts/StateProvider";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
  orderBy,
  getDoc,
  query,
} from "firebase/firestore";
import Order from "./Order";
import "../style/Orders.css"

function Orders() {
  const [state, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //collection ref
    const orderRef = collection(db, "users", state.user.uid, "orders");
    console.log("oRef", orderRef);

    //get collection data
    onSnapshot(orderRef, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log("Current data: ", doc, orders);
    });
  }, [state.user]);

  console.log("ord", orders);

  return (
      <div className="orders">
          <h1>Your Orders</h1>
          {orders?.map((value)=>{
              return <Order order={value}/>
          })}
      </div>
  )
}

export default Orders;
