import React, { useState } from 'react';
import styles from './responsive.module.css'; 

export default function Responsive() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <label className={styles.label}>
            <nav className={styles.nav}>
                <button onClick={toggleSidebar} className={styles.btn}>Open</button>
                navbar
            </nav>
            <aside className={`${styles.sidebar} ${showSidebar ? styles.show : ''}`}>sideBar</aside>
            <main className={styles.main}>
                <h2>Hello world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor a ipsa voluptates repudiandae natus 
                    obcaecati ullam nulla ut ipsum cum, enim itaque modi accusantium aperiam eaque expedita non assumenda 
                    quam quos labore. Animi alias dignissimos earum quod rem! Asperiores veritatis quod dolor cum et? 
                    Cum qui fugiat vero magnam, consequatur nulla! Alias, dolorum doloribus quia, similique neque 
                    numquam qui veniam reprehenderit quaerat ipsam eum consequuntur libero corrupti modi pariatur 
                    magni voluptate nam quod blanditiis nihil. Explicabo aliquam nemo dolor nisi consequatur 
                    distinctio rerum labore provident 
                    repellat in sint soluta quae ab repudiandae mollitia fuga, maiores quaerat commodi? Dolor, optio.
                </p>
            </main>
            <footer className={styles.footer}>footer</footer>
        </label>
    );
}
