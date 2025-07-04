import dotenv from "dotenv"
import connectDB from "./db/ind.js"
import app from './app.js'

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Listening on port : ${process.env.PORT || 8000}`)
    })
})
.catch((error)=>{
    console.log(`MongoDB failed : ${error}`)
})

// const app=express()

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error : ",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log(`Error : ${error}`)
//         throw error
//     }
// })()