import React from "react";
import ContactForm from "../ContactForm";
import MainButton from "../ui/MainButton";
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
        <div className="flex flex-row gap-60 w-full    rounded-2xl  p-8 space-y-6">
          {/* Contacts Column */}
          <div className="flex flex-col gap-15  text-gray-700 text-left">
            {data.contacts.map((contact) => (
              <div
                className="flex  items-left gap-3 items-center "
                key={contact.id}
              >
                {/* <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600  border-2 border-sky-300 overflow-hidden  cursor-pointer 
                  transition-transform duration-300 hover:scale-125"
                >
                  {contact.icon}
                </div> */}

                <MainButton
                  variant="contact"
                  size="sq"
                  className="bg-sky-600 text-white shadow-lg hover:bg-sky-500 hover:opacity-90 hover:scale-110 transition-all duration-300 backdrop-blur-lg"
                >
                  {contact.icon}
                </MainButton>

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
