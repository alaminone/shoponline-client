import { NavLink } from "react-router-dom";
const NavbarRoute = () => {
    const navlink = <>
    
    <li>
        <NavLink to={'/'} 
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Home</NavLink>
    </li>
    <li>
        <NavLink to={'/toprated'}
             className={({ isActive, isPending }) =>
             isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
           }
        >Top Rated</NavLink>
    </li>
    <li>
        <NavLink to={'/kidswear'}
         className={({ isActive, isPending }) =>
         isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
       }
        >
            Kids Wear
        </NavLink>
    </li>
    <li>
        <NavLink to={'/manswear'}
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Mans Wear</NavLink>
    </li>
    <li>
        <NavLink to={'/womenswear'}
            className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "font-bold  text-primary text-xl border-b-4  border-primary" : ""
          }
        >Womens Wear</NavLink>
    </li>
 
   
    
    </>

    return (
        <div className=" flex container  items-center py-2 shadow ">
        <div className=" ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
             z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-950 dark:text-white">
        {navlink}
        
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex justify-center  gap-5 text-xl font-semibold cursor-pointer ">
    {navlink}
     
          </ul>
        </div>
      
      </div>
    );
};

export default NavbarRoute;