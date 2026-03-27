import React from "react";
import ContactForm from "../ContactForm";
import MainButton from "../ui/MainButton";
import SectionTitle from "../ui/SectionTitle";
const Contact = ({ data }) => {
  return (
    <section id="contact">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        <div className="text-left">
          <SectionTitle data={data.titleComponent} />
        </div>

        {/* Contact Card - Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 w-full rounded-2xl py-8">
          {/* Form first on mobile (top) and desktop (left) */}
          <div className="w-full lg:w-3/5 order-2">
            <ContactForm />
          </div>

          {/* Contacts Column - Row on mobile, Column on desktop */}
          <div className="w-full lg:w-2/5 order-1 flex flex-row lg:flex-col gap-3 lg:gap-15  lg:justify-start flex-wrap lg:flex-nowrap">
            {data.contacts.map((contact) => (
              <div
                className="flex  items-center   gap-2 sm:gap-4 "
                key={contact.id}
              >
                <MainButton
                  variant="contact"
                  size="sq"
                  className="bg-sky-600 text-white shadow-lg hover:bg-sky-500 hover:opacity-90 hover:scale-110 transition-all duration-300 backdrop-blur-lg"
                >
                  {contact.icon}
                </MainButton>

                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-medium break-all">
                    {contact.name}
                  </span>

                  <span className="text-sm sm:text-base font-medium break-all">
                    {contact.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
