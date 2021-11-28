
const{MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewURLParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName)


    // db.collection('users').insertOne({
    //     name: 'Hiya',
    //     age:27
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.insertedId);

    // })


    // db.collection('users').insertMany([{

    //     name: 'Jen',
    //     age:28
    // },
    // {

    //     name: 'Joey',
    //     age:29
    // }],(error,result)=>{
    //     if(error){
    //                 return console.log('Unable to insert user');
    //             }
    //     console.log(result.insertedIds);

    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description:'desc 1',
    //         completed:true
    //     },
    //     {
    //         description:'desc 2',
    //         completed:false
    //     },
    //     {
    //         description:'desc 3',
    //         completed:true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert New Task');
    //     }
    //     console.log(result.insertedIds);

    // })
    // db.collection('users').findOne({name:'Jen'},(error,user)=>{
    //     if(error){
    //                 return console.log('Unable to fetch');
    //             }
    //     console.log(user);
    // })
    // db.collection('users').find({age:29}).toArray((error,users)=>{
    //     console.log(users);
    // })
    //     db.collection('tasks').findOne({_id : new ObjectID("61910aad0eeb30c9dfa86b02")},(error,tasks)=>{
    //     if(error){
    //                 return console.log('Unable to fetch');
    //             }
    //     console.log(tasks);
    // })
    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6191095070c95a432117c022")
    // },
    // {
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);

    // })
    // db.collection('tasks').updateMany({
    //     completed:false
    // },
    // {
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);

    // })
    // db.collection('users').deleteMany({
    //     age:29
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error);
    // })
    db.collection('tasks').deleteOne({
        description:'desc 1'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error);
    })

})