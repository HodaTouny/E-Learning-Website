import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Courses.css';

const UploadCourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    category: 'Backend Development',
    isPremium: false,
    price: 0,
    image: null,
    lessons: [{ title: '', video: null }]
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData({
      ...courseData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e, index) => {
    const { name } = e.target;
    if (name === 'image') {
      setCourseData({ ...courseData, image: e.target.files[0] });
    } else if (name === 'video') {
      const newLessons = [...courseData.lessons];
      newLessons[index].video = e.target.files[0];
      setCourseData({ ...courseData, lessons: newLessons });
    }
  };

  const handleLessonChange = (e, index) => {
    const { name, value } = e.target;
    const newLessons = [...courseData.lessons];
    newLessons[index][name] = value;
    setCourseData({ ...courseData, lessons: newLessons });
  };

  const addLesson = () => {
    setCourseData({
      ...courseData,
      lessons: [...courseData.lessons, { title: '', video: null }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', courseData.name);
    formData.append('description', courseData.description);
    formData.append('category', courseData.category);
    formData.append('isPremium', courseData.isPremium.toString());
    formData.append('price', courseData.isPremium ? courseData.price : 0);
    formData.append('image', courseData.image);
    
    courseData.lessons.forEach((lesson, index) => {
        formData.append(`lessons[${index}][title]`, lesson.title);
      if(lesson.video){
        formData.append(`lessonVideos`, lesson.video);
      }
    });

    try {
      const response = await axios.post('http://localhost:5000/addCourse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading course', error);
    }
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleSubmit} className="upload-course-form">
        <h2 className="form-title">Upload New Course</h2>

{/* course info */}
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
{/* lessons info */}

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
