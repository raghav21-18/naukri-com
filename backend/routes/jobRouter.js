import express from "express";
import { getAllJobs, postJob,getmyJobs,updateJob, deletejob, getSinglejob } from "../contollers/jobController.js";
import{ isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post" ,isAuthorized,postJob);
router.get("/getmyjobs",isAuthorized, getmyJobs);
router.put("/update/:id", isAuthorized,updateJob);
router.delete("/delete/:id", isAuthorized,deletejob);
router.get("/:id", isAuthorized,getSinglejob);

export default router;