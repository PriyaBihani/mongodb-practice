const assert= require('assert')
const MarioChar = require('../models/mariochar')

describe('Finding records',()=>{
    
    var char;

    beforeEach((done)=>{
        char = new MarioChar({
            name : "Mario"
        })
        char.save().then(()=>{
            assert(char.isNew === false)//.isNew is a property given by mongoose it returns true when we have created the char locally but we havenot return it to the database.
            done()
        })
    })
    it('finds one record from a database', (done)=>{
        MarioChar.findOne({name:"Mario"}).then((result)=>{
            assert(result.name === "Mario")
            done()
        })
    })

    it('finds one record by ID from a database', (done)=>{
        MarioChar.findOne({_id:char._id}).then((result)=>{
            assert(result._id.toString() === char._id.toString())
            done()
        })
    })
})