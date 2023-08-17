import React, { useState, useContext } from "react";
import { makeRequest } from "../makeRequest";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Login = () => {
  const { setToken } = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const responseData = await makeRequest.post("/auth/local", {
        identifier: data.identifier,
        password: data.password,
      });
      console.log(responseData);
      setToken(responseData.data);

      navigate("/");
    } catch (error) {
      alert("INCORRECT CREDENTIALS");
      console.error("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-14 ">
      <div className="mx-auto w-[80vw] md:w-[60vw] lg:w-[40vw] h-full border-2 rounded-lg p-4">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-lg text-slate-500">
            Log in to Dressup E-commerce to continue shopping.
          </p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col   space-y-8 p-4">
          <div className="flex flex-col">
            <label>Email:</label>
            <input
              className="border-2 p-2"
              type="email"
              placeholder="Enter your registered email"
              onChange={handleChange}
              name="identifier"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              className="border-2 p-2"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <button
            className="bg-amber-300 hover:bg-amber-400 border-2 p-2 rounded-lg "
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <ClipLoader size={20} /> : "Login"}
          </button>
        </form>
        <h2 className="p-2">
          Don't have an account ?{" "}
          <Link className="underline text-amber-600" to="/register">
            Sign up
          </Link>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Login;
