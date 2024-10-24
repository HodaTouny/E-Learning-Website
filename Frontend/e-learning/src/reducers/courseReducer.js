import { FETCH_COURSES_REQUEST, 
         FETCH_COURSES_SUCCESS, 
         FETCH_COURSES_FAILURE,

         ENROLL_COURSES_FAILURE,
         ENROLL_COURSES_SUCCESS,

         OTP_VERIFICATION_REQUEST,
         OTP_VERIFICATION_SUCCESS,
         OTP_VERIFICATION_FAILURE,
        }
from "../actions/courseActions";

const initState={ loading:false, courses:[], course:null, enrollStatus:"", alertType:"", isEnrolled:false, err:""};

const courseReducer=(state=initState, action)=>{
    switch(action.type){
        case FETCH_COURSES_REQUEST:
            return {...state, loading:true}
        case FETCH_COURSES_SUCCESS:
            console.log(action.payload);
            return {...state, loading:false, course:action.payload, err:""}
        case FETCH_COURSES_FAILURE:
            return {...state, loading:false, course:{}, err:action.payload}
        
        case ENROLL_COURSES_FAILURE:
            return {...state, enrollStatus:action.payload}
        case ENROLL_COURSES_SUCCESS:
            return {...state, enrollStatus:action.payload}

        case OTP_VERIFICATION_FAILURE:
            return {...state, loading:false, enrollStatus:action.payload, alertType:"error"}
        case OTP_VERIFICATION_REQUEST:
            return {...state, loading:true}
        case OTP_VERIFICATION_SUCCESS:
            return {...state, loading:false, enrollStatus:action.payload.message, alertType:"success", isEnrolled:true,
                courses:[
                    ...state.courses, {
                        courseID:action.payload.course.courseID, courseName: action.payload.course.name
                    }
                ]
            }


        default:
            return state;
    }
};

export default courseReducer;