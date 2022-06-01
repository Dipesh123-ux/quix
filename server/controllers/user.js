const User = require('../models/user')

exports.addUser = (req,res)=>{
    const name = req.body.name

    let user = new User({name  : name})
    user.save()
    .then((result)=>{
        return res.json({
            message : 'User successfully added'
        })
    })

}

exports.getUserScores = (req, res) => {
    let name = req.params.username

    User.findOne({name: name}).then(user=>{
        if(!user){
            return res.status(404).json({
                error: 'User not found'
            })
        }
         return res.status(200).json({
             score : user.score
         })
    })

}

exports.postScore = (req, res) => {
    let name = req.params.username
    let  sc = req.body.score

    User.findOne({name: name}).then((user) => {
         
        if(!user){
            return res.status(404).json({
                error : 'User not found'
            })

        }
        user.score.push(sc)
        user.save()


    })
}