import styles from '../styles/modules/Pages.module.css';
import CustomLink from '@/components/global/CustomLink';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <h2 className={`${styles.title} ${styles.css_title}`}>.about-me {`{`}</h2>
            <div className={styles.container}>
                <div className={styles.container_left_about}>
                    <p className={styles.css_text}>Howdy! I'm Pablo, and I build cool stuff for the web. I've worked on simple responsive websites to full stack web applications. My area of expertise focuses on working with React, Bootstrap/Tailwind, NextJS, Firebase and Vercel; however, <Link href='/stack' className='underline-link'>my skills</Link> and experience extend beyond these tools.</p>
                    <p className={styles.css_text}>My journey into web development began while in college when I decided to build a notes and productivity app tailored to my specific needs. Little did I know this would come to ignite a passion for the art of creating elegant and responsive applications that people can interact with. Since then, I've been self-taught, continuously learning and staying up-to-date with the latest documentation and technologies.</p>
                    <p className={styles.css_text}>Whether you need a simple website or a complex full-stack application, I'm excited to collaborate with you and bring your vision to life. Let's build something awesome together!</p>
                    <h2 className={`${styles.title} ${styles.css_title}`}>{`}`}</h2>
                    <CustomLink link='contact' text='Get In Touch' />
                </div>
            </div>
        </main>
    )
}
