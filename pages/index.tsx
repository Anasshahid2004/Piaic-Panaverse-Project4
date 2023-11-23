/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <div className={styles.main}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>Panaverse | Welcome to Panaverse</title>
        <div className={styles.navbar}>
          <div className={styles["container"] + " " + styles["flex"]}>
          <Link href="/" className={styles.logo}> <img src="https://i.postimg.cc/Dwh99Wzy/red-p-logo-text-dao-croped.png"/></Link>
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <section className={styles.showcase}>
          <div className={styles["container"] + " " + styles["grid"]}>
            <div className={styles.showcasetext}>
              <h1>Certified Web 3.0 and Metaverse Developer.</h1>
              <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
              <span className={styles["btn"] + " " + styles["btnoutline"]}><Link href="https://www.piaic.org/">Read More</Link></span>
            </div>
            <div className={styles.showcaseform}>
              <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569713453965382/29343-removebg-preview.png?width=577&height=427" alt="" />
            </div>
          </div>
        </section>
        <section className={styles.stats}>
          <div className={styles.container}>
            <h2 className={styles.textcenter}>We Are Proud</h2>
            <h3 className={styles["statsheading"] + " " + styles["textcenter"] + " " + styles["my1"]}>
              You dont have to struggle alone, youve got our assistance and help.
            </h3>
            <div className={styles["grid"] + " " + styles["grid3"] + " " + styles["textcenter"] + " " + styles["my4"]}>
              <div className={styles.statsitem}>
                <i className="fas fa-graduation-cap fa-3x" />
                <h3>5,000+</h3>
                <p className={styles.textsecondary}>Students Enrolled</p>
              </div>
              <div className={styles.statsitem}>
                <i className="fas fa-tv fa-3x" />
                <h3>1,000+</h3>
                <p className={styles.textsecondary}>Classes Conducted</p>
              </div>
              <div className={styles.statsitem}>
                <i className="fas fa-chalkboard-teacher fa-3x" />
                <h3>100+</h3>
                <p className={styles.textsecondary}>Skilled Faculties</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cli}>
          <div className={styles["container"] + " " + styles["grid"] + " " + styles["my5"]}>
            {/* <img src="images/cli.png" alt="" /> */}
            <div className={styles.card}>
              <h3>Central Bank Digital Currencies (CBDCs)</h3>
            </div>
            <div className={styles.card}>
              <h3>Stablecoins</h3>
            </div>
            <div className={styles.card}>
              <h3>Cryptocurrency & Tokens</h3>
            </div>
          </div>
        </section>
        <section className={styles["featuressubhead"] + " " + styles["bgprimary"] + " " + styles[""] + " " + styles["py2"]}>
         <div className={styles["container"] + " " + styles["grid"]}>
            <div>
              <h2 className={styles.lg}>The Panaverse Plan</h2>
              <p className={styles["lead"] + " " + styles["my1"]}>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more. Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict  a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030</p>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://www.piaic.org/">Read More</Link></span>
            </div>
            <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569714456416376/istockphoto-1414647717-1024x1024-transformed-removebg-preview.png" alt="" />
          </div>
        </section>
        
        <section className={styles["featuressubhead"] + " " + styles["bglight"] + " " + styles["p-3"]}>
         <div className={styles["container"] + " " + styles["grid"]}>
            <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569714175389746/19362653-removebg-preview.png" alt="" />
            <div>
              <h1 className={styles.md}>What is Web 3.0</h1>
              <p className={styles.lead}>Web 3.0 has the potential to change the internet as we know it forever. Youre still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest phase” of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen.</p>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://www.piaic.org/">Read More</Link></span>
            </div>
          </div>
        </section>
        <section className={styles["featureshead"] + " " + styles["bgprimary"] + " " + styles["py3"]}>
        <div className={styles["container"] + " " + styles["grid"]}>
            <div>
              <h1 className={styles.md}>Achieve Your Goals</h1>
              <p className={styles.lead}>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://www.piaic.org/">Apply Now</Link></span>
            </div>
            <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569713823076423/32432-removebg-preview.png" alt="" />
          </div>
        </section>
        <section className={styles["featuressubhead"] + " " + styles["bglight"] + " " + styles["p-3"]}>
         <div className={styles["container"] + " " + styles["grid"]}>
            <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569728410853396/metaverse-removebg-preview.png?width=427&height=427" alt="" />
            <div>
              <h1 className={styles["md"] + " " + styles["m1"]}>What is a DAO?</h1>
              <p className={styles.lead}>A decentralized autonomous organization is an entity structure in which token holders participate in the management and decision-making of an entity.
              There is no central authority of a DAO; instead, power is distributed across token holders who collectively cast votes.
              All votes and activity through the DAO are posted on a blockchain, making all actions of users publicly viewable.
              The concept of a DAO is to promote oversight and management of an entity similar to a corporation. However, the key to a DAO is the lack of central authority; the collective group of leaders and participants act as the governing body.
              </p>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://www.piaic.org/">Read More</Link></span>
            </div>
          </div>
          </section>
        <section className={styles.languages}>
          <h1 className={styles["md"] + " " + styles["textcenter"] + " " + styles["my5"]}>
            Program Structure
          </h1>
          <p className={styles["lead"] + " " + styles["textcenter"]}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
          <h2 className={styles["textcenter"] + " " + styles["m1"] + " " + styles["md"]}>Core Courses (Common in All Specializations)</h2>
          <p className={styles.textcenter}>Every participant of the program will start by completing the following three core courses: </p>
          <div className={styles["container"] + " " + styles["flex"]}>
            
            <div className={styles.card}>
              <Link href="/core">
                <h4 className={styles.textcenter}>Quarter I</h4>
                <p className={styles.textcenter}>CS-101: Object-Oriented Programming using TypeScript.</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/core">
                <h4 className={styles.textcenter}>Quarter II</h4>
                <p className={styles.textcenter}>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) For Terrafom.</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/core">
               <h4 className={styles.textcenter}>Quarter III</h4>
               <p className={styles.textcenter}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product  Development.</p>
              </Link>
            </div>
          </div>
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
          <p className={styles.textcenter}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
              <Link href="/core">
                <h4 className={styles.textcenter}>Quarter IV</h4>
                <p className={styles.textcenter}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Apps</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>WV-361: Developing Planet-Scale Open Virtual And Augmented Metaverse Experience</p>
              </Link>
            </div>
          </div>
        </section>
        <footer className={styles["footer"] + " " + styles["bgdark"] + " " + styles["py5"]}>
          <div className={styles["container"] + " " + styles["grid"] + " " + styles["grid3"]}>
            <div className={styles.social}>
              <h1>Panaverse</h1>
              <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
              <Link href="https://github.com/panaverse"><i className="fab fa-github fa-2x" /></Link>
              <Link href="https://www.youtube.com/@panaverse"><i className="fab fa-youtube fa-2x" /></Link>
              <Link href="https://twitter.com/Panaverse_edu"><i className="fab fa-twitter fa-2x" /></Link>
              <Link href="https://www.facebook.com/panaverse.dao/"><i className="fab fa-facebook fa-2x" /></Link>
            </div>
            <div>
              <h1>Links</h1>
              <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>
              </ul>
            </nav>
            </div>
            <div>
              <h1>Powered By</h1>
              <Link href="https://www.panaverse.co/" className={styles.logo}> <img src="https://media.discordapp.net/attachments/1072569568691761254/1072860161082916865/red-p-logo-text_dao_croped.png?width=742&height=427"/></Link>
              <Link href="https://www.panacloud.ai/" className={styles.logo}> <img src="https://media.discordapp.net/attachments/1072569568691761254/1072858398716076113/krDPZo.png"/></Link>
            </div>
          </div>
          <p className={styles["bgfooter"] + " " + styles["textcenter"] + " " + styles["p-3"] + " " + styles["link"]}>© Copyrighted and Designed by <Link href="https://github.com/Anasshahid2004">Anas Shahid <i className="fab fa-github fa-1x" /></Link></p>
        </footer>
      </div>
    </>
    );
}