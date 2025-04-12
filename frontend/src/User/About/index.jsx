import styles from "./index.module.css";
import Layout from "../../Layout";
const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <div className={styles.header}>
        <p>BookiFy is a dynamic, student-built platform designed to automate and modernize small bookshops. We bring readers closer to the books they love, from trending bestsellers to niche academic texts</p>
      </div>

      <div className={styles.mission}>
        <div className={styles.content}>
          <img src="/Icons/mission.png" alt="Mission" className={styles.img} width={80} height={80} />
          <p className={styles.subheader}>Mission</p>
          <p className={styles.description}>To simplify bookshop operations, empower readers with smart search, and promote a reading culture powered by technology</p>
        </div>
        <div className={styles.content}>
          <img src="/Icons/vision.png" alt="Mission" className={styles.img} width={80} height={80} />
          <p className={styles.subheader}>Vision</p>
          <p className={styles.description}>To become the go-to digital platform for small bookshops worldwide—where technology meets passion for reading</p>
        </div>
        <div className={styles.content}>
          <img src="/Icons/challenge.png" alt="Mission" className={styles.img} width={80} height={80} />
          <p className={styles.subheader}>Our core values</p>
          <p className={styles.description}>Transparency<br/><br/>

          Accessibility<br/><br/>

          User-Centered Design  </p>
        </div>
      </div>

      <h1 className={styles.title}>Meet Our Team</h1>

      <div className={styles.team}>
        <div className={styles.member}>
          <img src="/Images/Rodney.jpeg" alt="Rodney Luguyesi" className={styles.memberimg} />
          <p className={styles.subheader}>Rodney Mwanje Luguyesi </p>
          <p className={styles.membertitle}>Backend and Hardware Engineer </p>
          <p className={styles.description}>A
            backend and hardware developer with 3+ years of experience, ensuring seamless
            functionality and performance.</p>
        </div>

        <div className={styles.member}>
          <img src="/Images/Dan.jpeg" alt="Dan Masi" className={styles.memberimg} />
          <p className={styles.subheader}> Daniel Masi</p>
          <p className={styles.membertitle}>Business Strategist and Project Manager</p>
          <p className={styles.description}>Brings 2+
            years of experience in strategy and project execution, guiding software projects from
            ideation to completion.</p>
        </div>

        <div className={styles.member}>
          <img src="/Images/Jess.jpeg" alt="Jessica Nzembi Gatura" className={styles.memberimg} />
          <p className={styles.subheader}> Jessica Nzembi Gatura</p>
          <p className={styles.membertitle}>Mobile Application Engineer</p>
          <p className={styles.description}>A mobile
            developer with 3+ years of experience, optimizing Daystar Academia apps for
            performance and usability.</p>
        </div>

        <div className={styles.member}>
          <img src="/Images/Maycy.jpeg" alt="Maycy Nolari" className={styles.memberimg} />
          <p className={styles.subheader}> Maycy Nolari</p>
          <p className={styles.membertitle}>UI UX and Graphics Designer</p>
          <p className={styles.description}>A UI/UX expert with 3+
            years of experience, creating intuitive and visually engaging interfaces.</p>
        </div>

        <div className={styles.member}>
          <img src="/Images/Prince.png" alt="Prince Benedict" className={styles.memberimg} />
          <p className={styles.subheader}>Prince Benedict</p>
          <p className={styles.membertitle}>Web Applications Engineer</p>
          <p className={styles.description}>A web developer with 2+
            years of experience, building high-performance and scalable applications.</p>
        </div>

      </div>
    </div>
    </Layout>
  );
};

export default About;