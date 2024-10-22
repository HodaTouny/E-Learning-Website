import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../assets/css/Courses.css';
import SuccessAlert from '../../SuccessAlert/SuccessAlert';
import { UserContext } from '../../userContext'; 

const UploadCourseForm = () => {
  const {setUser } = useContext(UserContext);
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    category: 'Backend Development',
    isPremium: false,
    price: 0,
    image: null,
    lessons: [{ title: '', video: null }]
  });

  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e, index) => {
    const { name } = e.target;
    if (name === 'image') {
      setCourseData(prevData => ({ ...prevData, image: e.target.files[0] }));
    } else if (name === 'video') {
      const newLessons = [...courseData.lessons];
      newLessons[index].video = e.target.files[0];
      setCourseData(prevData => ({ ...prevData, lessons: newLessons }));
    }
  };

  const handleLessonChange = (e, index) => {
    const { name, value } = e.target;
    const newLessons = [...courseData.lessons];
    newLessons[index][name] = value;
    setCourseData(prevData => ({ ...prevData, lessons: newLessons }));
  };

  const addLesson = () => {
    setCourseData(prevData => ({
      ...prevData,
      lessons: [...prevData.lessons, { title: '', video: null }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const localUser = localStorage.getItem('user');
    let teacherID = '';
    let teacherName = "";

    if (localUser) {
        const parsedUser = JSON.parse(localUser);
        teacherID = parsedUser.userID;
        teacherName = parsedUser.name;

      
        const createdCourses = Array.isArray(parsedUser.createdCourses) ? parsedUser.createdCourses : [];
        
        const formData = new FormData();
        formData.append('name', courseData.name);
        formData.append('description', courseData.description);
        formData.append('category', courseData.category);
        formData.append('teacherID', teacherID);
        formData.append('teacherName', teacherName);
        formData.append('isPremium', courseData.isPremium);
        formData.append('price', courseData.isPremium ? courseData.price : 0);
        formData.append('image', courseData.image);
        
        courseData.lessons.forEach((lesson, index) => {
            formData.append(`lessons[${index}][title]`, lesson.title);
            if (lesson.video) {
                formData.append(`lessonVideos`, lesson.video);
            }
        });

        try {
            const response = await axios.post(`${process.env.API_URL}/addCourse`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const token = localStorage.getItem('accessToken');
            if (token) {
                await axios.post(`${process.env.API_URL}/education/addcourse`, {
                    courseId: response.data.courseID,
                    teacherID: response.data.teacherID,
                }, {
                    headers: { 
                        'Authorization': `Bearer ${token}`,
                    },
                });
            }

           
              const updatedUser = {
                ...parsedUser,  
                createdCourses: [...createdCourses, { courseId: response.data.courseID }], // Add new course as an object
              };
              setUser(updatedUser); 


            setAlertMessage({ message: 'Course uploaded successfully!', type: 'success' });
        } catch (error) {
            console.error('Error uploading course', error);
            setAlertMessage({ message: 'Error uploading course', type: 'error' });
        }
    } else {
        console.error('No user found in localStorage');
    }
};

  return (
    <div className="upload-form-container">
      {alertMessage && <SuccessAlert message={alertMessage.message} type={alertMessage.type} />}

      <form onSubmit={handleSubmit} className="upload-course-form">
        <h2 className="form-title">Upload New Course</h2>

        {/* Course Info */}
        <div className="form-group">
          <label>Course Name:</label>
          <input type="text" name="name" value={courseData.name} onChange={handleChange} required className="input-field" />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={courseData.description} onChange={handleChange} required className="textarea-field"></textarea>
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={courseData.category} onChange={handleChange} required className="select-field">
            <option value="Backend Development">Backend Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
        </div>

        <div className="form-group premium-checkbox">
          <label>Premium Course:</label>
          <input type="checkbox" name="isPremium" checked={courseData.isPremium} onChange={handleChange} />
        </div>

        {courseData.isPremium && (
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={courseData.price} onChange={handleChange} required className="input-field" />
          </div>
        )}

        <div className="form-group">
          <label>Course Image:</label>
          <input type="file" name="image" onChange={handleFileChange} className="file-input" />
        </div>

        {/* Lessons Info */}
        {courseData.lessons.map((lesson, index) => (
          <div key={index} className="lesson-group">
            <h3>Lesson {index + 1}</h3>
            <div className="form-group">
              <label>Lesson Title:</label>
              <input type="text" name="title" value={lesson.title} onChange={(e) => handleLessonChange(e, index)} required className="input-field" />
            </div>

            <div className="form-group">
              <label>Lesson Video:</label>
              <input type="file" name="video" onChange={(e) => handleFileChange(e, index)} accept="video/*" className="file-input" />
            </div>
          </div>
        ))}

        <button type="button" onClick={addLesson} className="add-lesson-button">Add Lesson</button>

        <button type="submit" className="submit-button">Upload Course</button>
      </form>
    </div>
  );
};

export default UploadCourseForm;
