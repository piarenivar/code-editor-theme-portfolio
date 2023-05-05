import styles from '../styles/modules/Pages.module.css';
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.container}>
        <div className={styles.container_left_contact}>
          <h3>Socials</h3>
          <Link href='https://github.com/piarenivar' className={`center-y underline-link ${styles.contact_link}`} target='_blank'><i className='center fa-brands fa-github' />github</Link>
          <Link href='https://www.linkedin.com/in/pabloarenivar/' className={`center-y underline-link ${styles.contact_link}`} target='_blank'><i className='center fa-brands fa-linkedin' />linkedin</Link>
          <Link href='https://codepen.io/piarenivar' className={`center-y underline-link ${styles.contact_link}`} target='_blank'><i className='center fa-brands fa-codepen' />codepen</Link>
        </div>
        <form className={styles.contact_form}>
          <input placeholder='Name' className={styles.contact_name}></input>
          <input placeholder='Email' className={styles.contact_email}></input>
          <input placeholder='Subject' className={styles.contact_subject}></input>
          <textarea className={styles.contact_textarea} />
          <button type='submit' className={`center ${styles.contact_submit}`}>Submit</button>
        </form>
      </div>
    </main>
  )
}
