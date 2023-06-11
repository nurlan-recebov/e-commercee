import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Flex from '../Components/FlexStyled'
import { useState } from 'react'
import { useCreateshopMutation } from '../Redux/CreateApi/api'
import { useNavigate, useLocation } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();
   const [createShop,data]=useCreateshopMutation()
 const[state,setState]=useState({
  name:'',
  link:''
})
 const handle=(e) => {
setState({...state,[e.target.name]:e.target.value})
 }
 const handleSubmit= async (e)=>{
  e.preventDefault();
await createShop(state);
navigate("/category")
  
}
  return (
   <div>
    <Button style={{marginBottom:"20px"}} onClick={()=>{navigate('/')}}>Back</Button>
    <Flex>

 <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control onChange={handle} value={state.name} name='name' type='text' placeholder='Name *' required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control onChange={handle} value={state.link} name='link' placeholder='Link *'></Form.Control>
        </Form.Group>
     
      
      
        <Button style={{marginTop:"20px"}} variant="success" type="submit" block>Add new Shop</Button>
       </Form>


    </Flex>
    </div>
  )
}
