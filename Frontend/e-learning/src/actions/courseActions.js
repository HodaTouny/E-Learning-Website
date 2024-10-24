import axios from 'axios';

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

//course details
export const ENROLL_COURSES_SUCCESS = 'ENROLL_COURSES_SUCCESS';
export const ENROLL_COURSES_FAILURE = 'ENROLL_COURSES_FAILURE';

//payment and otp
export const OTP_VERIFICATION_REQUEST = 'OTP_VERIFICATION_REQUEST';
export const OTP_VERIFICATION_SUCCESS = 'OTP_VERIFICATION_SUCCESS';
export const OTP_VERIFICATION_FAILURE = 'OTP_VERIFICATION_FAILURE';


export const fetchCourses = (id) =>async(dispatch)=>{
    dispatch({type: FETCH_COURSES_REQUEST});
    try{
      const response = await axios.get(`/getCourse/${id}`);
      console.log(response.data);
      dispatch({type: FETCH_COURSES_SUCCESS, payload: response.data});
    }
    catch(err){
      dispatch({type: FETCH_COURSES_FAILURE, payload: err.response?.data?.message||"error loading the course details!"});
    }
};


export const enrollCourse = (courseID, userID, token) =>async(dispatch)=>{
    try{
      const response = await axios.post(`http://localhost:5000/education/enrollCourse`,
        {
          studentId:userID, courseId:courseID
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );
      dispatch({type: ENROLL_COURSES_SUCCESS, payload: response.data.message});
    }
    catch(err){
      dispatch({type: ENROLL_COURSES_FAILURE, payload: err.response?.data?.message||"enrollment failed!"});
    }
};




export const verifyOtp = (userId, otp, course, token) => async (dispatch) => {
  try {
    dispatch({ type: OTP_VERIFICATION_REQUEST });
    const otpResponse = await axios.post('http://localhost:5000/payment/verify',
      { userId, otp },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    await axios.post(
      'http://localhost:5000/education/enrollcourse',
      { studentId: userId, courseID: course.courseID },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    await axios.post(
      'http://localhost:5000/education/addbalance',
      { teacherID: course.teacherID, amount: course.price * 0.8 },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    dispatch({
      type: OTP_VERIFICATION_SUCCESS,
      payload: {
        message: otpResponse.data.message || 'Payment verified successfully',
        course,
      },
    });
  } catch (error) {
    dispatch({
      type: OTP_VERIFICATION_FAILURE,
      payload: error.response?.data?.message || 'OTP verification failed. please try again',
    });
  }
};