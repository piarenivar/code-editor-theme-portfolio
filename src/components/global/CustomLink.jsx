import Link from "next/link"

export default function CustomLink({ link, text }) {
    return (
        <Link href={`/${link}`} className='custom-link'>
            <code>{text}</code>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </Link>
    )
}
