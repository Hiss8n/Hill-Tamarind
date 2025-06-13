const mongoose=require('mongoose')
const connectDb=async()=>{
    (await mongoose.connect(process.env.MONGO_URI))
    .then(()=>console.log('DATABASE CONNECTED'))
    .catch((e)=>console.log(e))
    try {
        
    } catch (error) {
        console.error('error',error)
        process.exit(1)
        
    }
}

module.exports=connectDb