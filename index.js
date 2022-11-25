const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4000;

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
	res.send("hai my name is murali")
})
app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age}=req.body
	console.log(name,age,"values")
})

app.listen(port,()=>console.log("server is in 4000 port"))