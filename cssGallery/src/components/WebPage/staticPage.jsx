import React from 'react';
import styles from './staticPage.module.css';

const StaticPage = () => {
    return (
        <div>
            <nav className={styles.staticPageNav}>This NavBar is Fixed</nav>
            <div className={styles.staticPageContainer}>
            <main className={styles.staticPageMain}>
                <h1 className={styles.staticPageH1}>Its Relative</h1>
                <h2 className={styles.staticPageH2}>Itachi Uchiha: The Quintessential Badass</h2>

                <p className={styles.staticPageP}>
                    <b className={styles.staticPageB}>Itachi Uchiha</b>, a character from the popular anime series <b className={styles.staticPageB}>
                    "Naruto,"</b> embodies the essence of a true badass. His enigmatic persona, extraordinary abilities,
                    and profound sacrifices make him one of the most compelling characters in the anime world. Itachi’s
                    story is a blend of tragedy, heroism, and mystery, capturing the admiration and awe of fans globally.
                </p>

                <h2 className={styles.staticPageH2}>Master of the Sharingan</h2>
                <p className={styles.staticPageP}>
                    Itachi's mastery of the Sharingan, a powerful dōjutsu of the Uchiha clan, is unparalleled. <b className={styles.staticPageB}>
                    His ability to cast genjutsu</b>, control others' perceptions, and predict movements makes him a formidable opponent.
                    The Mangekyō Sharingan, which he awakened after the traumatic loss of his best friend, Shisui Uchiha,
                    granted him access to even more devastating techniques like <b className={styles.staticPageB}>Amaterasu</b> and <b className={styles.staticPageB}>Tsukuyomi</b>.
                    These abilities are not just powerful; they are wielded with such precision and grace that they underline
                    Itachi's badass reputation.
                </p>

                <h2 className={styles.staticPageH2}>Tactical Genius</h2>
                <p className={styles.staticPageP}>
                    Beyond raw power, Itachi is a strategic genius. He can analyze situations, anticipate his enemies' moves,
                    and devise complex plans with ease. His intelligence and foresight are evident in his battles, where he
                    often outsmarts opponents long before engaging them directly. Itachi's fight against Kakashi Hatake,
                    where he effortlessly <b className={styles.staticPageB}>traps Kakashi in a genjutsu</b>, is a prime example of his strategic prowess.
                </p>

                <h2 className={styles.staticPageH2}>Unyielding Will and Sacrifice</h2>
                <p className={styles.staticPageP}>
                    Itachi's true strength lies in his unyielding will and the sacrifices he makes for the greater good.
                    He massacred his entire clan, including his parents, to prevent a coup that could have led to a
                    devastating war. This act, driven by a deep sense of duty and love for his brother Sasuke, shrouded
                    him in infamy. Yet, it also highlighted his profound inner strength and willingness to bear the burden
                    of hatred to protect Konoha, the village he loved.
                </p>

                <h2 className={styles.staticPageH2}>Complex Morality</h2>
                <p className={styles.staticPageP}>
                    Itachi's morality is complex and layered, adding depth to his badass nature. He operates in the shadows,
                    misunderstood by many, yet his actions are driven by a strong moral code. His willingness to become a
                    villain in the eyes of the world to ensure peace showcases a level of selflessness that is both tragic
                    and heroic. Itachi's revelation of his true intentions to Sasuke adds a poignant layer to his character,
                    transforming him from a perceived villain to a tragic hero.
                </p>

                <h2 className={styles.staticPageH2}>Legacy and Influence</h2>
                <p className={styles.staticPageP}>
                    Itachi's influence extends beyond his life. His actions and legacy profoundly impact Sasuke, shaping
                    his path and decisions. The revelation of Itachi's true motives ignites a transformation in Sasuke,
                    altering his view of the world and his place within it. Itachi's legacy as a protector who operated
                    from the shadows cements his status as an iconic badass in the Naruto universe.
                </p>

                <h2 className={styles.staticPageH2}>Conclusion</h2>
                <p className={styles.staticPageP}>
                    Itachi Uchiha's badass nature is a combination of his unparalleled abilities, strategic genius,
                    profound sacrifices, and complex morality. He is a character who operates in the grey areas of morality,
                    driven by a deep sense of duty and love. Itachi's story is one of tragedy, heroism, and enduring legacy,
                    making him a quintessential badass and a beloved character in the world of anime.
                </p>
            </main>
            
                <aside className={styles.staticPageAside}>
                    Position : Sticky    
                    <img 
                        className={styles.staticPageItachi} 
                        src="./src/assets/crow.jpg"
                        alt="Itachi Uchiha"
                    />
                </aside>
            </div>
        </div>
    );
};

export default StaticPage;
