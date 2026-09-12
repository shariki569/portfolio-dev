import Reveal from './Reveal';
import { experience } from '../data/resume';

const WorkItems = ({ year, title, company, duration, details }) => (
  <ol className="relative flex flex-col border-l border-mist-200 md:flex-row">
    <li className="mb-10 ml-6">
      <div className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent shadow-[0_0_0_4px_rgba(15,118,110,0.15)]" />
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-block rounded-md bg-ink-900 px-2.5 py-1 text-xs font-semibold text-white">
          {year}
        </span>
        <span className="font-display text-lg font-semibold text-ink-900">{title}</span>
        <span className="text-stone-400">{duration}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{company}</p>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-500">{details}</p>
    </li>
  </ol>
);

const Work = () => (
  <section id="work" className="relative mx-auto max-w-5xl px-6 py-20 md:pl-24 md:pr-10">
    <Reveal>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Experience</p>
      <h2 className="section-title text-center text-4xl font-bold text-ink-900 md:text-left">Work</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-ink-700/80 md:mx-0 md:text-left">
        Roles where I shipped interfaces, maintained WordPress products, and collaborated on client delivery.
      </p>
    </Reveal>

    <div className="relative mt-12">
      <div className="timeline-line absolute bottom-0 left-0 top-0 w-px" />
      {experience.map((item, idx) => (
        <Reveal key={`${item.title}-${item.year}`} delay={idx * 0.08}>
          <WorkItems
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        </Reveal>
      ))}
    </div>
  </section>
);

export default Work;
