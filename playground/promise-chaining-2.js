require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('619608b65aa86b307cabbe29').then((tasks)=>{
//     console.log(tasks);
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskandCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskandCount('6193c5d93ccc9ca50513fb23').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})



