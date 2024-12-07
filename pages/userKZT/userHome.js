import { useState, useEffect } from 'react';
import styles from '@/styles/user.module.css';
import nav from '@/styles/navbar.module.css';
import UserNavbar from '@/components/userNavbar';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; 

export default function userHome() {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Restore scroll position from session storage
        const savedScrollY = sessionStorage.getItem('scrollPosition');
        if (savedScrollY) {
            window.scrollTo(0, parseInt(savedScrollY, 10));
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Debugging logs
            console.log('Current ScrollY:', currentScrollY, 'Last ScrollY:', lastScrollY);

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 1) {
                setIsNavbarVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);

            // Save scroll position to session storage
            sessionStorage.setItem('scrollPosition', currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Optionally, clear the scroll position when the component unmounts
            // sessionStorage.removeItem('scrollPosition');
        };
    }, [lastScrollY]);

    const scrollToTop = () => {
        console.log("Scroll to top clicked");
        const scrollStep = -window.scrollY / (500 / 15); // 500ms duration
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
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
                                Hi, I’m Kyaw Zin Thein, a Computer Science student 
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
                                    <div className={styles.Stitle}>
                                        <Image src="/skill1con/skill1con.png" width={70} height={70} className={styles.SIcon}/>
                                        <h3>Core Competencies</h3>
                                    </div>
                                    <div className={styles.Sparagraph}>
                                        Adaptable and organized, with strong time management skills. 
                                        Quick to adjust to new challenges while maintaining focus on 
                                        high-quality results.
                                    </div>
                                </div>
                                <div className={styles.square2}>
                                    <div className={styles.Stitle}>
                                        <Image src="/skill1con/team1con.jpg" width={70} height={70} className={styles.SIcon}/>
                                        <h3>Team Colloboration</h3>
                                    </div>
                                    <div className={styles.Sparagraph}>
                                        Proactive in team environments, bringing strong 
                                        communication and collaboration skills to contribute 
                                        effectively to shared project goals.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.section2}>
                                <div className={styles.square3}>
                                    <div className={styles.Stitle}>
                                        <Image src="/skill1con/webdev1con.jpg" width={70} height={70} className={styles.SIcon}/>
                                        <h3>Web Development</h3>
                                    </div>
                                    <div className={styles.Sparagraph}>
                                        Skilled in creating interactive websites with JavaScript, 
                                        React, and Next.js, and proficient in server-side 
                                        development using Node.js with MongoDB, and Firebase.
                                    </div>
                                </div>
                                <div className={styles.square4}>
                                    <div className={styles.Stitle1}>
                                        <Image src="/skill1con/uiux.jpg" width={70} height={70} className={styles.SIcon1}/>
                                        <h3>UI / UX Design</h3>
                                    </div>
                                    <div className={styles.Sparagraph}>
                                        Experienced in creating responsive website designs using 
                                        Figma and implementing them with Visual Studio Code.
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </section>
                </div>
                <div className={styles.about}>
                    <section id="about">
                                <div className={styles.aboutMe}>
                                    <div>Nice to meet you.</div>
                                    <h3>Hey! I’m Kyaw Zin Thein, web developer.</h3>
                                    <p>Hi, my name is Kyaw Zin Thein, and I am Computer Science student from Assumption University of Thailand,
                                        focusing on web development, including front-end, back-end, and database technologies. 
                                        I have over 1 year experience in full-stack web development through projects.</p>
                                </div>
                                <div className={styles.uni}>
                                    <Image src="/about/abacLogo.jpg" width={80} height={80} className={styles.logo}/>
                                    <div className={styles.me}>
                                        <div>Kyaw Zin Thein</div>
                                        <p>Computer Science Student at Assumption University of Thailand</p>
                                    </div>
                                </div>
                                <div className={styles.tech}>
                                    <div className={styles.techStack}>
                                        <div className={styles.techTitle1}>
                                            Tech Stacks
                                        </div>
                                        <div className={styles.techSet}>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/javascript.png" width={80} height={80} className={styles.logo}/>
                                                <div>JavaScript</div>
                                            </div>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/react1con.png" width={80} height={80} className={styles.logo}/>
                                                <div>React</div>
                                            </div>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/node.png" width={80} height={80} className={styles.logo}/>
                                                <div>Node</div>
                                            </div>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/nextJs.png" width={80} height={80}/>
                                                <div>Next</div>
                                            </div>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/firebase.png" width={80} height={80} className={styles.circle}/>
                                                <div>Firebase</div>
                                            </div>
                                            <div className={styles.techIcon1}>
                                                <Image src="/about/mongodb.png" width={80} height={80}/>
                                                <div>MongoDB</div>
                                            </div>                                        
                                        </div>   
                                    </div>
                                    <div className={styles.techTool}>
                                        <div className={styles.techTitle2}>
                                            Tech Tools
                                        </div>
                                        <div className={styles.techSet2}>
                                            <div className={styles.techIcon2}>
                                                <Image src="/about/vercel.png" width={80} height={80}/>
                                                <div>Vercel</div>
                                            </div>
                                            <div className={styles.techIcon2}>
                                                <Image src="/about/figma.png" width={80} height={80} className={styles.logo}/>
                                                <div>Figma</div>
                                            </div> 
                                            <div className={styles.techIcon2}>
                                                <Image src="/about/vsc.png" width={80} height={80}/>
                                                <p>Visual Studio Code</p>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                    </section>
                </div>
                <div className={styles.project}>
                    <section id="projects">
                        <div className={styles.projectIntro}>
                            <h2 className={styles.Ptitle}>
                                All Projects
                            </h2>
                            <a href="https://github.com/Kyawzint17">
                                <div className={styles.moreInfo}>
                                    <div>
                                        My GitHub
                                    </div>
                                    <Image src="/project/github.jpg" width={50} height={50} className={styles.githubCircle}/>
                                </div>
                            </a>
                        </div>
                        
                        <div className={styles.projectS}>
                            <div className={styles.projectContainer}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src="/project/camelsrescafe.jpg" 
                                        alt="Camels Cafe & Restaurant" 
                                        className={styles.projectImage}
                                        layout="fill" 
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.projectInfo}>
                                    <h2>Camels Cafe & Restaurant</h2>
                                    <h3>Booking Tent System</h3>
                                    <h4>Non-Responsive Website</h4>
                                    <div className={styles.info}>
                                        <a href="https://github.com/Kyawzint17/camelsrestaurant.git">
                                            <Image src="/project/github.jpg" width={60} height={60} className={styles.infoCircle}/>
                                        </a>
                                        <a href="https://camelscafenrestaurant.vercel.app/">
                                            <Image src="/project/webicoN.jpg" width={60} height={60} className={styles.infoCircle}/>
                                        </a>
                                        <a href="https://drive.google.com/file/d/1FaxWPM_lxFbQt6V_j5IJOTxAg74-NbVV/view?usp=sharing">
                                            <Image src="/project/report.png" width={60} height={60} className={styles.infoCircle}/>
                                        </a> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectContainer}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src="/about/abacLogo.jpg" 
                                        alt="Scholarship Working Hours" 
                                        className={styles.projectImage}
                                        layout="fill" 
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.projectInfo}>
                                    <h2>Scholarship Working Hours</h2>
                                    <h3>Tracking Scholarship Hours</h3>
                                    <h4>Non-Responsive Website</h4>
                                    <div className={styles.info}>
                                        <a href="https://github.com/Kyawzint17/scholarshiprogram.git">
                                            <Image src="/project/github.jpg" width={60} height={60} className={styles.infoCircle}/>
                                        </a>
                                        <a href="https://drive.google.com/file/d/1f8mZLcD0oIw9KWskfcC0YgbttAJhI479/view?usp=sharing">
                                            <Image src="/project/report.png" width={60} height={60} className={styles.infoCircle}/>
                                        </a>                    
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectContainer}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src="/userHome/K.png" 
                                        alt="Camels Cafe & Restaurant" 
                                        className={styles.projectImage}
                                        layout="fill" 
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.projectInfo}>
                                    <h2>My Profile Portfolio</h2>
                                    <h4>Responsive Website</h4>
                                    <div className={styles.info}>
                                        <a href="https://github.com/Kyawzint17/myprofileportfolio.git">
                                            <Image src="/project/github.jpg" width={60} height={60} className={styles.infoCircle}/>
                                        </a>
                                        <a href="https://myprofileportfolio.vercel.app/">
                                            <Image src="/project/webicoN.jpg" width={60} height={60} className={styles.infoCircle}/>
                                        </a>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                
            </div>
        </>
    )


}