import Image from "next/image";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  id: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "SOLIDWORKS Sheet Metal Professional (CSWPA-SM)",
    issuer: "Dassault Systèmes",
    date: "Jul 2025",
    id: "C-RWAU5VB89J",
    image: "CSWA_SM.jpg",
  },
  {
    title: "SOLIDWORKS Weldments Professional (CSWPA-WD)",
    issuer: "Dassault Systèmes",
    date: "Jul 2025",
    id: "C-3MQENZ5A9Y",
    image: "CSWA_WD.jpg",
  },
  {
    title: "SOLIDWORKS Drawing Tools Professional (CSWPA-DT)",
    issuer: "Dassault Systèmes",
    date: "Jun 2025",
    id: "C-ZBSNH4CVXP",
    image: "CSWA_DT.jpg",
  },
  {
    title: "SOLIDWORKS CAD Design Professional (CSWP)",
    issuer: "Dassault Systèmes",
    date: "Jun 2025",
    id: "C-SU5AEKTVL7",
    image: "CSWP.jpg",
  },
  {
    title: "SOLIDWORKS CAD Design Associate (CSWA)",
    issuer: "Dassault Systèmes",
    date: "May 2025",
    id: "C-DRA4N3Q8ZH",
    image: "CSWA.jpg",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 flex flex-col gap-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
        Certifications
      </h2>

      <ul className="space-y-8">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <div className="flex-shrink-0">
              <Image
                src={`/certifications/${cert.image}`}
                alt={`${cert.title} badge`}
                width={80}
                height={80}
                className="rounded-md bg-white/5 p-2"
              />
            </div>

            <div className="text-slate-400">
              <div className="text-slate-200 font-medium">
                {cert.title}
              </div>
              <div className="text-xs">
                {cert.issuer} · {cert.date}
              </div>
              <div className="text-xs text-slate-500">
                Credential ID: {cert.id}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
