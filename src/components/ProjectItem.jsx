const ProjectItem = ({ img, title, src, description, stack }) => (
  <article className="project-card group">
    <div className="relative aspect-[16/10] overflow-hidden bg-mist-100">
      <img className="h-full w-full object-cover" src={img} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        {stack && <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-soft">{stack}</p>}
      </div>
    </div>
    <div className="space-y-4 p-5">
      <p className="text-sm leading-relaxed text-stone-500">{description}</p>
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-deep"
      >
        Open project
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>
);

export default ProjectItem;
