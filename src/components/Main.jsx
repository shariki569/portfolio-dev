import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { personal } from '../data/resume';
import { downloadResume } from '../utils/generateResumePdf';
import heroBg from '../assets/Main-bg.webp';

const Main = () => {
  return (
    <section id="main" className="relative min-h-screen overflow-hidden bg-hero-mesh">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-mist-50/90 via-mist-50/75 to-ink-900/25" />
        <div className="absolute -left-24 top-24 h-72 w-72 animate-float rounded-full bg-accent-soft/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 animate-float rounded-full bg-ink-700/15 blur-3xl [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:pl-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent"
        >
          Portfolio · Front-End Craft
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="section-title max-w-4xl text-5xl font-extrabold leading-[1.05] text-ink-900 sm:text-6xl lg:text-7xl"
        >
          {personal.displayName}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="mt-5 flex flex-wrap items-center gap-x-2 text-xl text-ink-700 sm:text-2xl"
        >
          <span>I design & ship as a</span>
          <TypeAnimation
            sequence={[
              'Front-End Developer',
              2200,
              'WordPress Specialist',
              2200,
              'UI Implementer',
              2200,
              'Creative Coder',
              2200,
            ]}
            wrapper="span"
            speed={48}
            className="font-display font-semibold text-accent"
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/85 sm:text-lg"
        >
          Building responsive, polished web experiences with WordPress and modern JavaScript —
          clean interfaces, careful detail, and production-ready delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <button type="button" onClick={downloadResume} className="btn-primary">
            <HiDownload size={18} />
            Download Resume
          </button>
          <a href="#work" className="btn-ghost">
            View Experience
            <HiArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex items-center gap-4 text-ink-800"
        >
          <a href="https://twitter.com/CATS2922" aria-label="Twitter" className="transition hover:text-accent">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.facebook.com/clint.sepalon/" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-accent">
            <FaFacebookF size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://www.instagram.com/clintsepalon/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-accent">
            <FaInstagram size={18} />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
            <FaGithub size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
