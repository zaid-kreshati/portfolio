import React from "react";
import ContactForm from "./ContactForm";
const Contact = ({ data }) => {
  return (
    <section className="py-16  ">
      {/* Title */}
      <div className=" mx-20 text-center">
        <div className="text-left">
          {/* Title */}
          <h2 className="text-3xl font-bold">{data.title}</h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12">{data.description}</p>
        </div>

        {/* Contact Card */}
        <div className="flex flex-row gap-60 w-full   bg-white rounded-2xl shadow-md p-8 space-y-6">
          {/* Contacts Column */}
          <div className="flex flex-col gap-15  text-gray-700 text-left">
           {data.contacts.map((contact) => (
            <div className="flex  border border-gray-300 shadow items-left gap-3 items-center " key={contact.id}>
              <div className="bg-sky-500 text-white w-10 h-10 flex justify-center items-center rounded-xl">
                {contact.icon}
              </div>
              <span>{contact.value}</span>
            </div>
           ))}
          </div>

          {/*form*/}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
