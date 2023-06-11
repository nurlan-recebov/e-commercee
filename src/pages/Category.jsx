import React from "react";
import Slider from "react-slick";
import { useEffect,useContext,useState } from "react";
import { useGetCategoryQuery } from "../Redux/CreateApi/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Flex from "../Components/FlexStyled";
import "./Category.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../Components/contexts/shopContext";

export const Category = () => {
  const { data, isLoading, error } = useGetCategoryQuery();
  const{setDetail}=useContext(ShopContext)
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  function addCard(info) {
    navigate('/detail')
    setDetail(info)
  }
  return (
    <div style={{display:'flex',alignItems:'center',width:'100%',flexDirection:'column'}}><h4>Category</h4 >
    <div><Button onClick={()=>{navigate('/')}}>Back</Button></div>
    <Flex>
    
      {data &&
        data.map((card) => (
          <div className="Card" style={{ width: "18rem" }}>
            <img
              className="img-default"
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={card.link}
            />
            <img
              className="img-back"
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={card.hover}
            />
            <div onClick={()=>addCard(card)} className="hover-items">
              <div className="hover-item">Add to Card</div>
            </div>
            <div className="icon-items">
              <div className="icon-item">
                <BiSearch style={{ fontSize: "18px" }}></BiSearch>
              </div>
              <div className="icon-item"> <AiOutlineHeart style={{ fontSize: "18px" }}></AiOutlineHeart></div>
            </div>
          </div>
        ))}
    </Flex>
    </div>
  );
};
