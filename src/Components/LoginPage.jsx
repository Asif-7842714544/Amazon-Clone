import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const register = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center h-[100vh] bg-white ">
      <Link to="/">
        <img
          className="mt-5 mb-5 object-contain w-[100px] mr-auto ml-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="flex flex-col  w-[300px] rounded-[5px] border-[1px] border-solid p-5  ">
        <h1 className="font-medium text-xl mb-[15px] ">SignIn</h1>
        <form className="">
          <h5 className="mb-[5px]  ">Email</h5>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="h-[30px] mb-2 bg-white w-[98%] rounded-[4px] border-2 border-solid p-3 "
            type="text"
          />

          <h5 className="mb-[5px] ">Password</h5>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="h-[30px] mb-2 bg-white w-[98%] rounded-[4px] border-2 border-solid p-3 "
            type="password"
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-orange-300 rounded w-full h-[30px] border-2 border-solid mt-[10px] hover:bg-orange-600 "
          >
            SignIn
          </button>
        </form>
        <button
          onClick={register}
          className=" rounded w-full h-[30px] border-2 border-solid mt-[10px] hover:bg-gray-100 "
        >
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
