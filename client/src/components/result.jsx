import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components'
const Result = () => {
    const score = localStorage.getItem('score');
    const name = localStorage.getItem('name');
    const navigate = useNavigate();
  return (
    <Res>
            <h2>{name}</h2>
            <br />
            <h2>Score : {score}</h2>
      
        <br />
        <button className="btn btn-dark" onClick={
            ()=>{
                navigate('/')
            }
        }>Play again</button>
    </Res>
  )
}

const Res = styled.div`

display : flex;
flex-direction : column;
height : 300px;
width  : 300px;
background-color:white;
justify-content : center;
align-items: center;
text-align:center;
border-radius: 10px;
margin:auto;
margin-top:10vh;


`



export default Result