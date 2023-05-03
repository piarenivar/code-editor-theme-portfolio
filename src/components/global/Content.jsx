import Nav from "./Nav"
import Sidebar from "./sidebar/Sidebar"

export default function Content({ toggle }) {
    return (
        <section id='content'>
            <Sidebar toggle={toggle} />
            <Nav />
        </section>
    )
}
