import { motion } from "framer-motion";

type ProyectosProps = {
  title: string;
  info: string;
  img: string;
  hastag: any;
};

export const misProyectos: ProyectosProps[] = [
  {
    title: "1. Sistema Web Colegio Crayons",
    info: "Sistema web integral diseñado para directores, docentes y alumnos, que permite gestionar de manera eficiente el control de pagos de cuotas, el registro de asistencias, la matrícula de estudiantes y la administración de información académica.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397631/crayons-home_dzxnhf.png",
    hastag: ["#REACT", "#MYSQL", "#NODE JS", "#FLUTTER"],
  },
  {
    title: "2. Aprende Asháninka",
    info: "Plataforma interactiva para aprender el idioma Asháninka mediante imágenes y audios. Incluye aves, animales y saludos, permitiendo una experiencia de aprendizaje visual y auditiva.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397628/idioma-ashaninka_hwgle5.png",
    hastag: ["#REACT", "#NEXT JS", "#TAILWIND"],
  },
  {
    title: "3. Todo App - Challenge",
    info: "Aplicación sencilla y eficiente para organizar tareas diarias. Permite agregar, eliminar y gestionar tareas con una interfaz amigable.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397625/todo-app_vo5afx.png",
    hastag: ["#HTML", "#CSS", "#JAVASCRIPT"],
  }
];

export default function Proyectos({
  title,
  info,
  img,
  hastag,
}: ProyectosProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col md:flex-row gap-6 md:gap-10"
    >
      {/* Información del Proyecto */}
      <div className="w-full md:w-[40%] order-1 md:order-1">
        <h2 className="text-[#f0f5f9] text-2xl md:text-[48px] font-satoshi leading-tight md:leading-[45px] font-extrabold mb-3 md:mb-4">
          {title}
        </h2>
        <p className="text-[#f0f5f9] text-sm md:text-[18px] font-satoshi mb-4 md:mb-3 leading-relaxed">
          {info}
        </p>
        <div className="flex gap-2 md:gap-3 flex-wrap">
          {hastag.map((tag: any, index: number) => (
            <span
              className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 rounded text-xs md:text-sm text-gray-600 font-medium"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Imagen del Proyecto */}
      <div className="w-full md:w-[60%] h-[250px] md:h-[415px] bg-[#e1e4e6] p-3 md:p-5 flex justify-center items-center rounded-2xl md:rounded-3xl order-2 md:order-2">
        <img
          className="w-full h-full object-cover rounded-xl md:rounded-3xl"
          src={img}
          alt={title}
        />
      </div>
    </motion.div>
  );
}