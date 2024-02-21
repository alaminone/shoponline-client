import { Link, useNavigate } from "react-router-dom";
import usePublicApi from "../hook/publicApi/usePublicApi";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { useForm } from "react-hook-form";
import Googlelogin from "../Components/Googlelogin/Googlelogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosopenApi = usePublicApi();

    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log(loggedUser);

            await updateUserProfile(data.name, data.photoURL);

            const userInfo = { name: data.name, email: data.email };
            await axiosopenApi.post("/users", userInfo);
            navigate('/');
        } catch (error) {
            console.error("Error during registration:", error);
            // Handle error appropriately, e.g., display error message
        }
    };

    return (
        <section>
            <div className="hero min-h-screen flex justify-center items-center bg-gray-100">
                <div className="card w-full max-w-md p-8 rounded-md shadow-md">
                    <h3 className="text-4xl font-bold text-center">Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input type="text" {...register("name", { required: true })} id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoURL" className="block mb-2">Photo URL</label>
                            <input type="text" {...register("photoURL", { required: true })} id="photoURL" className="w-full px-3 py-2 border rounded-md" placeholder="Enter photo URL" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" {...register("email", { required: true })} id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2">Password</label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} id="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one uppercase, one lowercase, one number, and one special character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-primary text-white w-full py-2 rounded-md hover:bg-[#D1A054] transition-colors duration-300" value="Sign Up" />
                        </div>
                    </form>
                    <p className="mt-4 text-center">Already registered? <Link to={'/login'} className="text-blue-500 font-bold">Go to log in</Link></p>
                    <Googlelogin />
                </div>
            </div>
        </section>
    );
};

export default Register;
