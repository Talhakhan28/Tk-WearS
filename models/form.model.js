import mongoose from 'mongoose'

const formschema=mongoose.Schema({
    full_name:{
        type: String
    },
    
    
    phone:{
        type: String
    },
    email:{
        type: String
    },
    address:{
           type: String
    }
})

const form =mongoose.model("Form",formschema)

export default form;