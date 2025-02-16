import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { Controller } from "react-hook-form";

interface StepProps {
  control: any;
  register: any;
  errors: any;
}

const EmpSignUpStepTwo = ({ control, register, errors }: StepProps) => {
  return (
    <div className="w-full flex flex-col gap-4 py-4">
      <div>
        <label
          htmlFor="company_name"
          className="block text-sm font-medium text-gray-700"
        >
          Company Name
        </label>
        <input
          id="company_name"
          type="text"
          {...register("company_name")}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Company name"
        />
        {errors.company_name && (
          <p className="text-red-600 text-sm">{errors.company_name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="company_overview"
          className="block text-sm font-medium text-gray-700"
        >
          About Company
        </label>
        <textarea
          id="company_overview"
          {...register("company_overview")}
          rows={4}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="A short description of your company"
        ></textarea>
        {errors.company_overview && (
          <p className="text-red-600 text-sm">{errors.company_overview.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="company_address"
          className="block text-sm font-medium text-gray-700"
        >
          Company Address
        </label>
        <input
          id="company_address"
          type="text"
          {...register("company_address")}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Company Address"
        />
        {errors.company_address && (
          <p className="text-red-600 text-sm">{errors.company_address.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="company_contact_number"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company Contact Number
        </label>
        <Controller
          name="company_contact_number"
          control={control}
          render={({ field }) => <PhoneInput
            {...field}
            country={"sl"}
            enableSearch={true}
            regions={'africa'}
            inputClass="!w-full !bg-gray-100"
          />} />
        {errors.company_contact_number && (
          <p className="text-red-600 text-sm">{errors.company_contact_number.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="company_email"
            className="block text-sm font-medium text-gray-700"
          >
            Company Email Address
          </label>
          <input
            id="company_email"
            type="email"
            {...register("company_email")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
          />
          {errors.company_email && (
            <p className="text-red-600 text-sm">{errors.company_email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="company_website"
            className="block text-sm font-medium text-gray-700"
          >
            Company Website
          </label>
          <input
            id="company_website"
            type="text"
            {...register("company_website")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g. www.google.com"
          />
          {errors.company_website && (
            <p className="text-red-600 text-sm">{errors.company_website.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpSignUpStepTwo;
