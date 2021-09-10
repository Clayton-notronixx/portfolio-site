import Link from "next/link";
import styles from "../styles/components/header.module.scss";

export const Header = props => {
    return <header className={styles.header}>
        <div className="container">
            <nav>
                <Link href="/">Home</Link>
                <Link href="/portfolio">My Work</Link>
            </nav>
        </div>
    </header>
}
