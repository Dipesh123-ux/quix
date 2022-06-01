import React,{ useState, useContext} from "react";
import styled from 'styled-components'

const Question = ({ q, selected, isCorrect }) => {

  const [a,seta] = useState(false);
  const [b,setb] = useState(false);
  const [c,setc] = useState('');
  const [d,setd] = useState(false);
  const colorChange = ()=>{
     if(q.Ans === q.a){
        seta("rgb(62, 233, 62)");
        setb("rgb(239, 65, 65)")
        setc("rgb(239, 65, 65)")
        setd("rgb(239, 65, 65)")
     }
     else if(q.Ans  ===  q.b){
      seta("rgb(239, 65, 65)");
      setb("rgb(62, 233, 62)")
      setc("rgb(239, 65, 65)")
      setd("rgb(239, 65, 65)")
     }
     else if(q.Ans  ===  q.c){
      seta("rgb(239, 65, 65)");
      setb("rgb(239, 65, 65)")
      setc("rgb(62, 233, 62)")
      setd("rgb(239, 65, 65)")
     }
     else if(q.Ans  ===  q.d){
      seta("rgb(239, 65, 65)");
      setb("rgb(239, 65, 65)")
      setc("rgb(239, 65, 65)")
      setd("rgb(62, 233, 62)")
     }
  }



  return (
    <div className="container-fluid text-center align-items-center d-flex flex-column mt-5 mb-3">
      <h5 className="w-75 text-white mb-2 mt-2" dangerouslySetInnerHTML={{ __html: q.Questions }} />
        <Button
          style={{backgroundColor:`${a}`}}
          className="w-75 p-2 mt-2"
          onClick={()=>{
                        selected(q.a) 
                        colorChange()
                     
                        }}
          dangerouslySetInnerHTML={{ __html: q.a }}
        />
        <Button
          style={{backgroundColor:`${b}`}}
          className="w-75 p-2 mt-2"
          onClick={()=>{
               selected(q.b) 
               colorChange()
            
             }}
          dangerouslySetInnerHTML={{ __html: q.b }}
        />
        <Button
          style={{backgroundColor:`${c}`}}
          className="w-75 p-2 mt-2"
          onClick={()=>{
                    selected(q.c) 
                    colorChange()
                     }}
          dangerouslySetInnerHTML={{ __html: q.c }}
        />
        <Button
          style={{backgroundColor:`${d}`}}
          className="w-75 p-2 mt-2"
          onClick={()=>{
                        selected(q.a) 
                        colorChange()
                         }}
          dangerouslySetInnerHTML={{ __html: q.d }}
        />
    </div>
  );
};

const Button = styled.button`

border : none;
border-radius : 10px;

&:hover{
  box-shadow : 0 0 5px rgba(0,0,0);
}


`

export default Question;
