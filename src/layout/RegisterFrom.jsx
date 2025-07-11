import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !input.name ||
        !input.lastName ||
        !input.email ||
        !input.password ||
        !input.confirmPassword ||
        !input.phone
      ) {
        Swal.fire({
          icon: "warning",
          title: "Missing Fields",
          text: "Please fill in all fields",
        });
      } else if (input.password !== input.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "Passwords do not match",
        });
      } else {
        const rs = await axios.post(
          "http://localhost:8000/auth/register",
          input
        );
        if (rs.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered!",
          });
        }
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-150">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          สมัครสมาชิก
        </h2>
        <form className="space-y-4" onSubmit={hdlSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text text-gray-700">ชื่อ</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="name"
              value={input.name}
              onChange={hdlChange}
              id="name"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="lastName">
              <span className="label-text text-gray-700">นามสกุล</span>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="lastName"
              value={input.lastName}
              onChange={hdlChange}
              id="lastName"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text text-gray-700">อีเมล</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="email"
              value={input.email}
              onChange={hdlChange}
              id="email"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="phone">
              <span className="label-text text-gray-700">เบอร์โทร</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              maxLength={10}
              name="phone"
              value={input.phone}
              onChange={hdlChange}
              id="phone"
            />
          </div>
          
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text text-gray-700">รหัสผ่าน</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="password"
              value={input.password}
              onChange={hdlChange}
              id="password"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="confirmPassword">
              <span className="label-text text-gray-700">ยืนยันรหัสผ่าน</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={hdlChange}
              id="confirmPassword"
            />
          </div>


          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 ease-in-out w-full mt-6"
            >
              สมัครสมาชิก
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition duration-300 ease-in-out w-full mt-6"
            >
              รีเซ็ต
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




