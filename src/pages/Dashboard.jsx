import Card from "../components/Utilities/Card";

import Overview from "../components/UI/dashboard-components/Overview";
import Products from "../components/UI/dashboard-components/Products";
import Orders from "../components/UI/dashboard-components/Orders";
import Settings from "../components/UI/dashboard-components/Settings";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const Dashboard = (props) => {

  const user = useSelector(state => state.login.user)
  const logged = useSelector(state => state.login.loggedIn)

  let orderArr = [
    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
   
   



    
  ]

   const  {action} =  useParams()
   
  

  if(action === "overview") {

     return (
       <Overview user={user} logged={logged}/>
   )
 }


 if(action === "products") {

     return (
        <Products user={user} logged={logged}/>
   )
 }

 if(action === "orders") {

     return (
        <Orders user={user} logged={logged} orders={orderArr}/>
   )
  }

  if(action === "settings") {

     return (
        <Settings user={user} logged={logged}/>
   )
 }
}

export default Dashboard;