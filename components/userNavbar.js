import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


const UserNavbar = ({ className }) => {
    
    return (
        <nav className={`${styles.navBar} ${className}`}>
            <div className={styles.navContent}>
                <Image src="/userHome/K.png" width={75} height={75} className={styles.topArrow}/>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <a href="#about">About</a>
                    </div>
                    <div className={styles.button}>
                        <a href="#skills"> Skills</a>
                    </div>
                    <div className={styles.button}>
                        <a href="#projects"> Projects</a>
                    </div>
                    <div className={styles.button}>
                        <a href="#education">Education</a>
                    </div>
                </div>
               
            </div>
        </nav>
    )
}

export default UserNavbar;