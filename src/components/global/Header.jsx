import Link from 'next/link'

export default function Header() {
    return (
        <section id='header' className=''>
            <Link href='/' className='center-y'><i className='center fa-solid fa-code fa-xs fa-brand' />Pablo Arenivar - Full Stack Web Developer</Link>
            <div className='center'>
                <div className='header-circles stop-light-red'></div>
                <div className='header-circles stop-light-yellow'></div>
                <div className='header-circles stop-light-green'></div>
            </div>
        </section>
    )
}
