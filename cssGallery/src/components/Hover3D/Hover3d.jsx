import React from 'react';
import styles from './Hover3d.module.css';

export default function Hover3d() {
    return (
        <div className={styles.maindiv}>
            <h1>Hover On The Image</h1>
            <div className={styles.contentContainer}> {/* New container for structured layout */}

                <article className={styles.article}>
                    <img src="./src/assets/Ellie.jpg" alt="Ellie" />
                    <img src="./src/assets/Ellie_cutout.png" alt="Ellie Cutout" />
                </article>

            </div>
            <div className={styles.create}>
                <p>Created By</p>
                <a href="https://github.com/AyushKUMAR031" target="_blank" rel="noopener noreferrer">
                    Code Ayush
                </a>
            </div>
        </div>
    );
}
