const assert= require('assert')
const MarioChar = require('../models/mariochar')

describe('Deleting records',()=>{
    
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
    it('Delete one record from a database', async()=>{

        await MarioChar.findOneAndRemove({name:"Mario"})
        const result = await MarioChar.findOne({name:"Mario"})
        await assert(result === null)
    })

})