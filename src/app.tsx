import { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import Tech from "./components/tecnologias";
import Proyectos, { misProyectos } from "./components/proyectos";
import About from "./components/about";
import icons from "./components/icons";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="min-h-screen relative bg-[#f0ece3]">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 h-20 w-full text-[#1e2022] mb-[64px] md:mb-16 bg-[#f0ece3]/80 backdrop-blur-md"

      >

        {/* Contenedor del nav centrado */}
        <div className="relative z-10 h-full flex items-center justify-center max-w-[1280px] mx-auto px-6 md:px-0">
          <nav className="w-full md:w-[1280px] flex justify-between items-center">
            <h5 className="text-xl md:text-2xl font-satoshi">Wilmer</h5>

            {/* Desktop Menu */}
            <ul className="hidden md:block">
              <li className="flex gap-6">
                <a className="text-[18px] font-satoshi hover:text-[#596e79] transition-colors" href="#inicio">
                  INICIO
                </a>
                <a className="text-[18px] font-satoshi hover:text-[#596e79] transition-colors" href="#proyectos">
                  PROYECTOS
                </a>
                <a className="text-[18px] font-satoshi hover:text-[#596e79] transition-colors" href="#sobre-mi">
                  SOBRE MÍ
                </a>
                <a className="text-[18px] font-satoshi hover:text-[#596e79] transition-colors" href="#contacto">
                  CONTACTOS
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#1e2022] transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#1e2022] transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#1e2022] transition-all"
              />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#f0ece3]/95 z-40 md:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="h-full flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col gap-8 text-center">
                <li>
                  <a
                    className="text-3xl font-satoshi hover:text-[#596e79] transition-colors"
                    href="#inicio"
                    onClick={() => setMenuOpen(false)}
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <a
                    className="text-3xl font-satoshi hover:text-[#596e79] transition-colors"
                    href="#proyectos"
                    onClick={() => setMenuOpen(false)}
                  >
                    PROYECTOS
                  </a>
                </li>
                <li>
                  <a
                    className="text-3xl font-satoshi hover:text-[#596e79] transition-colors"
                    href="#sobre-mi"
                    onClick={() => setMenuOpen(false)}
                  >
                    SOBRE MÍ
                  </a>
                </li>
                <li>
                  <a
                    className="text-3xl font-satoshi hover:text-[#596e79] transition-colors"
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                  >
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-[1280px] w-full m-auto font-satoshi">
        {/* Hero Section */}
        <section id="inicio" className="min-h-[500px] md:h-[612px] flex px-6 md:px-24">
          <div className="flex flex-col justify-between w-full gap-8 md:gap-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(30px,2.5vw,30px)] text-[#1e2022] font-satoshi"
            >
              Hola, soy <span className="font-semibold border-b-4">Wilmer</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-satoshi text-[clamp(80px,10vw,140px)] leading-[clamp(80px,10vw,140px)] font-bold text-[#1e2022]"
            >
              Software <br /> Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-[400px] text-[clamp(20px,1.5vw,20px)] leading-6 md:leading-7 text-[#52616b]"
            >
              <span className="text-black font-bold">
                Full Stack Developer{" "}
              </span>
              con enfoque en el diseño y desarrollo integral de{" "}
              <span className="text-black font-bold">
                aplicaciones web y móviles
              </span>
              , garantizando{" "}
              <span className="text-black font-bold">
                rendimiento, estabilidad y un excelente experiencia de usuario
              </span>
              .
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 md:gap-2"
            >
              <a href="https://github.com/WilmerEspinal"> <i className="fa-brands fa-github text-2xl md:text-3xl text-[#1e2022] hover:text-[#596e79] transition-colors duration-300 cursor-pointer"></i></a>
              <a href="https://www.linkedin.com/in/wilmerev/"> <i className="fa-brands fa-linkedin text-2xl md:text-3xl text-[#1e2022] hover:text-[#596e79] transition-colors duration-300 cursor-pointer"></i></a>
              <a href="mailto:wespinalvi@gmail.com">
                <i className="fa-solid fa-envelope text-2xl md:text-3xl text-[#1e2022] hover:text-[#596e79] transition-colors duration-300 cursor-pointer"></i>
              </a>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#596e79] text-base md:text-[18px] font-satoshi text-[#e1e4e6] w-full md:w-[190px] h-[50px] md:h-[60px] rounded cursor-pointer hover:bg-[#4a5a63] transition-colors duration-300"
            >
              Descargar CV
            </motion.button>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex overflow-hidden py-12 md:py-20 flex-col px-6 md:px-24"
        >
          <Marquee className="flex items-center gap-4 text-xl md:text-2xl pb-12 md:pb-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-[#596e79]">
                TECNOLOGÍA
                <i className="fa-solid fa-asterisk text-[#596e79]"></i>
                <svg
                  width="50"
                  height="20"
                  viewBox="0 0 50 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10 L42 10 M35 4 L42 10 L35 16"
                    stroke="#596e79"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            ))}
          </Marquee>
          <div className="space-y-6 md:space-y-2">
            {/* DESARROLLO WEB */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-base md:text-lg text-[#1e2022]"
            >
              Desarrollo Web
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
            >
              <Tech Icon={icons.HTML5} name="HTML5" />
              <Tech Icon={icons.CSS} name="CSS" />
              <Tech Icon={icons.JavaScript} name="JavaScript" />
              <Tech Icon={icons.TypeScript} name="TypeScript" />
              <Tech Icon={icons.React} name="React" />
              <Tech Icon={icons.TailwindCSS} name="Tailwind CSS" />
              <Tech Icon={icons.Laravel} name="Laravel" />
              <Tech Icon={icons.Php} name="PHP" />
              <Tech Icon={icons.Nodejs} name="Node.js" />
              <Tech Icon={icons.Expressjs} name="Express.js" />
              <Tech Icon={icons.Python} name="Python" />
              <Tech Icon={icons.MySQL} name="MySQL" />
            </motion.div>

            {/* DESARROLLO MÓVIL */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-base md:text-lg text-[#1e2022] pt-4"
            >
              Desarrollo Móvil
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
            >
              <Tech Icon={icons.Flutter} name="Flutter" />
              <Tech Icon={icons.Dart} name="Dart" />
            </motion.div>

            {/* SISTEMAS Y HERRAMIENTAS */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-base md:text-lg text-[#1e2022] pt-4"
            >
              Sistemas y Herramientas
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
              <Tech Icon={icons.Linux} name="Linux" />
              <Tech Icon={icons.Windows} name="Windows" />
              <Tech Icon={icons.Git} name="Git" />
              <Tech Icon={icons.GitHub} name="GitHub" />
              <Tech Icon={icons.Postman} name="Postman" />
              <Tech Icon={icons.VisualStudioCode} name="VS Code" />
              <Tech Icon={icons.Figma} name="Figma" />
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="proyectos" className="bg-black/80 rounded-3xl px-6 md:px-16 py-16 md:py-24 flex flex-col gap-12 md:gap-[100px] mx-4 md:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#f0f5f9] text-[clamp(36px,5vw,72px)] font-satoshi font-extrabold"
          >
            Proyectos
          </motion.h2>
          {misProyectos.map((p, i) => (
            <Proyectos
              key={i}
              title={p.title}
              info={p.info}
              img={p.img}
              hastag={p.hastag}
            />
          ))}
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="px-6 md:px-24 mt-16 md:mt-24 pb-16 md:pb-28">
          <div className="flex flex-col md:flex-row mb-16 md:mb-24 gap-8">
            <div className="w-full md:w-[40%]">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[clamp(36px,4.5vw,60px)] font-bold text-[#1e2022]"
              >
                Sobre mi
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-[60%] space-y-4"
            >
              <p className="text-base md:text-[18px] text-[#1e2022]">
                ¡Hola! Soy Wilmer Espinal, Software Developer y estudiante de
                Desarrollo de Sistemas de Información. Me apasiona crear
                aplicaciones web y móviles que combinen diseño, funcionalidad y
                una experiencia de usuario fluida, trabajando siempre con un
                enfoque práctico y moderno.
              </p>
              <p className="text-[#1e2022] text-base md:text-[18px]">
                Actualmente desarrollo sistemas reales utilizando tecnologías
                como React, TypeScript, Laravel, Node.js, Flutter y MySQL,
                construyendo desde plataformas académicas hasta proyectos con
                inteligencia artificial y automatización, mientras continúo
                creciendo hacia un perfil Full Stack.
              </p>
            </motion.div>
          </div>
          <About />
        </section>

        {/* Footer */}
        <footer id="contacto" className="px-6 md:px-0">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
            <div className="flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[clamp(30px,3.5vw,48px)] italic text-[#1e2022]"
              >
                TRABAJEMOS JUNTOS
              </motion.h2>
              <motion.a href="mailto:wespinalvi@gmail.com"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center bg-[#596e79] text-base md:text-[18px] font-satoshi text-[#e1e4e6] w-full md:w-[190px] h-[50px] md:h-[60px] rounded cursor-pointer hover:bg-[#4a5a63] transition-colors duration-300"
              >
                Contáctame
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-xl md:text-[24px] italic">REDES SOCIALES</h2>
              <a
                className="text-base md:text-[18px] relative group transition-colors hover:text-[#596e79]"
                href="https://github.com/WilmerEspinal"
              >
                GITHUB
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#596e79] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                className="text-base md:text-[18px] relative group transition-colors hover:text-[#596e79]"
                href="https://www.linkedin.com/in/wilmerev/"
              >
                LINKEDIN
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#596e79] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.div>
          </div>
        </footer>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center text-[clamp(40px,13.5vw,180px)] leading-none font-extrabold text-[#1e2022] mt-16 md:mt-24 whitespace-nowrap"
        >
          Wilmer Espinal
        </motion.h2>
      </main>
    </section>
  );
}