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






const app = express();
app.use(express.json())



//Used to let Node serve our files for out built react app
app.use(express.static(path.join(__dirname,'/build')));

//post request for contact form
app.post('/contact/send', (req, res) => {
    console.log('inside post ')
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const contactNum = (req.body.contactNum==null)?'No contact number provided':req.body.contactNum

    const content = {
        from: process.env.USER,
        to: process.env.USER,
        subject: `Contact form request from ${name}`,
        text: message,
        html: `<h3>From: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Contact Number: ${contactNum}</h3>
        <h4> ${message}</h4>`
    }
    const transporter = nodemailer.createTransport(profile)
    console.log(`request: ${JSON.stringify(req.body)}`)
    transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Credential Login Worked!');
        }
      });
    transporter.sendMail(content, (err, info) => {
        if (err) {
            res.json({
                msg: 'fail'
              })
          } else {
            res.json({
                msg: 'success'
              })
            // res.status(200);
          }
    });
    transporter.close()
    })


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    });

//get requests not handled will be sent to react app
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
})

app.listen(process.env.API_PORT || 5000, () =>{
    console.log(`Server is running on local host: ${process.env.API_PORT}`)
})

 