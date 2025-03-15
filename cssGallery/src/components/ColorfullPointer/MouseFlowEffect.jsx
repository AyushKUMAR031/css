import React, { useEffect, useRef } from 'react';
import styles from './MouseFlowEffect.module.css';

const MouseFlowEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particlesArray = [];
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6'];

        // Resize canvas on window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Particle Class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 10 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Handle particles logic
        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                if (particlesArray[i].size <= 0.2) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        // Mouse movement event
        const handleMouseMove = (event) => {
            for (let i = 0; i < 5; i++) {
                particlesArray.push(new Particle(event.clientX, event.clientY));
            }
        };
        canvas.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
        <h1>Move Your Cursor</h1>
        <div className={styles.mouseFlowEffectMouse}>
            <div className={styles.Mouse}>
                <canvas ref={canvasRef} className={styles.mouseFlowCanvas}></canvas>
            </div>
        </div>
        </>

    );
};

export default MouseFlowEffect;
