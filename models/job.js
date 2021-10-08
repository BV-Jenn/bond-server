
//Require server
const express = require("express");
//Require mongoose package
const mongoose = require("mongoose";

const app = express();

app.use(express,static("public"));

//Specify tha connection pathway to get us to the Database we want to connect to
mongoose.connect("mongodb://localhost:27017/jobsDB");

//Define schema
const Schema = mongoose.Schema;

//Create new schema

const jobSchema = new mongoose.Schema ({
  jobId: {
  type: String,
  required: [true, "Please check your data entry, no job id specified!"]
},
  companyName: {
  type: String,
  required: [true, "Please check your data entry, no company name specified!"]
},
  jobPosition: {
  type: String,
  required: [true, "Please check your data entry, no job position specified!"]
},
  jobType: {
  type: String,
  required: [true, "Please check your data entry, no job type specified!"]
},
  location: {
  type: String,
  required: [true, "Please check your data entry, no location specified!"]
},
  salary: {
  type: Number,
  required:[true, "Please check your data entry, no salary specified!"]
},
  jobPublishedDate: {
  type: Date,
  required: [true, "Please check your data entry, no job published date specified!"]
},
  jobDescription: {
  type: String,
  required: [true, "Please check your data entry, no job description specified!"]
},
});

//Compile new mongoose model based on the Schema
const Job = mongoose.model("Job", jobSchema);

/*const job = new Job({
  jobId: "",
  companyName: "",
  jobPosition: "",
  jobType: "",
  location: "",
  salary: "",
  jobPublishedDate: "",
  jobDescription: ""
});*/

/*Job.insertMany([job1, job2, job3], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the jobs to jobsDB");
  }
});*/

//job.save();

//Export function to create "Job" model class
module.exports = mongoose.model("Job", JobSchema);
