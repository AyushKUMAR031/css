import { Link } from "react-router-dom";
import styles from "./GridGallery.module.css";

import Ellie from '@/assets/Ellie.jpg';
import ButtonImg from '@/assets/button.png';
import Image3 from '@/assets/image3.jpg';
import Cursor from '@/assets/Cursor.png';
import WebImg from '@/assets/web.png';
import BoxShadow from '@/assets/boxShadow.png';
import Image7 from '@/assets/image7.png';


export default function GridGallery(){
    return (
        <outermain>  
            <h1 className={styles.gridGalleryH1}>CSS Grid Gallery</h1>
            <div className={styles.main}>

            <div className={styles.gridGalleryCardContainer}>
                    <div className={styles.gridGalleryCard}>
                        <img src={Ellie} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>3D Hover</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                A 3D hover effect using CSS grid and transform properties, performing a 3D rotation on hover on 
                                the image.
                            </p>
                            <Link to="/card1" className={styles.gridGalleryCardContentLink}>Card One</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={ButtonImg} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>3D NavBar</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                It is a 3d effect navbar which feels like clicing a real button,while
                                switching tabs.
                            </p>
                            <Link to="/card2" className={styles.gridGalleryCardContentLink}>Card Two</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={Image3} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>PhotoCard</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                A photocard which reveals the image on hover in a soothing manner using CSS grid and transform properties,
                            </p>
                            <Link to="/card3" className={styles.gridGalleryCardContentLink}>Card Three</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={Cursor} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Mouse Effect</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                A mouse effect which changes the cursor to a custom image and creates a ripple effect on hover.
                            </p>
                            <Link to="/card4" className={styles.gridGalleryCardContentLink}>Card Four</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={WebImg} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Static Page</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                Static page to checkout the position attribute like - fixed, absolute, relative and sticky.
                            </p>
                            <Link to="/card5" className={styles.gridGalleryCardContentLink}>Card Five</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={BoxShadow} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Box and Drop Shadow</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                Shadow effect in a box-layout and filter with drop-shadow effect on image.
                            </p>
                            <Link to="/card6" className={styles.gridGalleryCardContentLink}>Card Six</Link>
                        </div>
                    </div>
                    <div className={styles.gridGalleryCard}>
                        <img src={Image7} alt="placeholder" />
                        <div className={styles.gridGalleryCardContent}>
                            <h3 className={styles.gridGalleryCardContentH3}>Responsive Layout</h3>
                            <p className={styles.gridGalleryCardContentP}>
                                A projection of basic responsive layout with minimalistic CSS (grid and grid-template).
                            </p>
                            <Link to="/card7" className={styles.gridGalleryCardContentLink}>Card Seven</Link>
                        </div>
                    </div>
            </div>
            </div>
        </outermain>   
    );
};

