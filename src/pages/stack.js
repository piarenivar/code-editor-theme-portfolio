import styles from '../styles/modules/Pages.module.css';
import StackItem from '@/components/StackItem';
import stackData from '../lib/stackData';

function renderStackData({ id, img, alt, stack }) {
    return <StackItem key={id} img={img} alt={alt} stack={stack} />
}

export default function StackPage() {
    return (
        <main className={styles.main}>
            <h2><span className='purple'>export default</span> <span className='blue'>function</span> <span className='yellow'>Stack</span><span className='gold'>{`() {`}</span></h2>
            <h2 className={`purple ${styles.jsx_indent}`}>return {`(`}</h2>
            <div className={styles.stack}>
                {stackData.map(renderStackData)}
            </div>
            <h2 className={`purple ${styles.jsx_indent}`}>{`)`}</h2>
            <h2 className='gold'>{`}`}</h2>
        </main>
    )
}
