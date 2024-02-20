import { Link } from "react-router-dom";
import Navbar from "../../page/home/nav/Navbar";

const Errorpage = () => {
    return (
        <div>
       <Navbar></Navbar>
         <img src={'https://i.ibb.co/c2GW3qw/2417237-fotor-2024011222540.jpg'} alt="" />

       <Link to={'/'}>
      <div className=" flex justify-center my-10">
      <button className=" btn btn-outline text-primary text-xl "> Back to Home</button>
      </div>
       </Link>
     </div>
    );
};

export default Errorpage;