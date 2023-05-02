import Nav from "./Nav"
import Sidebar from "./sidebar/Sidebar"

export default function Content() {
    return (
        <section id='content'>
            <Sidebar />
            <Nav />
        </section>
    )
}
