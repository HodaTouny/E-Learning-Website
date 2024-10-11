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
    video: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData({
      ...courseData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === 'image')
      setCourseData({ ...courseData, image: e.target.files[0] });
    else if (name === 'video')
      setCourseData({ ...courseData, video: e.target.files[0] });
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
    formData.append('video', courseData.video);

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

        <div className="form-group">
          <label>Course Video:</label>
          <input type="file" name="video" onChange={handleFileChange} accept="video/*" className="file-input" />
        </div>

        <button type="submit" className="submit-button">Upload Course</button>
      </form>
    </div>
  );
};

export default UploadCourseForm;
