const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
// const bodyParser = require("body-parser")
const nodemailer = require('nodemailer')

dotenv.config();

const profile = {
    host: 'smtp.gmail.com',
    port: 465,
    auth:{
        user: process.env.USER,
        pass: process.env.PASS
    }

}


const transporter = nodemailer.createTransport(profile)

.
transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Credential Login Worked!');
    }
  });



const app = express();
app.use(express.json())
    app.post('contact/send', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.messageHtml
    
    
    var mail = {
        from: name,
        to: process.env.USER,
        subject: 'Contact form request',
        html: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.status(201)
      }
    })
})

app.use(express.static(path.join(__dirname,'/build')));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
})

app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server is running on local host: ${process.env.API_PORT}`)
})

 