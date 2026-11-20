import ContactForm from "../ContactForm";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const Contact = ({ data }) => {
  return (
    <section id="contact" className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <SectionTitle data={data.titleComponent} />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full py-4">
          <Reveal direction="right" className="w-full lg:w-3/5 order-2">
            <ContactForm />
          </Reveal>

          <Reveal
            as="ul"
            direction="left"
            className="w-full lg:w-2/5 order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-10 content-start"
          >
            {data.contacts.map((contact) => {
              const Wrapper = contact.href ? "a" : "div";
              return (
                <li key={contact.id}>
                  <Wrapper
                    {...(contact.href && { href: contact.href })}
                    className="group flex items-center gap-4 rounded-2xl p-1 focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    <span className="shrink-0 rounded-2xl bg-sky-600 dark:bg-sky-500 border-2 border-sky-300 dark:border-sky-400 p-3 sm:p-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {contact.icon}
                    </span>
                    <span className="flex flex-col text-left min-w-0">
                      <span className="text-sm text-slate-500 dark:text-slate-400">{contact.name}</span>
                      <span className="text-sm sm:text-base font-medium break-all group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {contact.value}
                      </span>
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
