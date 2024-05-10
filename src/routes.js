import React from "react";
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import CourseDetail from "./pages/Course_detail/Course_detail.jsx"; 
import Error404 from "./pages/404_Error/404_Error.jsx";
import LearningTrack from "./pages/Learning_track/Learning_track.jsx";
import About from "./pages/About/About.jsx";
const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/login",
        element:<Login />,
    },
    {
        path:"/signup",
        element :<Signup/>,
    },
    {
        path:'/error',
        element: <Error404/>
    },
    {
        path:'/course_detail',
        element:<CourseDetail/>
    },
    {
        path:'/learning_track',
        element:<LearningTrack/>
    },
    {
        path:'/about',
        element:<About/>
        
    }

]

export default routes;