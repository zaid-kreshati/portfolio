import { useState } from "react";
import { ContactFormData } from "../data";
import MainButton from "./ui/MainButton";

const MAX_MESSAGE = 1200;

const inputClass =
  "peer h-14 w-full rounded-2xl border px-4 pt-5 pb-1 text-base shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 border-slate-300/70 dark:border-white/20 bg-white/60 dark:bg-white/[0.06]";

const labelClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 dark:text-slate-300 transition-all peer-focus:top-3.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-xs";

const FloatingInput = ({ id, label, type = "text", autoComplete, value, onChange }) => (
  <div className="relative">
    <input
      id={id}
      name={id}
      type={type}
      required
      placeholder=" "
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      className={inputClass}
    />
    <label htmlFor={id} className={labelClass}>
      {label} *
    </label>
  </div>
);

/**
 * The site is static (GitHub Pages), so there is no backend to receive the form.
 * On submit we validate, then open the visitor's email client with the message
 * pre-filled and addressed to the portfolio owner.
 */
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${ContactFormData.recipient}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <form className="relative space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <FloatingInput id="name" label="Name" autoComplete="name" value={form.name} onChange={handleChange} />
        <FloatingInput id="email" label="Email" type="email" autoComplete="email" value={form.email} onChange={handleChange} />
      </div>

      <FloatingInput id="subject" label="Subject" value={form.subject} onChange={handleChange} />

      <div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            maxLength={MAX_MESSAGE}
            placeholder=" "
            value={form.message}
            onChange={handleChange}
            aria-describedby="message-hint"
            className={`${inputClass} h-auto pt-7 pb-2 resize-none`}
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-4 top-4 text-sm text-slate-600 dark:text-slate-300 transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
          >
            Message *
          </label>
        </div>
        <div id="message-hint" className="flex justify-between text-xs mt-2 text-slate-500 dark:text-slate-400">
          <span>Share a brief about your project</span>
          <span>
            {form.message.length}/{MAX_MESSAGE}
          </span>
        </div>
      </div>

      <MainButton type="submit" variant="primary" size="lg" fullWidth>
        {ContactFormData.buttonText}
      </MainButton>

      <p role="status" className="min-h-5 text-sm text-emerald-600 dark:text-emerald-400">
        {status}
      </p>
    </form>
  );
};

export default ContactForm;
