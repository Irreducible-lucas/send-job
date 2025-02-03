import React, { useState, FormEvent } from "react";

interface StepProps {
  register: any;
  errors: any;
}

const SignUpStepOne = ({ register, errors }: StepProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            {...register("firstname")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="First name"
          />
          {errors.firstname && (
            <p className="text-red-600 text-sm">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            {...register("lastname")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Last name"
          />
          {errors.lastname && (
            <p className="text-red-600 text-sm">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="******"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-gray-700"
        >
          Telephone
        </label>
        <input
          type="tel"
          id="telephone"
          {...register("telephone")}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="+2349011122233"
        />
        {errors.telephone && (
          <p className="text-red-600 text-sm">{errors.telephone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="birth_date"
            className="block text-sm font-medium text-gray-700"
          >
            Birth Date
          </label>
          <input
            type="date"
            id="birth_date"
            {...register("birth_date")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.birth_date && (
            <p className="text-red-600 text-sm">{errors.birth_date.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            {...register("gender")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpStepOne;
