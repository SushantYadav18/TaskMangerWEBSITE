import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const user = null;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="w-full h-full lg:w-2/3 lg:h-2/3 flex items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-2xl p-4 md:p-8 bg-white rounded-lg shadow-md">
            <span className="flex gap-1">Manage all your tasks</span>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Login;
