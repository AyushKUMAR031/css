import styles from "./photoCard.module.css";

// Import images for Vite compatibility
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.jpg";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.avif";
import Image5 from "@/assets/image5.webp";

const PhotoCard = () => {
    const images = [
        { src: Image1, alt: "photo1" },
        { src: Image2, alt: "photo2" },
        { src: Image3, alt: "photo3" },
        { src: Image4, alt: "photo4" },
        { src: Image5, alt: "photo5" }
    ];

    return (
        <div className={styles.photoCardContainer}>
            <h1 className={styles.photoCardH1}>PhotoCard</h1>
            <div className={styles.photoCardGallery}>
                {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                ))}
            </div>
        </div>
    );
};

export default PhotoCard;
