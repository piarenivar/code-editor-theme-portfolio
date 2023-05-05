import styles from '../styles/modules/Pages.module.css';
import StackItem from '@/components/StackItem';

export default function StackPage() {
    return (
        <main className={styles.main}>
            <h2><span className='purple'>export default</span> <span className='blue'>function</span> <span className='yellow'>Stack</span><span className='gold'>{`() {`}</span></h2>
            <h2 className={`purple ${styles.jsx_indent}`}>return {`(`}</h2>
            <StackItem />
            <h2 className={`purple ${styles.jsx_indent}`}>{`)`}</h2>
            <h2 className='gold'>{`}`}</h2>
        </main>
    )
}
