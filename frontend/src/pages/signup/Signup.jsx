import GenderSelect from "./GenderSelect";
import { IoPersonCircleOutline, IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> ChatNow</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPersonCircleOutline className="w-6 h-7 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your full name"
              />
            </label>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPerson className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your username"
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey className="w-5 h-4 text-gray-500" />
              <input
                type="password"
                className="grow"
                placeholder="Enter a password"
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <RiLockPasswordFill className="w-6 h-5 text-gray-500" />
              <input
                type="password"
                className="grow"
                placeholder="Confirm your password"
              />
            </label>
          </div>

          {/* GENDER SELECT GOES HERE */}
          <GenderSelect />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
