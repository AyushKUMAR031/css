import React, { useEffect } from 'react';
import styles from './face.module.css';

export default function Face() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = document.querySelectorAll(`.${styles.eye}`);
      eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const radian = Math.atan2(e.pageX - eyeX, e.pageY - eyeY);
        const rot = radian * (180 / Math.PI) * -1 + 180;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.frame}>
      <div className={styles.face}>
        <div className={styles.eyes}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
        </div>
      </div>
    </div>
  );
}
