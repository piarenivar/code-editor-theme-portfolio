import styles from '../styles/modules/Pages.module.css';
import Card from '@/components/Card';

import workData from '../lib/workData';

function renderWorkData({ id, img, alt, title, desc, stack, github, url }) {
  return <Card key={id} img={img} alt={alt} title={title} desc={desc} stack={stack} github={github} url={url} />
}

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}><span className='blue'>const</span> <span className='gold'>work</span> = <span className='purple'>()</span> <span className='blue'>{`=>`}</span> <span className='purple'>{`{`}</span></h2>
      <div className={styles.cards}>
        {workData.map(renderWorkData)}
      </div>
      <h2 className={`purple ${styles.title}`}>{`}`}</h2>
    </main>
  )
}
