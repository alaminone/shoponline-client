import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authprovider/Authprovider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useContext(AuthContext);
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return;
        }

  
        try {
            await signIn(email, password);
            navigate(from);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Authentication failed!',
            });
            console.error('Authentication failed:', error);
        }
    };

    return (
        <section>
            <div className="hero min-h-screen flex justify-center items-center bg-gray-100">
                <div className="card w-full max-w-md p-8 rounded-md shadow-md">
                    <h3 className="text-3xl font-semibold text-center mb-4">Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2">Password</label>
                            <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
                    </form>
                    <p className="mt-4 text-center text-sm"> New here? <Link to={'/register'} className="text-blue-500 font-bold">Create a New Account</Link> </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
