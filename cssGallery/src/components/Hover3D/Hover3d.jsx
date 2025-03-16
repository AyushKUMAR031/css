import React from 'react';
import styles from './Hover3d.module.css';

import Ellie from '@/assets/Ellie.jpg';  // Correct way to import
import EllieCutout from '@/assets/Ellie_cutout.png'; // Correct way to import

export default function Hover3d() {
    return (
        <div className={styles.maindiv}>
            <h1>Hover On The Image</h1>
            <div className={styles.contentContainer}> {/* New container for structured layout */}

                <article className={styles.article}>
                    <img src={Ellie} alt="Ellie" />
                    <img src={EllieCutout} alt="Ellie Cutout" />
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
