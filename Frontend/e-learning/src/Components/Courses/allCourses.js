import React, { useEffect, useState } from 'react';
import '../assets/allCourses.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getCourses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses', error);
            }
        };

        fetchCourses();
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Filter courses by category
    const filteredCourses = courses.filter((course) => {
        return (
            (selectedCategory === 'All' || course.category.includes(selectedCategory)) &&
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by name
        );
    });

    const handleShowMore = () => {
        setShowAll(!showAll); // Toggle showing all courses
    };

    return (
        <>
            <section className="author-archive m-5 pt-5">
                <div className="container pt-5">
                    <h1>Courses</h1>
                    <div className="filters">
                        {['All', 'Backend Development', 'Frontend Development', 'Artificial Intelligence', 'UI/UX Design'].map((category) => (
                            <label key={category}>
                                <input
                                    type="radio"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={handleCategoryChange}
                                    name="categories"
                                />
                                {category}
                            </label>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="search-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom:'20px' }}>
                        <div style={{ position: 'relative', width: '900px' }}>
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                                style={{
                                    width: '100%',
                                    borderRadius: '14px',
                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: 'white',
                                    padding: '10px 40px', 
                                    color: 'black',
                                    border: '1px solid #E5E4E2'
                                }}
                            />
                            <FaSearch style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                color: '#999',
                            }} />
                        </div>
                    </div>

                    <ol className="posts">
                        {filteredCourses.slice(0, showAll ? filteredCourses.length : 12).map((course) => (
                            <li key={course.courseID} className="post" data-category={course.category}>
                                <article>
                                    <figure>
                                        <Link to={`/course/${course.courseID}`} target="_blank" rel="noopener noreferrer">
                                            <img src={`http://localhost:5000/${course.image}`} alt={course.name} className="course-image" />
                                        </Link>
                                        <figcaption>
                                            <ol className="post-categories">
                                                <li>{course.category}</li>
                                            </ol>
                                            <h2 className="post-title">
                                                <Link to={`/course/${course.courseID}`} target="_blank" rel="noopener noreferrer">
                                                    {course.name}
                                                </Link>
                                            </h2>
                                            <p>{course.description}</p>
                                            {course.price && <p>Price: ${course.price}</p>}
                                            <p>Created On: {new Date(course.createdDate).toLocaleDateString()}</p>
                                            <p>{course.isPremium ? 'Premium Course' : 'Free Course'}</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </li>
                        ))}
                    </ol>

                    {/* Show More Button */}
                    {filteredCourses.length > 12 && (
                        <button
                            onClick={handleShowMore}
                            className="show-more-button"
                            style={{
                                borderRadius: '14px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                marginTop: '20px',
                                color: 'black',
                                border: 'none'
                            }}
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </button>
                    )}
                </div>
            </section>
        </>
    );
};

export default AllCourses;
