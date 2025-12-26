"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Create and Sell NFTs</h2>
              <p className={styles.ctaDescription}>
                World&apos;s Largest NFT Place
              </p>
              <div className={styles.buttonGroup}>
                <button className={`btn ${styles.exploreBtn}`}>
                  Explore More
                </button>
                <button className={`btn ${styles.sellBtn}`}>
                  Sell Artwork
                </button>
              </div>
            </div>
            <div className={styles.ctaImageWrapper}>
              <Image
                src="/images/Group.png"
                alt="Footer Art"
                fill
                className={styles.ctaImage}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/Logo.png"
              alt="DiveSea"
              width={32}
              height={32}
              className={styles.logoImage}
            />
            <span className={styles.logoText}>DiveSea</span>
          </div>

          <nav className={styles.nav}>
            {["Privacy Policy", "Term & Conditions", "About Us", "Contact"].map(
              (item) => (
                <Link key={item} href="#" className={styles.navLink}>
                  {item}
                </Link>
              )
            )}
          </nav>

          <div className={styles.divider}></div>

          <div className={styles.copyright}>
            © 2023{" "}
            <span className={styles.mobileCopyright}>
              DiveSea All Rights Reserved.
            </span>
          </div>

          <div className={styles.socials}>
            {[FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter].map(
              (Icon, idx) => (
                <a key={idx} href="#" className={styles.socialLink}>
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
