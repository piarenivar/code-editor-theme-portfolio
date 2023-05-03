import styles from '../styles/modules/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <code className={styles.header}>Pablo Arenivar</code>
      <code className={styles.tag}>Full Stack Web Developer</code>
      <code className={styles.text}>I specialize in building modern and responsive websites and full stack web applications using React, Bootstrap/Tailwind, NextJS and Firebase among a variety of other technologies.</code>
      <div className={styles.links}>
        <Link href='/work' className={styles.work}><code>See Work</code></Link>
        <Link href='/contact'><code>Contact Me</code></Link>
      </div>
    </main>
  )
}
