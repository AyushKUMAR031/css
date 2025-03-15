import React from 'react';
import styles from './imageShadow.module.css';

const ImageShadow = () => {
  return (
    <div className={styles.shadow}>
      <h1>Box VS Drop Shadow CSS</h1>

      {/* Container 1: For Images with Background */}
      <div className={styles.container}>
        <div className={styles.imageBoxShadow}>
          <img 
            src="/src/assets/kakashi.jpg" 
            alt="Image with Box Shadow" 
            className={styles.images} 
          />
          <p>Box Shadow</p>
        </div>

        <div className={styles.imageDropShadow}>
          <img 
            src="/src/assets/kakashi.jpg" 
            alt="Image with Drop Shadow" 
            className={styles.images} 
          />
          <p>Drop Shadow</p>
        </div>
      </div>

      {/* Container 2: For Transparent Images */}
      <div className={styles.container}>
        <div className={styles.imageBoxShadow}>
          <img 
            src="/src/assets/kakashi2.png" 
            alt="Image with Box Shadow without Bg" 
            className={styles.images} 
          />
          <p>Box Shadow without Bg</p>
        </div>

        <div className={styles.imageDropShadow}>
          <img 
            src="/src/assets/kakashi2.png" 
            alt="Image with Drop Shadow without Bg" 
            className={styles.images} 
          />
          <p>Drop Shadow without Bg</p>
        </div>
      </div>

      {/* Info Section */}
      <span>
        <h5>Box Shadow</h5>
        <p>The box-shadow property applies a shadow to the entire box of an element, including the padding and border.</p>
        <h5>Drop Shadow</h5>
        <p>The filter: drop-shadow property applies a shadow to the image itself, following the shape of the image content.</p>
      </span>
    </div>
  );
};

export default ImageShadow;
