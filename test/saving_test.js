const assert= require('assert')
const MarioChar = require('../models/mariochar')

describe('Saving records',()=>{

    //Create Tests
    //we can't use async and done together
    it('Save a record to a database', (done)=>{
        var char = new MarioChar({
            name : "Mario"
        })
        char.save().then(()=>{
            assert(char.isNew === false)//.isNew is a property given by mongoose it returns true when we have created the char locally but we havenot return it to the database.
            done()
        })
    })

        //next test

})