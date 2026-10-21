import { useEffect, useState } from "react";
import { Award, CalendarDays, Clock3, ExternalLink, X } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const CertificatePreview = ({ certificate, className = "" }) =>
  certificate.imageType === "pdf" ? (
    <iframe
      src={`${certificate.image}#view=FitH&toolbar=0&navpanes=0`}
      title={certificate.alt}
      className={`pointer-events-none h-full w-full border-0 ${className}`}
    />
  ) : (
    <img
      src={certificate.image}
      alt={certificate.alt}
      className={`h-full w-full object-contain ${className}`}
    />
  );

const Certifications = ({ data }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCertificate]);

  return (
    <section id="certifications" className="px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle data={data.titleComponent} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {data.certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group overflow-hidden rounded-2xl border border-white/30 bg-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="relative block h-52 w-full cursor-zoom-in overflow-hidden bg-slate-100 p-3 text-left dark:bg-slate-950 sm:h-60"
                aria-label={`Preview ${certificate.title}`}
              >
                <CertificatePreview
                  certificate={certificate}
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Click to enlarge
                </span>
              </button>

              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 rounded-xl bg-blue-500/10 p-2 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400">
                    <Award size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {certificate.issuer}
                    </p>
                    {certificate.authorizedBy && (
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                        {certificate.authorizedBy}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CalendarDays size={16} className="shrink-0 text-purple-500" aria-hidden="true" />
                  <span>{certificate.period}</span>
                </div>

                {certificate.details && (
                  <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${certificate.title} details`}>
                    {certificate.details.map((detail) => (
                      <li
                        key={detail}
                        className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300"
                      >
                        <Clock3 size={13} aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-300"
                >
                  View Certificate <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} preview`}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl border border-white/30 bg-white/95 p-3 shadow-2xl dark:border-gray-700 dark:bg-slate-900/95 sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-slate-900/75 p-2 text-white transition-colors hover:bg-slate-900"
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>
            <div className="h-[72vh] min-h-80 w-full">
              <CertificatePreview certificate={selectedCertificate} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
