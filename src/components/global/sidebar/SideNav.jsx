import { useState } from "react"

import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';

import html from '../../../../public/icons/html.png';
import css from '../../../../public/icons/css.png';
import js from '../../../../public/icons/js.png';
import react from '../../../../public/icons/react.png';
import ts from '../../../../public/icons/ts.png';
import json from '../../../../public/icons/json.png';

export default function SideNav() {
  const [rotatePortfolio, setRotatePortfolio] = useState(false);
  const [rotateSocials, setRotateSocials] = useState(false);

  const handleRotatePortfolio = () => {
    setRotatePortfolio(!rotatePortfolio);
  }

  const handleRotateSocials = () => {
    setRotateSocials(!rotateSocials);
  }

  const router = useRouter();

  const links = [
    { path: '/', label: 'index.html', img: html },
    { path: '/about', label: 'about.css', img: css },
    { path: '/work', label: 'work.js', img: js },
    { path: '/stack', label: 'stack.jsx', img: react },
    { path: '/contact', label: 'contact.ts', img: ts },
    // { path: '/blog', label: 'blog.json', img: json },
    // { path: '/resume', label: 'resume.json', img: json }
  ];

  return (
    <nav id='side-nav'>
      <code className='explorer'>Explorer</code>
      <button className='center-y' onClick={handleRotatePortfolio}><i className={rotatePortfolio ? 'fa-solid fa-chevron-down fa-xs rotate-90' : 'fa-solid fa-chevron-down fa-xs'} />Portfolio</button>
      <div className={rotatePortfolio ? 'hide-height' : 'side-nav-links'}>
        {links.map(({ path, label, img }) => (
          <Link key={path} href={path} className={`center-y side-nav-link ${router.pathname === path ? 'side-active-link' : ''}`}>
            <Image src={img} />
            {label}
          </Link>
        ))}
      </div>
      <button className='center-y' onClick={handleRotateSocials}><i className={rotateSocials ? 'fa-solid fa-chevron-down fa-xs rotate-90' : 'fa-solid fa-chevron-down fa-xs'} />Socials</button>
      <div className={rotateSocials ? 'hide-height' : 'side-nav-links'}>
        <Link href='/contact' className='center-y side-nav-link'><i className='center fa-solid fa-envelope' />email</Link>
        <Link href='https://github.com/piarenivar' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-github' />github</Link>
        <Link href='https://www.linkedin.com/in/pabloarenivar/' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-linkedin' />linkedin</Link>
        <Link href='https://codepen.io/piarenivar' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-codepen' />codepen</Link>
      </div>
    </nav>
  )
}
