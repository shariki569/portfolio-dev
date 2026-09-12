import { HiDownload, HiOutlineDocumentText } from 'react-icons/hi';
import Reveal from './Reveal';
import {
  personal,
  summary,
  skills,
  experience,
  education,
  resumeMeta,
} from '../data/resume';
import { downloadResume } from '../utils/generateResumePdf';

const Resume = () => (
  <section id="resume" className="relative overflow-hidden bg-gradient-to-b from-mist-100 to-mist-50 py-20">
    <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

    <div className="relative mx-auto max-w-5xl px-6 md:pl-24 md:pr-10">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Always current</p>
        <h2 className="section-title text-4xl font-bold text-ink-900">Resume</h2>
        <p className="mt-3 max-w-2xl text-ink-700/80">
          Auto-synced from one source of truth — update the portfolio data once, and both this page and the
          downloadable PDF stay aligned. Formatted for ATS and recruiter scanning.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button type="button" onClick={downloadResume} className="btn-primary">
            <HiDownload size={18} />
            Download PDF Resume
          </button>
          <div className="flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-4 py-2 text-sm text-ink-700">
            <HiOutlineDocumentText className="text-accent" size={18} />
            Last updated {resumeMeta.lastUpdated}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <article className="mt-10 overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-lift">
          <header className="border-b border-mist-200 bg-gradient-to-r from-ink-900 to-ink-800 px-6 py-8 text-white sm:px-10">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {personal.fullName}
            </h3>
            <p className="mt-1 text-accent-soft">{personal.title}</p>
            <p className="mt-3 text-sm text-white/70">
              {personal.location} · {personal.phone} · {personal.email}
            </p>
          </header>

          <div className="space-y-8 px-6 py-8 sm:px-10">
            <section>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Summary
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{summary}</p>
            </section>

            <section>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Skills
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.values(skills)
                  .flat()
                  .map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
              </div>
            </section>

            <section>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Experience
              </h4>
              <div className="mt-4 space-y-6">
                {experience.map((job) => (
                  <div key={`${job.company}-${job.year}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display font-semibold text-ink-900">
                        {job.title} · {job.company}
                      </p>
                      <span className="text-xs text-stone-400">{job.duration}</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-600">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Education
              </h4>
              <p className="mt-3 font-display font-semibold text-ink-900">{education.degree}</p>
              <p className="text-sm text-stone-600">
                {education.school} · {education.duration}
              </p>
              <p className="mt-2 text-sm text-stone-500">Thesis: {education.thesis}</p>
            </section>
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);

export default Resume;
