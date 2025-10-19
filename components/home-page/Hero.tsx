
// "use client";

// import { motion } from "framer-motion";
// import { useRef } from "react";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section
//       className="bg-cover bg-center relative h-[650px] lg:h-screen overflow-hidden bg-black"
//       aria-label="Hero Section"
//     >
//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       >
//         <source src="/header-bg.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Fallback background in case video doesn't load */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/10 z-10"></div>

//       <motion.div
//         className="text-white px-4 mt-[180px] sm:mt-0 lg:h-screen items-center   lg:flex lg:flex-col lg:justify-center relative z-20"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-5xl mb-4 mt-20 lg:text-center lg:text-5xl lg:mx-auto header-text">
//           An Exquisite Life <br className="hidden lg:block" />
//           Awaits You in Nature&apos;s Embrace
//         </h1>
//         <p className="text-lg lg:text-xl mb-10 lg:text-center lg:w-1/2 lg:mx-auto">
//           We are recognized for exceeding client expectations and delivering
//           great results through seamless processes, unwavering dedication and
//           unparalleled services to our global clientele.
//         </p>
//         <button className="bg-app-green-1 px-6 py-2  rounded-md">
//           Book a Farm Visit
//         </button>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "../ContactModal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="bg-cover bg-center relative h-[650px] lg:h-screen overflow-hidden bg-black"
      aria-label="Hero Section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/header-bg-poster.jpg"
      >
        <source src="/header-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/10 z-10"></div>

      {/* Hero Content */}
      <motion.div
        className="text-white px-4 mt-[160px] sm:mt-0 lg:h-screen items-center lg:flex lg:flex-col lg:justify-center relative z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl mb-4 mt-20 lg:text-center lg:text-5xl lg:mx-auto header-text">
          An Exquisite Life <br className="hidden lg:block" />
          Awaits You in Nature&apos;s Embrace
        </h1>
        <p className="text-lg lg:text-xl mb-10 lg:text-center lg:w-1/2 lg:mx-auto">
          We are recognized for exceeding client expectations and delivering
          great results through seamless processes, unwavering dedication and
          unparalleled services to our global clientele.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-app-green-1 px-6 py-2 rounded-md"
        >
          Book a Farm Visit
        </button>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
