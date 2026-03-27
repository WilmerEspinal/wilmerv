import { motion } from "framer-motion";

type ProyectosProps = {
  title: string;
  info: string;
  hastag: string[];
  link?: string;
  isDeveloping?: boolean;
  index?: number;
};

export default function Proyectos({
  title,
  info,
  hastag,
  link,
  isDeveloping,
  index = 0,
}: ProyectosProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-start gap-6 md:gap-8 py-7 border-b border-white/10 last:border-b-0 hover:bg-white/[0.04] transition-colors duration-300 px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl"
    >
      {/* Número */}
      <span className="shrink-0 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] pt-1 w-6 text-right">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Contenido */}
      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-white font-bold text-base md:text-[17px] leading-snug tracking-tight">
            {title}
          </h2>
          <div className="flex items-center gap-2 shrink-0 pt-0.5">
            {isDeveloping && (
              <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-amber-300 border border-amber-300/25 px-2.5 py-1 rounded-full bg-amber-300/10">
                <span className="w-1 h-1 rounded-full bg-amber-300 animate-pulse" />
                En desarrollo
              </span>
            )}
            {link && !isDeveloping && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 border border-white/20 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all duration-300"
                aria-label={`Abrir ${title}`}
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-white/70 text-[13px] leading-relaxed max-w-2xl">
          {info}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {hastag.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/60 bg-white/10 border border-white/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}