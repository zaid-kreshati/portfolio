import React, { useContext, useState } from "react";
import { ContactFormContext } from "../App";

const ContactForm = () => {
  const ContactFormData = useContext(ContactFormContext);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        
        {ContactFormData.fields.map((field) => (
          <div
            className={`flex flex-col gap-2 ${
              field.size === "medium" ? "w-1/3" : "w-full"
            }`}
            key={field.name}
          >
            
            {/* <label className="text-sm font-medium text-gray-700">
              {field.placeholder}
            </label> */}

            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                rows="5"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition"
        >
          {ContactFormData.buttonText}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;