import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();

patientRouter
.route("/")
.get(patientControl.getAllPatients)
.post(patientControl.createPatient)

patientRouter
.route('/:id')
.get(patientControl.getPatient)
.delete(patientControl.detetePatient)
.patch(patientControl.updatePatient)


export default patientRouter;