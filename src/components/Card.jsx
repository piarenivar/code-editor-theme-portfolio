import styles from '../styles/modules/Pages.module.css';

import Image from "next/image";
import Link from "next/link";

import CardStack from "./CardStack"; 

export default function Card({ id, img, alt, title, type, desc, stack, github, url }) {
    return (
        <div className={styles.card}>
            <Link href={url} className={`center ${styles.card_img_link}`} target='_blank'><Image src={img} alt={alt} className={styles.card_img} /><i className='fa-solid fa-arrow-up-right-from-square fa-lg' /></Link>
            <div className={styles.card_content}>
                <h3>{title}</h3>
                <span className={`gold ${styles.card_type}`}>{type}</span>
                <p>{desc}</p>
                <CardStack id={id} stack={stack} />
                <div className={styles.card_links}>
                    <Link href={github} className={`underline-link ${styles.card_link}`} target='_blank'>Source Code</Link>
                    <Link href={url} className={`underline-link ${styles.card_link}`} target='_blank'>See Live</Link>
                </div>
            </div>
        </div>
    )
}
