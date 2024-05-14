import React from "react";
// import Home from "./pages/Home/Home.jsx"
// import Login from "./pages/Login/Login.jsx";
// import Signup from "./pages/Signup/Signup.jsx";
// import Course_detail from "./pages/Course_detail/Course_detail.jsx"; 
// import Error404 from "./pages/404_Error/404_Error.jsx";
import Home from "./buildPage/home/Home.jsx"
import LearningTracks from "./buildPage/learningTracks/LearningTracks.jsx"
import AboutUs from "./buildPage/aboutUs/AboutUs.jsx"
import Contact from "./buildPage/contact/Contract.jsx"
import Login from "./buildPage/login/Login.jsx"
import Signup from "./buildPage/signup/Signup.jsx"
import CourseDetail from "./buildPage/courseDetail/CourseDetail.jsx";
import CourseTrack from './buildPage/courseTrack/CourseTrack.jsx';
import Projects from "./buildPage/projects/Projects.jsx";
import ProjectDetail from "./buildPage/projectDetail/ProjectDetail.jsx";
const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/learning_tracks",
        element:<LearningTracks/>

    },
    {
        path:"/course_detail",
        element:<CourseDetail/>
    },
    {
        path:"/about_us",
        element:<AboutUs/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/learning",
        element:<CourseTrack/>
    },
    {
        path:"/projects",
        element:<Projects/>
    },
    {
        path:"/project_detail",
        element:<ProjectDetail/>
    }
    

    // {
    //     path:"/",
    //     element:<Home />,
    // },
    // {
    //     path:"/login",
    //     element:<Login />,
    // },
    // {
    //     path:"/signup",
    //     element :<Signup/>,
    // },
    // {
    //     path:'/error',
    //     element: <Error404/>
    // },
    // {
    //     path:'/course_detail',
    //     element:<Course_detail/>
    // },


]

export default routes;