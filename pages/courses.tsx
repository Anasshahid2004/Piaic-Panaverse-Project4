/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>Panaverse | Courses</title>
        <div className={styles.navbar}>
          <div className={styles["container"] + " " + styles["flex"]}>
            <Link href="/" className={styles.logo}> <img src="https://i.postimg.cc/Dwh99Wzy/red-p-logo-text-dao-croped.png"/> </Link>
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
              <h1>Program of Studies</h1>
              <p>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each.</p>
              <a href="#" className={styles["btn"] + " " + styles["btnoutline"]}>Read More</a>
            </div>
            <div className={styles.showcaseform}>
              <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569727983046697/Kerfin7_NEA_2478-removebg-preview.png?width=427&height=427" alt="" />
            </div>
          </div>
        </section>
        <section className={styles.languages}>
          <h1 className={styles["md"] + " " + styles["textcenter"] + " " + styles["my5"]}>
            Program Structure
          </h1>
          <p className={styles["lead"] + " " + styles["textcenter"]}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Core Courses (Common in All Specializations)</h2>
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
              <p className={styles.textcenter}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.</p>
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
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Artificial Intelligence (AI) and Deep Learning Specialization</h2>
          <p className={styles.textcenter}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>AI-351: Developing Planet Scale Intelligent APIs and Python Programming</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>AI-361: Deep Learning and MLOps</p>
              </Link>
            </div>
          </div>
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Cloud-Native Computing Specialization</h2>
          <p className={styles.textcenter}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>CN-351: Certified Kubemetes Application Developer (CKAD)</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>CN-361: Developing Mutli-Cloud APIs using CDK for Terraform</p>
              </Link>
            </div>
          </div>
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Ambient Computing and IoT Specialization</h2>
          <p className={styles.textcenter}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.</p>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>AC-351: Ambient Computing with Voice Assistants and Matter Devices</p>
            </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>AC-361: Embedded Programming Using C and Rust</p>
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