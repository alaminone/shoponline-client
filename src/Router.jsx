import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/home/Home";
import Errorpage from "./shared/errorpage/Errorpage";


 
 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Errorpage></Errorpage>,
     
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        }
      ]
    },
  ]);