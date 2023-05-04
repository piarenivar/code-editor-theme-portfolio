import Image from "next/image";
import Link from "next/link";

import Stack from "./Stack";

export default function Card({ id, img, alt, title, desc, stack, github, url }) {
    return (
        <div className='card'>
            <Link href={url} className='card-img-link center' target='_blank'><Image src={img} alt={alt} className='card-img' /><i className='fa-solid fa-arrow-up-right-from-square fa-lg' /></Link>
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Stack id={id} stack={stack} />
                <div className='card-links'>
                    <Link href={github} className='card-link underline-link' target='_blank'>Source Code</Link>
                    <Link href={url} className='card-link underline-link' target='_blank'>See Live</Link>
                </div>
            </div>
        </div>
    )
}
