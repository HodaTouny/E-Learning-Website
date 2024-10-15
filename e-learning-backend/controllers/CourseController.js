const Courses = require('../models/course/CourseModel');

const multer = require('multer');

const Course=new Courses().getModel();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });


const createCourse = async (req, res) => {
    try {
        console.log(req.body);
        const { name, description, category, isPremium, price, teacherID, lessons } = req.body;
        const isPremVal = isPremium === 'true' ||isPremium===true;

        const finalPrice=isPremVal?price:0;

        const imgPath = req.files.image ? req.files.image[0].path.replace(/\\/g, '/') : '';
        const videoPath = req.files.video ? req.files.video[0].path.replace(/\\/g, '/') : '';

        const lessonsArray=Array.isArray(lessons)?lessons.map((lesson, index)=>({
            title:lesson.title,
            video:req.files.lessonVideos[index]?.path.replace(/\\/g, '/')
        })):[];
        

        const newCourse = new Course({
            name, 
            description, 
            category, 
            isPremium: isPremVal,
            price:finalPrice,
            image: imgPath,
            video:videoPath,
            teacherID,
            lessons:lessonsArray
        });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
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

const getCourseById=async(req, res)=>{
    try{
        const course=await Course.findOne({courseID:req.params.courseID});
        if(!course)
            return res.status(404).send('course is not found');
        res.status(200).json(course);
    }
    catch(err){
        res.status(500).send('server error');
    }
};
module.exports={createCourse, getCourses, deleteCourse, updateCourse, getCourseById}