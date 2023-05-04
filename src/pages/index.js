import styles from '../styles/modules/Home.module.css';
import CustomLink from '@/components/global/CustomLink';

const linkText = [
  { link: 'work', text: 'See Work' },
  { link: 'contact', text: 'Get In Touch' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Pablo Arenivar</h1>
      <h2 className={styles.tag}>Full Stack Web Developer</h2>
      <p className={styles.text}>I specialize in building modern and responsive websites and full stack web applications using React, Bootstrap/Tailwind, NextJS Firebase and Vercel, among a variety of other technologies.</p>
      <div className={styles.links}>
        {linkText.map(({ link, text }) => (
          <CustomLink link={link} text={text} />
        ))}
      </div>
    </main>
  )
}
