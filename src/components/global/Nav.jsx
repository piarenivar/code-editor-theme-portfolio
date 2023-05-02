import Link from "next/link"
import Image from 'next/image';

import html from '../../../public/icons/html.png';
import css from '../../../public/icons/css.png';
import js from '../../../public/icons/js.png';
import react from '../../../public/icons/react.png';
import ts from '../../../public/icons/ts.png';
import json from '../../../public/icons/json.png';

export default function Nav() {
  return (
    <nav id='main-nav' className='center-y'>
      <Link href='/' className='center-y side-nav-link'><Image src={html} alt='HTML icon' />index.html</Link>
      <Link href='/about' className='center-y side-nav-link'><Image src={css} alt='CSS icon' /> about.css</Link>
      <Link href='/work' className='center-y side-nav-link'><Image src={js} alt='Javascript icon' />work.js</Link>
      <Link href='/stack' className='center-y side-nav-link'><Image src={react} alt='React icon' />stack.jsx</Link>
      <Link href='/contact' className='center-y side-nav-link'><Image src={ts} alt='TypeScript icon' /> contact.ts</Link>
      <Link href='/blog' className='center-y side-nav-link'><Image src={json} alt='JSON icon' />blog.json</Link>
    </nav>
  )
}
