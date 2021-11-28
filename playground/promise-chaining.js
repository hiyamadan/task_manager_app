require('../src/db/mongoose')
const User = require('../src/models/users')

// User.findByIdAndUpdate('6193b61f90060d01c8f240d2',{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6193b61f90060d01c8f240d2',2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})