import styles from "./photoCard.module.css";

const PhotoCard = () => {
    const images = [
        { src: "/assets/image1.png", alt: "photo1" },
        { src: "/assets/image2.jpg", alt: "photo2" },
        { src: "/assets/image3.jpg", alt: "photo3" },
        { src: "/assets/image4.avif", alt: "photo4" },
        { src: "/assets/image5.webp", alt: "photo5" }
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
