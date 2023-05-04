import styles from '../styles/modules/Pages.module.css';

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}><span className='blue'>const</span> <span className='gold'>work</span> = <span className='purple'>()</span> <span className='blue'>{`=>`}</span> <span className='purple'>{`{`}</span></h2>
    </main>
  )
}
