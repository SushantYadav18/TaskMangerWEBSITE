import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

const Login = () => {
  const {user} = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

 const submitHandler = async (data) => {
    console.log("submit", data);
  };

  console.log("user", user);
  const submitErrorHandler = (errors) => {
    console.log("submit failed", errors);
  };

  useEffect(() => {
    user &&
      navigate("/dashboard");
    
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-block mb-6 py-1.5 px-4 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Manage all your task in one place
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-blue-700">
            Cloud-based
            <br />
            Task Manager
          </h1>

          {/* gradient orb */}
          <div className="mt-10 w-20 h-20 rounded-full ml-45 bg-linear-to-br from-indigo-500 via-purple-500 to-blue-600 shadow-lg shadow-purple-300/50" />
        </div>

        {/* right side */}
        <div className="w-full m-auto lg:w-100 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Welcome back!</h2>
            <p className="text-sm text-gray-500 mt-1">
              Keep all your credentials safe!
            </p>
          </div>

          <form onSubmit={handleSubmit(submitHandler, submitErrorHandler)} className="space-y-5">
            <Textbox
              label="Email Address"
              id="email"
              type="email"
              placeholder="you@example.com"
              field={register("email", { required: "Email Address is required" })}
              error={errors.email?.message}
            />

            <Textbox
              label="Password"
              id="password"
              type="password"
              placeholder="password"
              field={register("password", {
                required: "Password is required",
              })}
              error={errors.password?.message}
            />

            <div className="text-right -mt-2">
              <Button type="button" variant="ghost" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
                Forgot Password?
              </Button>
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;