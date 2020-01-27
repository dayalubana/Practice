express=require('express')
// nodemailer=require('nodemailer')
// bodyParser=require('body-parser')
ejs=require('ejs')
path=require('path')

app=express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     console.log('hello world')
//     res.send('hello world')
// })

var index=require('./routes/index')
app.use('/',index)


app.listen(3000)
console.log('app running on 3000....')