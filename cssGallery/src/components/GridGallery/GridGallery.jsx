import { Link } from "react-router-dom";
import styles from "./GridGallery.module.css";


export default function GridGallery(){
    return (
        <>  
            <h1 className={styles.gridGalleryH1}>CSS Grid Gallery</h1>
            <div className={styles.main}>

            <div className={styles.gridGalleryCardContainer}>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/Ellie.jpg" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>3D Hover</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card1" className={styles.gridGalleryCardContentLink}>Card One</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/button.png" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>3D NavBar</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card2" className={styles.gridGalleryCardContentLink}>Card Two</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/image3.jpg" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>PhotoCard</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card3" className={styles.gridGalleryCardContentLink}>Card Three</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/Cursor.png" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Mouse Effect</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card4" className={styles.gridGalleryCardContentLink}>Card Four</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/web.png" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Static Page</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card5" className={styles.gridGalleryCardContentLink}>Card Five</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src="../src/assets/boxShadow.png" alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Box and Drop Shadow</h3>
                            <p className={styles.gridGalleryCardContentP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum quam voluptas voluptatibus quae ipsum similique, iste possimus, 
                                nostrum minima blanditiis voluptatem necessitatibus ipsa eligendi? 
                                Qui eligendi obcaecati ipsa natus quas.
                            </p>
                            <Link to="/card6" className={styles.gridGalleryCardContentLink}>Card Six</Link>
                        </div>
                    </div>
            </div>
            </div>
        </>   
    );
};

