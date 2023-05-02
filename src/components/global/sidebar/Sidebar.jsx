import SideIcons from "./SideIcons"
import SideNav from "./SideNav"

export default function Sidebar({ toggle }) {
    return (
        <section id='sidebar'>
            <SideIcons toggle={toggle} /> 
            <SideNav />
        </section>
    )
} 