const course=require('../controllers/CourseController')
const {Router}=require("express")
const multer=require('multer');

const router=Router()


const fileFilter = (req, file, cb) => {
    const allowedVideoTypes = /mp4|mkv|avi|mov/;
    const allowedImageTypes = /jpeg|jpg|png|gif/;

    const isVideos=allowedVideoTypes.test(file.mimetype);
    const isImage=allowedImageTypes.test(file.mimetype);
    if (isVideos||isImage) {
        return cb(null, true);
    }
    else {
        cb(new Error('Videos and images files only!'));
    }
};

const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './uploads');
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname);
    }
});

const upload=multer({
    storage, fileFilter
}).fields([
        {
            name:'image', maxCount:1
        },
        {
            name:'lessonVideos', maxCount:100
        }
    ]);

router.get('/getCourses', course.getCourses)

router.get('/getCourse/:courseID', course.getCourseById)

router.post('/addCourse', upload, course.createCourse);

router.delete('/deleteCourse/:courseID', course.deleteCourse)

router.put('/updateCourse/:courseID', course.updateCourse)

module.exports=router