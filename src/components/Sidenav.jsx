import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineClose,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { HiDownload } from 'react-icons/hi';
import { downloadResume } from '../utils/generateResumePdf';

const links = [
  { href: '#main', label: 'Home', Icon: AiOutlineHome },
  { href: '#work', label: 'Work', Icon: GrProjects },
  { href: '#projects', label: 'Projects', Icon: AiOutlineProject },
  { href: '#resume', label: 'Resume', Icon: BsPerson },
  { href: '#contact', label: 'Contact', Icon: AiOutlineMail },
];

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setNav((v) => !v)}
        className="nav-orb fixed right-4 top-4 z-[99] rounded-full p-3 text-ink-900 shadow-lift md:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {nav && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-mist-50/95 backdrop-blur-md">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              onClick={() => setNav(false)}
              href={href}
              className="nav-orb m-2 flex w-[78%] items-center justify-center rounded-full p-4 shadow-lift transition duration-200 hover:scale-[1.03]"
            >
              <Icon size={20} />
              <span className="cursor-pointer pl-4 font-medium">{label}</span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setNav(false);
              downloadResume();
            }}
            className="btn-primary mt-4 w-[78%]"
          >
            <HiDownload size={18} />
            Download Resume
          </button>
        </div>
      )}

      <nav className="fixed top-[22%] z-10 hidden md:block">
        <div className="ml-3 flex flex-col gap-1">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              title={label}
              className="nav-orb group relative m-1.5 rounded-full p-3.5 shadow-lift transition duration-300 hover:scale-110"
            >
              <Icon size={18} />
              <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink-900 px-3 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                {label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidenav;
