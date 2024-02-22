
import { GiShoppingBag } from "react-icons/gi";


const Button01 = () => {

    return (
        <div>
            <button  className="bg-gradient-to-r from-primary to-secondary transition-all
 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group ">
<span className="group-hover:block hidden transition-all duration-200 text-lg font-medium">
<GiShoppingBag />

</span>

Order Now

</button>
        </div>
    );
};

export default Button01;