import { motion } from "framer-motion";

type AboutProps = {
  icon: string;
  title: string;
  year: string;
  description: string;
};

const experiencia: AboutProps[] = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Desarrollo de Sistemas de Información",
    year: "2024 - Actualidad",
    description:
      "Actualmente estudio la carrera de Desarrollo de Sistemas de Información en el Instituto Continental, donde fortalezco mis habilidades en programación, bases de datos, análisis de sistemas y desarrollo de aplicaciones.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Formación autodidacta en Desarrollo de Software",
    year: "2022 - Actualidad",
    description:
      "De manera autodidacta he aprendido tecnologías como React, TypeScript, Laravel, Node.js, Flutter y MySQL, desarrollando proyectos reales como sistemas académicos, aplicaciones móviles y herramientas con inteligencia artificial.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0">
      {/* Título */}
      <div className="w-full md:w-[40%]">
        <h2 className="text-3xl md:text-[60px] font-bold text-[#1e2022] leading-tight">
          Formación y experiencia
        </h2>
      </div>

      {/* Timeline de Experiencia */}
      <div className="w-full md:w-[60%]">
        {experiencia.map((p, i) => (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex gap-3 md:gap-2 pb-6 md:pb-2"
            key={i}
          >
            {/* Icono y Línea de Timeline */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-10 h-10 md:w-auto md:h-auto flex items-center justify-center">
                <i className={`${p.icon} text-gray-700 text-lg md:text-xl`}></i>
              </div>
              {i !== experiencia.length - 1 && (
                <div className="w-px h-full md:h-20 bg-gray-400 mt-2"></div>
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 pb-4 md:pb-0">
              <h5 className="text-lg md:text-[20px] font-bold text-[#1e2022] mb-1">
                {p.title}
              </h5>
              <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {p.year}
              </p>
              <p className="text-sm md:text-base text-[#52616b] leading-relaxed">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}