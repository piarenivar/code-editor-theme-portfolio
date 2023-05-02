import Link from "next/link";

export default function SideIcons({ toggle }) {
  return (
    <nav id='side-icons'>
      <div className='side-icons-sub-menu'>
        <Link href='/' className='center'><i className='fa-solid fa-house fa-lg' /></Link>
        <Link href='/work' className='center'><i className='fa-solid fa-code fa-lg' /></Link>
        <Link href='/stack' className='center'><i className='fa-solid fa-layer-group fa-lg' /></Link>
        <hr />
        <Link href='/blog' className='center'><i className='fa-solid fa-pen-nib fa-lg' /></Link>
      </div>
      <div className='side-icons-sub-menu'>
        <Link href='/contact' className='center'><i className='fa-solid fa-paper-plane fa-lg' /></Link>
        <Link href='/about' className='center'><i className='fa-solid fa-circle-user fa-lg' /></Link>
        <Link href='/' className='center'><i className='fa-solid fa-gear fa-lg' /></Link>
      </div>
    </nav>
  )
}
