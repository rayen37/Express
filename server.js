const express=require('express')

const app=express()

const port=5000

const logger=(req,res,next)=>{
    const date=new Date()
    if(date.getDay()==6||date.getDay()==0||date.getHours()<9||date.getHours()>=17)
    {
        return res.sendFile(__dirname+'/public/timer.html')
    }
    next()

}

app.get('/Home',logger ,(req, res) => {
    res.sendFile(__dirname+'/public/Home.html')
  })

  app.get('/Services',logger ,(req, res) => {
    res.sendFile(__dirname+'/public/Services.html')
  })

  app.get('/Contact',logger ,(req, res) => {
    res.sendFile(__dirname+'/public/Contact.html')
  })
//   app.get('style.css',logger(req,res)=>{
//       req.sendFile(__dirname+'/public/style.css')
//   })
app.listen(port,console.log(`the server is running on ${port}`))