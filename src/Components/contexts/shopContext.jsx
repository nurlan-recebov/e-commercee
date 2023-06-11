import { createContext, useState,useEffect } from "react";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
 
  const [detail,setDetail]=useState('')
  

  return (



    
    <ShopContext.Provider
      value={{detail,setDetail}}
    >
      {props.children}
    </ShopContext.Provider>
  );
  };
export default ShopContextProvider;
