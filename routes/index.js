route=express()
route.get('/',(req,res)=>{
    res.render('index')
})
module.exports=route;