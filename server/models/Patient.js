import validator from "validator";
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientName:{
        type: String,
        required: [true, " patient name is required"]
    },
    phone:{
       
        type: String,
        default:"0123456"
    },
    home:{
        type:String,
        required:[true, "Home name is required"]
    },
    email:{
        type:String,
        validate:[validator.isEmail,"please provide a valid email"],
        unique:[true,'email should unique']
       
    }
});

const PatientInfos = mongoose.model("PatientInfos", patientSchema);
export default PatientInfos;