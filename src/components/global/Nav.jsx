import Link from "next/link"
import { useRouter } from "next/router";
import Image from 'next/image';

import html from '../../../public/icons/html.png';
import css from '../../../public/icons/css.png';
import js from '../../../public/icons/js.png';
import react from '../../../public/icons/react.png';
import ts from '../../../public/icons/ts.png';
import json from '../../../public/icons/json.png';

export default function Nav() {
  const router = useRouter();

  const links = [
    { path: '/', label: 'index.html', img: html },
    { path: '/about', label: 'about.css', img: css },
    { path: '/work', label: 'work.js', img: js },
    { path: '/stack', label: 'stack.jsx', img: react },
    { path: '/contact', label: 'contact.ts', img: ts },
    { path: '/blog', label: 'blog.json', img: json },
    { path: '/resume', label: 'resume.json', img: json }
  ];

  return (
    <nav id='main-nav' className='center-y'>
      {links.map(({ path, label, img }) => (
        <Link key={path} href={path} className={`center-y side-nav-link ${router.pathname === path ? 'main-active-link' : ''}`}>
          <Image src={img} />
          {label}
        </Link>
      ))}
    </nav>
  )
}
