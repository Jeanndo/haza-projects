import patientInfos from "../models/Patient";
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

export const createPatient = catchAsync(async (req,res,next)=>{

    const newPatient = await patientInfos.create(req.body);

    console.log(req.body);
    
 
     res.status(201).json({
         status:"success",
         newPatient
     })
})


 export const getAllPatients =  catchAsync(async (req,res,next)=>{

const allPatients = await patientInfos.find();

res.status(200).json({
    status:'success',
    data:{
        allPatients 
    }
})

})

export const getPatient =   catchAsync(async(req,res,next)=>{
    
    const patient = await patientInfos.findById( req.params.id);

    if(!patient){
    return next(new AppError('No Patient Found With That ID ',404))
    }

    res.status(200).json({
        status:'success',
        data:{
        data:patient
        }
    })  
})

export const detetePatient =  catchAsync(async (req,res,next)=>{
 
    const patient= await patientInfos.findByIdAndRemove(req.params.id);
    
    
    if(!patient){
        return next(new AppError('Could not Delete Patient With That ID ',404))
        }
    
    res.status(204).json({
        status:'success',
        data:{
            message:null
        }
    })   
})

export const updatePatient =  catchAsync(async (req,res,next)=>{

   const patient = await patientInfos.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
   });

   if(!patient){
    return next(new AppError('Could not Update Patient With That ID ',404))
    }
        res.status(200).json({
         status:'success',
         data:{
            patient
         }
        })  
})