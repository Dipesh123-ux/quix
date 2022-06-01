const Question = require('../models/question')

exports.getQuestions = (req,res)=>{

    Question.find({}).exec((err,ques)=>{

       if(err){
           return res.status(400).json({
               error : err
           })
       }
    
        return res.status(200).json({
            result : ques
        })
    })

}

exports.postQuestions = (req,res)=>{
   const {Questions, a , b , c , d ,Ans} = req.body;
   let ques = new Question({Questions: Questions,a : a,b : b, c : c,d : d,Ans : Ans})
   ques.save()
  
       return res.status(200).status({
           message : "question successfully added"
       })
 
}