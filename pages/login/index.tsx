import React, { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 justify-center items-center mt-[5%]">
          <div className="col-span-1">
            <div className="flex justify-center items-center">
              <img
                src="https://www.wati.io/wp-content/uploads/2023/09/QRr.webp"
                className="w-[600px]"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
              <div className="col-span-1 "></div>
              <div className="col-span-2 ">
                <h2 className="text-4xl my-4 font-medium text-center">
                  Log In
                </h2>
                <form>
                  <div className="my-3">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-12 border rounded px-4 py-2"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="password" className="block mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full h-12 border rounded px-4 py-2"
                      />
                      <button
                        type="button"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div className="text-right my-3">Forgot your password?</div>
                  <button
                    type="submit"
                    className="w-full my-3 h-12 bg-blue-500 text-white py-2 rounded"
                  >
                    Log In
                  </button>
                </form>
              </div>
              <div className="col-span-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
