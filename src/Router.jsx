import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/home/Home";
import Errorpage from "./shared/errorpage/Errorpage";
import Login from "./SinINUP/Login";
import Register from "./SinINUP/Register";
import Addproduct from "./page/addproduct/Addproduct";
import Privetroute from "./Privetroute ";


 
 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Errorpage></Errorpage>,
     
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/register',
          element:<Register></Register>
         },
         {
          path:"addproduct",
          element:<Privetroute><Addproduct></Addproduct></Privetroute>
         }
      ]
    },
  ]);