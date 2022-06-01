import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Start = () => {

    const navigate = useNavigate();
    const [name ,setName] = useState("");

    const formHandler = ()=>{
       localStorage.setItem('name',name);
       navigate('/quiz')
    }


  return (
   
    <St className="" >
      <form className="form d-flex flex-column text-center " onSubmit={formHandler}>
        <label className="text-white" htmlFor="">Enter Your name :
        <input className="form-control mt-2 mb-1" required="true" type="text" onChange={e=>setName(e.target.value)} />
        </label>
        <Button className="mt-2 mb-2 btn btn-primary" type="submit" >Start Quiz</Button>
      </form>
    </St>
  );
};


const St = styled.div`

display : flex;
justify-content : center;
margin-top : 30vh;



`

const Button = styled.button`

border-radius : 10px;
box-shadow : 0 0 5px rgba(0,0,0);


`



export default Start;
