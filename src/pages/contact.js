import styles from '../styles/modules/Pages.module.css';

import Link from "next/link"
import { useState } from 'react';

import Loader from '@/components/global/Loader';

import { sendContactForm } from '@/lib/api';

const initValues = { name: '', email: '', subject: '', message: '' };
const initState = { isLoading: false, values: initValues };

export default function ContactPage() {
  const [state, setState] = useState(initState);
  const { error, isLoading, values } = state;
  const [success, setSuccess] = useState(false);

  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }))

  const onSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setState(initState);
      setSuccess(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }

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
        <form className={styles.contact_form} required>
          <input type='text' name='name' value={values.name} onChange={handleChange} placeholder='Name' className={styles.contact_name} required />
          <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' className={styles.contact_email} required />
          <input type='text' name='subject' value={values.subject} onChange={handleChange} placeholder='Subject' className={styles.contact_subject} required />
          <textarea name='message' value={values.message} onChange={handleChange} placeholder='Message' className={styles.contact_textarea} required />
          <button type='submit' disabled={!values.name || !values.email || !values.subject || !values.message} onClick={onSubmit} isLoading={isLoading} className={`center ${styles.contact_submit}`}>{isLoading ? <Loader /> : 'Submit'}</button>
          {error && (
            <span className='center'>{error}</span>
          )}
          {success && (
            <span className='center success'>Message successfully sent!</span>
          )}
        </form>
      </div>
    </main>
  )
}
