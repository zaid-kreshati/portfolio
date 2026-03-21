import { useState } from "react";
import { ContactFormData } from "../data";
import MainButton from "./ui/MainButton";

const ContactForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form className="relative space-y-6" noValidate>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden pointer-events-none opacity-0">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(200px at 630px 60px, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        ></div>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {/* Name */}
        <label htmlFor="name" className="group relative block">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder=" "
              autoComplete="name"
              className="peer h-14 w-full rounded-2xl border px-4 pt-5 pb-1 text-base 
              shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-xl
              focus:outline-none focus:ring-2 focus:ring-sky-500
              border-white/20 bg-white/[0.08]"
            />

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
              Name *
            </span>
          </div>
        </label>

        {/* Email */}
        <label htmlFor="email" className="group relative block">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder=" "
              autoComplete="email"
              className="peer h-14 w-full rounded-2xl border px-4 pt-5 pb-1 text-base 
              shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-xl
              focus:outline-none focus:ring-2 focus:ring-sky-500
              border-white/20 bg-white/[0.08]"
            />

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Email *
            </span>
          </div>
        </label>
      </div>

      {/* Subject */}
      <label htmlFor="subject" className="group relative block">
        <div className="relative">
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder=" "
            className="peer h-14 w-full rounded-2xl border px-4 pt-5 pb-1 text-base 
            shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-xl
            focus:outline-none focus:ring-2 focus:ring-sky-500
            border-white/20 bg-white/[0.08]"
          />

          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
            Subject *
          </span>
        </div>
      </label>

      {/* Message */}
      <label htmlFor="message" className="group relative block">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder=" "
            className="peer w-full rounded-2xl border px-4 pt-6 pb-2 text-base 
            shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-xl resize-none
            focus:outline-none focus:ring-2 focus:ring-sky-500
            border-white/20 bg-white/[0.08]"
          ></textarea>

          <span className="pointer-events-none absolute left-4 top-3 text-sm transition-all peer-focus:text-xs peer-valid:text-xs">
            Message *
          </span>
        </div>

        <div className="flex justify-between text-xs mt-2 text-gray-400">
          <span>Share a brief about your project</span>
          <span>0/1200</span>
        </div>
      </label>

      {/* Submit */}
      <div onClick={handleSubmit}>
        <MainButton
        variant="primary"
        size="lg"
        className="w-full"
      >
        {ContactFormData.buttonText}
      </MainButton>
      </div>
    </form>
  );
};

export default ContactForm;
