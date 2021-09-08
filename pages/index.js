import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import {SkillCard} from "../components/SkillCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clayton Smith - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer with over 10 years experience in web & mobile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className={styles.hero}>
              <div className="container">
                  <div className="row">
                      <div className={"col-md-6 " + styles.left}>
                          <h3>Hey 👋 I&apos;m</h3>
                          <h1>Clayton Smith</h1>
                          <h4>Full Stack Web & Mobile Developer</h4>
                          <div className={styles.linkRow}>
                              <a href="https://github.com/clayton-notronixx"><i className="fab fa-github"/> </a>
                              <a href="mailto:clayton@bytehogs.com"><i className="fas fa-envelope"/> </a>
                          </div>
                      </div>
                      <div className={"col-md-6 " + styles.right}>
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.blobOne}>
                              <path fill="#D0E2FF" d="M32.9,-35C47.4,-34.8,67.2,-31.5,72,-22.1C76.8,-12.7,66.7,2.8,59.3,17.3C51.9,31.7,47.1,45,37.7,48C28.3,51.1,14.1,43.8,3.7,38.7C-6.8,33.7,-13.6,30.9,-23.2,27.9C-32.8,25,-45.1,21.8,-51.3,14C-57.6,6.2,-57.7,-6.3,-57.5,-22.3C-57.2,-38.2,-56.6,-57.7,-47,-59.5C-37.4,-61.3,-18.7,-45.4,-4.7,-38.9C9.2,-32.3,18.4,-35.2,32.9,-35Z" transform="translate(100 100)" />
                          </svg>
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.blobTwo}>
                              <path fill="#D0E2FF" d="M32.9,-43.3C43.2,-37.8,52.5,-28.9,61.8,-16.3C71.2,-3.6,80.7,12.9,77.7,26.2C74.7,39.6,59.2,49.9,44.2,57.2C29.1,64.5,14.6,68.9,2.2,65.9C-10.2,62.9,-20.5,52.6,-31,43.8C-41.6,35,-52.4,27.8,-55.6,18.1C-58.7,8.3,-54.2,-3.9,-50.4,-16.6C-46.5,-29.2,-43.4,-42.3,-35.1,-48.5C-26.8,-54.6,-13.4,-53.9,-1.1,-52.4C11.3,-51,22.6,-48.8,32.9,-43.3Z" transform="translate(100 100)" />
                          </svg>
                      </div>
                  </div>

              </div>
          </div>
          <div className={styles.aboutMe}>
              <div className="container">
                  <h2>About Me</h2>
                  <p>Hey I&apos;m Clayton, a passionate self-taught full stack developer, primarily focusing on web and mobile projects. I started in 2011 so I have had plenty of time to
                  explore several technology options both old and new. I tend to stick with React for both web projects and mobile apps with React Native, depending on the project needs
                  NextJs is my next go-to which can support larger and more SEO focused clients.</p>
              </div>
          </div>
          <div className={styles.topSkills}>
              <div className="container">
                  <h2>Top Skillsets</h2>
                  <div className="row">
                      <div className="col-md-4">
                          <SkillCard name="React" icon="fab fa-react" subtitle="Web & Native"/>
                      </div>
                      <div className="col-md-4">
                          <SkillCard name="NodeJS" icon="fab fa-node-js"/>
                      </div>
                      <div className="col-md-4">
                          <SkillCard name="AWS" icon="fab fa-aws"/>
                      </div>
                      <div className="col-md-4">
                          <SkillCard name="NextJS"/>
                      </div>
                      <div className="col-md-4">
                          <SkillCard name="SQL"/>
                      </div>
                      <div className="col-md-4">
                          <SkillCard name="CSS & SASS"/>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </div>
  )
}
