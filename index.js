const express=require("express")
const app=express()

app.get('/data',(req,res)=>{
    res.send({message:"req from data page"})
    console.log("data page")
})
const data1=require('./page/data')
app.use('/',data1)
const cors=require('cors')
app.use(cors())
app.listen(8080,()=>{
    console.log("server running at port 8080")
})