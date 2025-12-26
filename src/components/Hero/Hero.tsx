"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.scss";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.8 },
  },
};

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className={styles.title}>
              Discover And <br /> Create NFTs
            </motion.h1>

            <motion.p variants={itemVariants} className={styles.description}>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{" "}
              <strong className={styles.highlight}> $20 bonus.</strong>
            </motion.p>

            <motion.div variants={itemVariants} className={styles.buttonGroup}>
              <button className={`btn primary ${styles.heroBtn}`}>
                EXPLORE MORE
              </button>
              <button className={`btn outline ${styles.heroBtn}`}>
                CREATE NFT
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.statsGroup}>
              <div>
                <h3 className={styles.statValue}>430K+</h3>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div>
                <h3 className={styles.statValue}>159K+</h3>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div>
                <h3 className={styles.statValue}>87K+</h3>
                <span className={styles.statLabel}>Collections</span>
              </div>
            </motion.div>
          </motion.div>

          <div className={styles.rightColumn}>
            <motion.div
              className={styles.imageContainer}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={imageVariants}
                style={{ position: "relative", zIndex: 2 }}
              >
                <Image
                  src="/images/Hero_Header.png"
                  alt="NFT Hero Header"
                  width={600}
                  height={600}
                  className={styles.heroImage}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
