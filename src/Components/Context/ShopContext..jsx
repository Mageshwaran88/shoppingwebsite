import { createContext, useState } from "react";
import allproducts from "../Shopcategory/allproducts";


export const ShopContext = createContext(null);

const getDefaultcart =()=>{
    let cart ={};
    for(let i=0; i <allproducts.length+1; i++){
        cart[i]=0;
    }
    return cart
}

const ShopContextProvider = (props) =>{
    
    const [cartItems,setcartItems]=useState(getDefaultcart());

    const addtocart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removefromcart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) { 
                let itemInfo = allproducts.find(product => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    
    const getTotalCartItems =()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const products = {getTotalCartItems,getTotalCartAmount, allproducts,cartItems,addtocart,removefromcart};

    return(
        <ShopContext.Provider value={products}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;
