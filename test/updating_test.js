const assert= require('assert')
const MarioChar = require('../models/mariochar')

describe('Updating records',()=>{
    
    var char;
    beforeEach((done)=>{
        char = new MarioChar({
            name : "Mario",
            weight:50
        })
        char.save().then(()=>{
            assert(char.isNew === false)//.isNew is a property given by mongoose it returns true when we have created the char locally but we havenot return it to the database.
            done()
        })
    })
    it('Update one record in a database', async()=>{

        await MarioChar.findOneAndUpdate({name:"Mario"},{name:"luigi"})
        const result = await MarioChar.findOne({_id:char._id})
        assert(result.name === 'luigi')
    })

    it('Increments the weight by one', async()=>{

        await MarioChar.update({},{$inc: {weight:1}})
        const record=await MarioChar.findOne({name:"Mario"})
        assert(record.weight)
    })

})