import styles from '../styles/modules/Pages.module.css';
import Image from "next/image"

export default function StackItem({ img, alt, stack }) {
  return (
    <div className={styles.stack_item}>
      <Image src={img} alt={alt} className={styles.stack_img} />
      <span>{stack}</span>
    </div>
  )
}
