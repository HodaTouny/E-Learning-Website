import React, { useEffect, useState } from 'react';
import '../assets/allCourses.css';
import Navbar from '../Navbar/navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';


// const coursesData = [
//     {
//         id: 1,
//         categories: ['CSS', 'JavaScript'],
//         title: 'Quick Tip: Create a Very Simple Parallax Effect With CSS & JavaScript',
//         img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//         link: 'https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-build-a-dead-simple-parallax-effect-with-css-javascript--cms-33061?_ga=2.146015156.1249101154.1555312171-2126893531.1553152868',
//     },
//     // {
//     //     id: 2,
//     //     categories: ['CSS', 'JavaScript'],
//     //     title: 'How to Build a Static Portfolio Page With CSS & JavaScript',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/chart-pre.png',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-build-a-portfolio-page-with-css-javascript--cms-32933?_ga=2.268974834.267848227.1555345574-242901505.1471790948',
//     // },
//     // {
//     //     id: 3,
//     //     categories: ['CSS', 'JavaScript'],
//     //     title: 'How to Build a Responsive Multi-Column Layout With CSS Grid',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-column-layout-with-css-grid--cms-32769',
//     // },
//     // {
//     //     id: 4,
//     //     categories: ['JavaScript', 'jQuery'],
//     //     title: 'How to Create a Lightbox with HTML, CSS, and jQuery',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-lightbox-with-html-css-and-jquery--cms-32847',
//     // },
//     // {
//     //     id: 5,
//     //     categories: ['JavaScript', 'WordPress'],
//     //     title: 'Creating a Responsive Slider with JavaScript and CSS',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-slider-with-javascript-and-css--cms-32945',
//     // },
//     // {
//     //     id: 6,
//     //     categories: ['CSS', 'JavaScript'],
//     //     title: 'Quick Tip: Using CSS Variables to Create a Color Theme',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/quick-tip-using-css-variables-to-create-a-color-theme--cms-32887',
//     // },
//     // {
//     //     id: 7,
//     //     categories: ['jQuery', 'WordPress'],
//     //     title: 'How to Create an Image Gallery with jQuery and CSS',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-an-image-gallery-with-jquery-and-css--cms-33035',
//     // },
//     // {
//     //     id: 8,
//     //     categories: ['CSS', 'JavaScript', 'fullPage.js'],
//     //     title: 'How to Create a Full-Screen Scrolling Website with fullPage.js',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-full-screen-scrolling-website-with-fullpagejs--cms-33108',
//     // },
//     // {
//     //     id: 9,
//     //     categories: ['CSS', 'JavaScript'],
//     //     title: 'Creating a CSS Card Layout with Flexbox',
//     //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
//     //     link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-css-card-layout-with-flexbox--cms-32810',
//     // },
   
// ];

const AllCourses = () => {


    const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getCourses');
            setCourses(response.data);
            // setLoading(false);
        } catch (error) {
            // setError('Error fetching courses');
            // setLoading(false);
        }
        };

        fetchCourses();
    }, []);



  
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredCourses = courses.filter((course) => {
        return selectedCategory === 'All' || course.category.includes(selectedCategory);
    });

    return (
        <>
            <Navbar />

            <section className="author-archive m-5 pt-5">
                <div className="container pt-5">
                    <h1>Filter Courses</h1>
                    <div className='filters'>
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
    
                    <ol className="posts">
                        {filteredCourses.map((course) => (
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

                        {/* {filteredCourses.map((course) => (
                            <li key={course.id} className="post" data-category={course.categories.join(' ')}>
                                <article>
                                    <figure>
                                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                                            <img src={course.img} alt={course.title} />
                                        </a>
                                        <figcaption>
                                            <ol className="post-categories">
                                                {course.categories.map((cat, index) => (
                                                    <li key={index}>
                                                        {cat}
                                                    </li>
                                                ))}
                                            </ol>
                                            <h2 className="post-title">
                                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                                    {course.title}
                                                </a>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                </article>
                            </li>
                        ))}*/}
                    </ol>
                </div>
            </section> 
        </>
    );
};

export default AllCourses;