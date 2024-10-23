import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div>
      <div>
        <div className="py-20 items-center justify-center h-screen ">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div
              className="hidden lg:block lg:w-1/2 bg-cover"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1135743981/photo/mexican-food-concept-cinco-de-mayo-food.jpg?s=612x612&w=0&k=20&c=KI4PyZwBpnyvUuxnjcZ94GQXIVIz72klRUUTwszATYI=')",
              }}
            ></div>
            <div className="w-full p-8 lg:w-1/2">
              <h2 className="text-xl font-semibold text-gray-700 text-center ">
                {" "}
                <Link
                  to="/"
                  className=" font-extrabold text-bermuda  gap-2 text-black "
                >
                  Pizzan
                </Link>
              </h2>
              <p className="text-xl text-gray-600 text-center">Welcome back!</p>
              <a
                href="#"
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              ></a>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">
                  or login with email
                </a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div>
                <form onSubmit={handleLogin}>
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      User Email Address
                    </label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                  
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mt-8">
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to="/signup" className="text-xs text-gray-500 uppercase">
                  or sign up
                </Link>

                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
