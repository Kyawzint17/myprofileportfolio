import { useState, useEffect } from 'react';
import styles from '@/styles/user.module.css';
import nav from '@/styles/navbar.module.css';
import UserNavbar from '@/components/userNavbar';
import Image from 'next/image';
import Head from 'next/head'; 

export default function userHome() {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Debugging logs
            console.log('Current ScrollY:', currentScrollY, 'Last ScrollY:', lastScrollY);

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) { // Hide after scrolling down 100px
                setIsNavbarVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds a smooth scrolling effect
        });
    };

    return (
        <>
            <Head>
                <title>My Profile Portfolio </title> {/* You can set the title for the page */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Viewport meta tag */}
            </Head>
            <UserNavbar className={isNavbarVisible ? nav.navVisible : nav.navHidden} />
            <div className={styles.background}>
                <Image
                    src="/userHome/topArrow.png" /* Replace with your actual image path */
                    alt="Scroll to top"
                    width={50}
                    height={50}
                    className={styles.fixedArrow}
                    onClick={scrollToTop}
                />
                <section id="intro">
                    <div className={styles.profile}>
                        <div className={styles.intro}>
                            <h1>Hey, I'm a web developer.</h1>
                            <p>
                                Hi, I’m Kyaw Zin Thein, a Computer Science graduated student 
                                from Assumption University of Thailand, 
                                specializing in web development.
                            </p>
                        </div>
                        <div className={styles.triangleContainer}>
                            <Image
                                src="/userHome/pfp.png" /* Replace with your image path */
                                alt="Profile"
                                width={100}
                                height={100}
                                className={styles.imageAboveTriangle}
                            />
                            <div className={styles.triangle}></div>
                        </div>
                    </div>
                </section>
                <div className={styles.skill}>
                    <section id="skills">
                        <div className={styles.skillIntro}>
                            <h2>My Skills</h2>
                            <p>My Expertise</p>
                        </div>
                        <div className={styles.expertisection}>
                            <div className={styles.section1}>
                                <div className={styles.square1}>
                                    
                                </div>
                                <div className={styles.square2}>

                                </div>
                            </div>
                            <div className={styles.section2}>
                                <div className={styles.square3}>

                                </div>
                                <div className={styles.square4}>

                                </div>
                            </div>
                        </div>
                        
                    </section>
                </div>
                
                
            </div>
        </>
    )


}