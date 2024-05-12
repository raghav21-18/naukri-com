import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({

title: {
type: String,

required: [true, "Please provide job title"],

minlength: [3, "Job title must contain at least 3 characters!"],

maxlength: [50, "Job title cannot exceed 50 characters!"],
},
description: {

type: String,

required: [true, "Please provide job description"],

minlength: [3, "Job description must contain at least 50 characters!"], maxlength: [350, "Job description cannot exceed 350 characters!"],
},
category: {

type: String,

required: [true, "Job category is required!"] 
},
country: {

    type: String,
    
    required: [true, "Job Country is required!"],
},
    city: {
    
    type: String,
    
    required: [true, "Job city is required!"],
    
    },
    
    location: {
    
    type: String,
    
    required: [true, "Please provide exact location!"],
    
    minlength: [50, "Job location must contain at least 50 characters!"],
    
    },
    fixedSalary:{
    
    type: Number,
    
    minlength: [4, "Fixed salary must contain at least 4 digits!"],
    
    maxlength: [9, "Fixed salary cannot exceed 9 digits!"]
    
    },
    
    salaryFrom:{
    
    type: Number,
    
    minlength: [4, "Salary From must contain at least 4 digits!"],
    
    maxlength: [9, "Fixed salary cannot exceed 9 digits!"]

    },

    salaryTo: {

        type: Number,
        
        minlength: [4, "salaryTo must contain at least 4 digits!"],
        
        maxlength: [9, "salaryTo cannot exceed 9 digits!"],
        
    },
        expired: {
        
        type: Boolean,
        
        default: false,
        
        },
        
        jobPostedOn:{
        
        type: Date,
        
        default: Date.now,
        },
        postedBy: {
        
        type: mongoose.Schema.ObjectId,
        
        ref: "User", required: true,
        },
        
});

export const Job = mongoose.model("job", JobSchema);
