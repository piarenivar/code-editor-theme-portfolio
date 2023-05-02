import { useState } from "react"

import Link from "next/link";
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

  return (
    <nav id='side-nav'>
      <code className='explorer'>Explorer</code>
      <button className='center-y' onClick={handleRotatePortfolio}><i className={rotatePortfolio ? 'fa-solid fa-chevron-down fa-xs rotate-90' : 'fa-solid fa-chevron-down fa-xs'} />Portfolio</button>
      <div className={rotatePortfolio ? 'hide-height' : 'side-nav-links'}>
        <Link href='/' className='center-y side-nav-link'><Image src={html} alt='HTML icon' />index.html</Link>
        <Link href='/about' className='center-y side-nav-link'><Image src={css} alt='CSS icon' /> about.css</Link>
        <Link href='/work' className='center-y side-nav-link'><Image src={js} alt='Javascript icon' />work.js</Link>
        <Link href='/stack' className='center-y side-nav-link'><Image src={react} alt='React icon' />stack.jsx</Link>
        <Link href='/contact' className='center-y side-nav-link'><Image src={ts} alt='TypeScript icon' /> contact.ts</Link>
        <Link href='/blog' className='center-y side-nav-link'><Image src={json} alt='JSON icon' />blog.json</Link>
      </div>
      <button className='center-y' onClick={handleRotateSocials}><i className={rotateSocials ? 'fa-solid fa-chevron-down fa-xs rotate-90' : 'fa-solid fa-chevron-down fa-xs'} />Socials</button>
      <div className={rotateSocials ? 'hide-height' : 'side-nav-links'}>
        <Link href='https://github.com/piarenivar' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-github' />github.com</Link>
        <Link href='https://www.linkedin.com/in/pabloarenivar/' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-linkedin' />linkedin.com</Link>
        <Link href='https://codepen.io/piarenivar' className='center-y side-nav-link' target='_blank'><i className='center fa-brands fa-codepen' />codepen.com</Link>
      </div>
    </nav>
  )
}
