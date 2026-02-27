import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";


const Loginn = () => {
  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .max(9, "Username must be less than 9 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(12, "Password must be less than 12 character"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
   
  });

  return (
   <div className="bg-emerald-400 h-[100vh]">
     <form
      

      onSubmit={formik.handleSubmit}
      className="bg-white rounded-md px-8 text-white py-6 flex flex-col gap-5 h-[70vh] justify-center w-[40vw] mx-auto translate-y-15"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border rounded-md px-3 py-2 outline-0 text-black"
        />
        {formik.touched.username && formik.errors.username && (
          <span className="text-xs text-red-400 font-medium">git
            {formik.errors.username}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border rounded-md px-3 py-2 outline-0 text-black"
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-xs text-red-400 font-medium">
            {formik.errors.password}
          </span>
        )}
      </div>

      <button
        disabled={formik.isSubmitting}
        className="bg-white text-blue-800 rounded-md px-1 py-2 cursor-pointer"
      >
        {formik.isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
   </div>
  );
};

export default Loginn;