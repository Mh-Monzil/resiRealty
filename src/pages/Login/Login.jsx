import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff, IoMail } from "react-icons/io5";
import { FaGithub, FaLock, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { loginUser, user, loading, googleLogin, githubLogin, twitterLogin } =
    UseAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          setErrorText("");
          navigate(location?.state || "/");
          toast.success("Login successful");
        }
        reset();
      })
      .catch(() => {
        setErrorText("Login failed! Please try again");
      });
    console.log(user);
  };

  const handleSocialLogin = (socialLogin) => {
    socialLogin().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
        toast.success("Login successful");
      }
    });
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        {loading && <span className="loading loading-spinner text-info"></span>}
      </div>
      <Navbar />
      <div className="p-4">
        <form
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          onSubmit={handleSubmit(onSubmit)}
          className=" lg:w-3/5 my-12 h-full mx-auto p-6 md:p-10 bg-white backdrop-blur-sm rounded-lg  shadow-md border-t border-sky-300 shadow-sky-200"
        >
          <div className="flex justify-center mb-2">
            <span className="text-center text-3xl font-bold border-b-[3px] border-b-sky-500 px-4">
              Login
            </span>
          </div>
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Email</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input border-2 border-sky-100 focus:border-sky-500 focus:outline-none font-semibold w-full px-10"
                  {...register("email", { required: true })}
                />
                <IoMail className="absolute bottom-4 left-4" />
              </div>
            </div>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input border-2 border-sky-100 focus:border-sky-500 focus:outline-none font-semibold w-full px-10"
                {...register("password", { required: true })}
              />
              <FaLock className="absolute bottom-4 left-4 disabled" />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl absolute right-4 bottom-3.5 cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="flex items-center justify-between mt-3 font-medium">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-sky-500 text-white font-bold text-xl hover:bg-sky-600 border border-sky-500 hover:border-sky-500">
              Login
            </button>
          </div>
          <p className="text-red-600 p-1">{errorText}</p>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2 m-2 font-semibold">
            <p>Don't have any account ?</p>
            <Link
              to="/register"
              className=" border-purple-700 text-sky-600 font-bold"
            >
              Create Account
            </Link>
          </div>
          <div className="divider font-bold">Or</div>
          <div className="flex justify-between lg:flex-wrap gap-2 md:gap-4 text-xl font-bold">
            <div
              onClick={() => handleSocialLogin(googleLogin)}
              className="flex items-center gap-2 bg-white py-2 px-4 border border-sky-500 rounded-md mx-auto cursor-pointer"
            >
              <FcGoogle className="text-2xl" />
              <span className="hidden md:block">Google</span>
            </div>
            <div
              onClick={() => handleSocialLogin(githubLogin)}
              className="flex items-center gap-2 bg-white py-2 px-4 border border-sky-500 rounded-md mx-auto cursor-pointer"
            >
              <FaGithub className="text-2xl" />
              <span className="hidden md:block">GitHub</span>
            </div>
            <div
              onClick={() => handleSocialLogin(twitterLogin)}
              className="flex items-center  gap-2 bg-white py-2 px-4 border border-sky-500 rounded-md mx-auto cursor-pointer"
            >
              <FaTwitter className="text-2xl text-sky-400" />
              <span className="hidden md:block">Twitter</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
