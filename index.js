import express from 'express'
const app = express()
const port = 3000;

import mongoose from "mongoose"
import Form from "./models/form.model.js"; 

mongoose.connect('mongodb://127.0.0.1:27017/form-cruds')
.then(()=>{console.log('Database Connected.')})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use(express.static("public"));

app.listen(port,()=>{
    console.log("connected Successfully")
})

app.post("/home", async (req, res) => {
    try {
        await Form.create(req.body);
        res.redirect('/home?success=1');
    } catch (err) {
        res.redirect('/home?success=0');
    }
});

app.get('/home', (req, res) => {
    res.render('home', { success: false });
});