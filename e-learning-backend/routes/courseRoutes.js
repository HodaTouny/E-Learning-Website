const course=require('../controllers/CourseController')
const {Router}=require("express")
const router=Router()

router.get('/getCourses', course.getCourses)

router.post('/addCourse', course.createCourse);

router.delete('/deleteCourse/:courseID', course.deleteCourse)

router.put('/updateCourse/:courseID', course.updateCourse)

module.exports=router