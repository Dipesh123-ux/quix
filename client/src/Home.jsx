import { getQuestions } from "./actions/ques.jsx";
import { useState, useEffect,useContext } from "react";
import Question from './components/Question.jsx'
import ScoreCard from './components/scorecard'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const [questions, setQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score,setScore] = useState(0);
  const navigate = useNavigate()
  var ans = [];

  const getQues = () => {
    getQuestions().then((data) => {
      console.log(data.result)
       ans = data.result.sort(() => 0.5 - Math.random())
       ans.slice(0,10)
      setQuestions(ans)
    });
  };

  const handleSubmit = ()=>{
     localStorage.setItem('score',score);
     navigate("/result")

  }

  const computeAns = (answer,correct) => {
     if(answer === correct){
       setIsCorrect(true)
   
       setScore(score=>score+1)
       
      
     }
     else{
      setIsCorrect(false)
     }
  }

  useEffect(() => {
    getQues();
  }, []);

  const showData = ()=>{
    return questions.map((q)=>(
        <Question isCorrect={isCorrect} q={q} selected={answer => computeAns(answer,q.Ans)} ></Question>
        
    ))
  }

return (
  <div>
   
      <div >
      <ScoreCard score={score} />
      </div>
      
      <div style={{marginTop:"16px",marginLeft:"90vw"}} className="w-25">
      <button style={{position:"fixed"}} className="btn btn-dark" onClick={handleSubmit} >Submit</button>
      </div>

     
    <br />
    {showData()}
    <br />
    <br />
  </div>

  
)
    
};

export default Home;
