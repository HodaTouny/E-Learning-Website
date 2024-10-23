import React, { useEffect, useState } from 'react';
import '../assets/allCourses.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaSearch, FaFilter } from 'react-icons/fa';
const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All'); 
    const [filterVisible, setFilterVisible] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`/getCourses`);
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

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setFilterVisible(false);
    };

    const filteredCourses = courses.filter((course) => {
        return (
            (selectedCategory === 'All' || course.category.includes(selectedCategory)) &&
            (selectedType === 'All' || (selectedType === 'Free' && !course.isPremium) || (selectedType === 'Premium' && course.isPremium)) &&
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
    });

    const handleShowMore = () => {
        setShowAll(!showAll); 
    };

    const handleCourseClick = (courseID) => {
        navigate(`/course/${courseID}`);
    };

    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
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

                    <div className="search-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
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

                        <div style={{ position: 'relative', marginLeft: '20px', cursor: 'pointer' }}>
                            <FaFilter
                                onClick={toggleFilterVisibility} 
                                style={{
                                    fontSize: '24px',
                                    color: '#999',
                                }}
                            />
                            {filterVisible && (
                                <div className="filter-dropdown">
                                    <label>
                                        <input
                                            type="radio"
                                            value="All"
                                            checked={selectedType === 'All'}
                                            onChange={handleTypeChange}
                                            name="type"
                                        />
                                        All
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Free"
                                            checked={selectedType === 'Free'}
                                            onChange={handleTypeChange}
                                            name="type"
                                        />
                                        Free
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Premium"
                                            checked={selectedType === 'Premium'}
                                            onChange={handleTypeChange}
                                            name="type"
                                        />
                                        Premium
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <ol className="posts">
                        {filteredCourses.slice(0, showAll ? filteredCourses.length : 8).map((course) => (
                            <li key={course.courseID} className="post" data-category={course.category}>
                                <article>
                                    <figure>
                                        <img 
                                            src={`/${course.image}`} 
                                            alt={course.name} 
                                            className="course-image" 
                                            onClick={() => handleCourseClick(course.courseID)} 
                                        />
                                        <figcaption>
                                            <ol className="post-categories">
                                                <li>{course.category}</li>
                                            </ol>
                                            <h2 className="post-title">
                                                <span onClick={() => handleCourseClick(course.courseID)} style={{ cursor: 'pointer' }}>
                                                    {course.name}
                                                </span>
                                            </h2>
                                            <p>Created On: {new Date(course.createdDate).toLocaleDateString()}</p>
                                            <p>{course.isPremium ? 'Premium Course' : 'Free Course'}</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </li>
                        ))}
                    </ol>

                    {filteredCourses.length > 8 && (
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
