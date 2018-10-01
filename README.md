# Lab4

Codigo que se implemento 
const express = requere('express')
const appp = express()
app.get('/hello:name',(req, res)=>{
  const name = req.params.name
  res.send('Hello' + Name)
})
app.get('',(req, res)=>{
  res.send('Lab4 by Miguel Eduardo Cabrera Giron')

})

app.listen(4200, () =>{

console.log("Running in http://localhost:4200")
})
