import Reveal from './Reveal';
import { skills } from '../data/resume';

const Skills = () => (
  <section id="skills" className="relative overflow-hidden bg-ink-900 py-20 text-white">
    <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
    <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent-soft/20 blur-3xl" />

    <div className="relative mx-auto max-w-5xl px-6 md:pl-24 md:pr-10">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">Capabilities</p>
        <h2 className="section-title text-4xl font-bold">Skills</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          A practical toolkit for shipping responsive interfaces and maintaining production websites.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items], idx) => (
          <Reveal key={group} delay={idx * 0.08}>
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">
                {group.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-sm transition hover:border-accent-soft/50 hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
