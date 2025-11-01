import { resolveAsset } from "../utils/assetResolver";
import { useLanguage } from "../utils/LanguageContext";
import { getTranslation } from "../utils/translations";
import isoLogo from "../assets/certification/ISO 9001.png";
import eosLogo from "../assets/certification/eos_logo.png";
import universityLogo from "../assets/certification/university.png";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Certifications = () => {
  const { language, isArabic } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState({});

  const certifications = [
    {
      id: "iso",
      logo: isoLogo,
      name: getTranslation("iso9001Name", language),
      description: getTranslation("iso9001Desc", language),
    },
    {
      id: "eos",
      logo: eosLogo,
      name: getTranslation("eosName", language),
      description: getTranslation("eosDesc", language),
    },
    {
      id: "university",
      logo: universityLogo,
      name: getTranslation("universityName", language),
      description: getTranslation("universityDesc", language),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getTranslation("certifications", language)}
          </h1>
          <p className="text-gray-600 text-lg">
            {getTranslation("certificationsSubtitle", language)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden relative bg-gray-50 flex items-center justify-center">
                {!imgLoaded[cert.id] && (
                  <Skeleton className="absolute inset-0" width="100%" height="100%" />
                )}
                <img
                  src={resolveAsset(cert.logo)}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain"
                  onLoad={() => setImgLoaded((p) => ({ ...p, [cert.id]: true }))}
                  style={{
                    opacity: imgLoaded[cert.id] ? 1 : 0,
                    transition: "opacity 300ms ease",
                  }}
                  onError={(e) => {
                    e.target.src = "/api/placeholder/300/200";
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {cert.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Certifications; 