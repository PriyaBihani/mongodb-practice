const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

//ES6 promises
mongoose.Promise = global.Promise

//connect to db before the test run
before((done)=>{

    // connection to mongoose 
    mongoose.connect('mongodb://localhost/testaroo', { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
    })
        mongoose.connection.once('open',()=>{
            console.log('connection is made')
            done()
        }).on('error',(error=>{
        console.log('error:' +error)
    }))
})

//Drop the characters collection before each test
beforeEach((done)=>{
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(()=>{ //mariochars is a collection
        done()
    })

})
