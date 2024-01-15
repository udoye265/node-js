const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "@gmail.com",
        pass : ""
    }
})
const mailoptions =  {
    from : "@gmail.com",
    to :"@gmail.com",
    subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}
transporter.sendMail(mailoptions, (error,info)=>{
    if (error){
        console.log(error)
    }else {
        console.log('Email sent: ' + info.response)
    }
})