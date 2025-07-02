const asyncHandler = (fun)=>{
    (res,req,next)=>{
        Promise.resolve(res,req,next)
        .catch((error)=>next(error))
    }
}







// const asyncHandler = (fun) => async(req,res,next)=>{
//     try{
//         await fun(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }