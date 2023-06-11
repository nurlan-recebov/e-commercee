import React from 'react'
import Card from "react-bootstrap/Card";
import { useContext } from 'react';
import { ShopContext } from "../Components/contexts/shopContext";
import Flex from "../Components/FlexStyled";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
export const Detail = () => {
    const{detail}=useContext(ShopContext)
    const navigate = useNavigate();
  return (
  <div style={{display:'flex',alignItems:'center',width:'100%',flexDirection:'column'}} >
    <h4>Detail</h4>
    <div><Button onClick={()=>{navigate('/')}}>Back</Button></div>
      <Flex>
       
       <div className="" style={{}}>
           <img
             className="img-default"
             style={{ height: "37rem", objectFit: "cover" }}
             variant="top"
             src={detail.hover}
           />
          
           
             
         </div>
   </Flex>
  </div>
  )
}
