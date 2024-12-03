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
                <div className={styles.iconContainer}>
                    <Link href="https://www.linkedin.com/in/kyaw-zin-thein-98007b252">
                        <Image src="/userHome/linkenin.jpg" width={55} height={55} className={styles.icon1}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kyaw-zin-thein-98007b252/">
                        <Image src="/userHome/resume1con.png" width={55} height={55} className={styles.icon2}/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default UserNavbar;