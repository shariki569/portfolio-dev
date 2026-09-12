import Reveal from './Reveal';

const Contact = () => (
  <section id="contact" className="mx-auto max-w-5xl px-6 py-20 md:pl-24 md:pr-10">
    <Reveal>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Let&apos;s talk</p>
      <h2 className="section-title text-4xl font-bold text-ink-900">Contact</h2>
      <p className="mt-3 max-w-2xl text-ink-700/80">
        Open to front-end roles, WordPress projects, and collaborative builds. Send a note and I&apos;ll get back soon.
      </p>
    </Reveal>

    <Reveal delay={0.1}>
      <form
        action="https://getform.io/f/fed91ce4-32b2-4cf9-8aa1-574db7140aaa"
        method="POST"
        encType="multipart/form-data"
        className="mt-10 rounded-3xl border border-ink-900/8 bg-white/80 p-6 shadow-lift backdrop-blur-sm sm:p-8"
      >
        <div className="grid gap-4 py-2 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="py-2 text-xs font-semibold uppercase tracking-wider text-ink-700">Name</label>
            <input className="form-field" type="text" name="name" required />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-xs font-semibold uppercase tracking-wider text-ink-700">Phone Number</label>
            <input className="form-field" type="text" name="phone" />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-xs font-semibold uppercase tracking-wider text-ink-700">Email</label>
          <input className="form-field" type="email" name="email" required />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-xs font-semibold uppercase tracking-wider text-ink-700">Subject</label>
          <input className="form-field" type="text" name="subject" required />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-xs font-semibold uppercase tracking-wider text-ink-700">Message</label>
          <textarea className="form-field" rows="8" name="message" required />
        </div>
        <button type="submit" className="btn-primary mt-6 w-full">
          Send Message
        </button>
      </form>
    </Reveal>

    <p className="mt-12 text-center text-xs text-stone-400">
      © {new Date().getFullYear()} Clint Sepalon · Front-End Developer
    </p>
  </section>
);

export default Contact;
