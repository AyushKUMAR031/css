import { useState } from "react";
import styles from "./navbar.module.css"; // Import CSS as styles object
import { BiWorld, BiRocket, BiUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: <AiFillHome />, label: "Home" },
        { icon: <BiWorld />, label: "World" },
        { icon: <BiRocket />, label: "Rocket" },
        { icon: <BiUserCircle />, label: "Profile" }
    ];

    return (
        <div className={styles.mainContainer}>
            <h1>The Asthetic NavBar</h1>
            <nav className={styles.buttonContainer}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={index === activeIndex ? styles.active : ""}
                            onClick={() => setActiveIndex(index)}
                        >
                            <a
                                href="#"
                                className={index === activeIndex ? styles.activeText : ""}
                            >
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.created}>
                <p>Created By</p>
                <a href="https://github.com/AyushKUMAR031">Code Ayush</a>
            </div>
        </div>
    );
};

export default Navbar;
