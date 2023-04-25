import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-black min-h-screen flex">
      <div className="w-96 h-96 bg-green-600 m-auto ">
        <div>
          username : demo <br /> password :demo
        </div>
        <form
          className="flex flex-col h-full px-20 gap-3 justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            name="username"
            className="rounded-lg focus:outline-none"
            placeholder="username"
            {...register("username")}
          ></input>
          <input
            name="password"
            className="rounded-lg focus:outline-none"
            placeholder="password"
            {...register("password")}
          ></input>
          <button type="submit" className="bg-purple-600">
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
