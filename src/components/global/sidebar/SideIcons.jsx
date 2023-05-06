import Link from "next/link";
import { useRouter } from "next/router";

export default function SideIcons({ toggle }) {
  const router = useRouter();

  const linksTop = [
    { path: '/', icon: 'fa-solid fa-house fa-lg' },
    { path: '/work', icon: 'fa-solid fa-code fa-lg' },
    { path: '/stack', icon: 'fa-solid fa-layer-group fa-lg' },
  ];

  const linksMid = [
    // { path: '/blog', icon: 'fa-solid fa-pen-nib fa-lg' }
  ]

  const linksBottom = [
    // { path: '/resume', icon: 'fa-solid fa-file fa-lg' },
    { path: '/contact', icon: 'fa-solid fa-paper-plane fa-lg' },
    { path: '/about', icon: 'fa-solid fa-circle-user fa-lg' },
    { path: '', icon: 'fa-solid fa-gear fa-lg', toggle: toggle,}
  ]

  return (
    <nav id='side-icons'>
      <div className='side-icons-sub-menu'>
        {linksTop.map(({ path, icon }) => (
          <Link key={path} href={path} className={`center ${router.pathname === path ? 'side-active-icon-link' : ''}`}>
            <i className={`${icon} ${router.pathname === path ? 'side-active-icon' : ''}`}></i>
          </Link>
        ))}
        <hr />
        {linksMid.map(({ path, icon }) => (
          <Link key={path} href={path} className={`center ${router.pathname === path ? 'side-active-icon-link' : ''}`}>
            <i className={`${icon} ${router.pathname === path ? 'side-active-icon' : ''}`}></i>
          </Link>
        ))}
      </div>
      <div className='side-icons-sub-menu'>
        {linksBottom.map(({ path, icon, toggle }) => (
          <Link key={path} href={path} className={`center ${router.pathname === path ? 'side-active-icon-link' : ''}`} onClick={toggle}>
            <i className={`${icon} ${router.pathname === path ? 'side-active-icon' : ''}`}></i>
          </Link>
        ))}
      </div>
    </nav>
  )
} 
