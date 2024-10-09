const Courses = require('../models/course/CourseModel');
const Course=new Courses().getModel();

const createCourse=async (req, res)=>{
    try{
        const newCourse=new Course(req.body);
        await newCourse.save();
        res.status(201).json(newCourse);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

const getCourses=async (req, res)=>{
    try{
        const courses=await Course.find();
        res.status(201).json(courses);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ courseID: req.params.courseID });
        if (!course) { 
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).send("Course deleted successfully");
    } catch (err) {
        res.status(500).json({ error: "Failed to delete the course" });
    }
};

const updateCourse=async(req, res)=>{
    try{
        const course=await Course.findOneAndUpdate({courseID:req.params.courseID}, req.body, {new: true, runValidators:true});
        if(!course) return res.status(404).json({error:"course is not found"});
        res.status(200).json(course);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports={createCourse, getCourses, deleteCourse, updateCourse}