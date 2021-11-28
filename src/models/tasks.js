const mongoose = require('mongoose')

const Task = mongoose.model("Task",{
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})
// const task1 = new Task({
//     description:'Clean your room',
//     completed:false
// })
// task1.save().then((task1)=>{
//     console.log(task1);
// }).catch((error)=>{
//     console.log('Error:',error);
// })

module.exports = Task