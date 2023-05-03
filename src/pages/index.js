import styles from '../styles/modules/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <code className={styles.header}>Pablo Arenivar</code>
      <code className={styles.tag}>Full Stack Web Developer</code>
      <code className={styles.text}>I specialize in building modern and responsive websites and full stack web applications using React, Bootstrap/Tailwind, NextJS and Firebase among a variety of other technologies.</code>
      <div className={styles.links}>
        {/* <Link href='/work' className={styles.work}><code>See Work</code></Link> */}
        <Link href='/work'>
          <code>See Work</code>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>

        <Link href='/contact'>
          <code>Contact Me</code>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>
      </div>
    </main>
  )
}
