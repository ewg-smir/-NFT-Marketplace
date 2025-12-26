"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = ["Discover", "Creators", "Sell", "Stats"];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.leftGroup}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <Image
                src="/images/Logo.png"
                alt="DiveSea Logo"
                width={40}
                height={40}
                className={styles.logoImage}
                priority
              />
              <span className={styles.logoText}>DiveSea</span>
            </Link>

            <nav className={styles.desktopNav}>
              {navItems.map((text, index) => (
                <Link
                  key={text}
                  href="#"
                  className={`${styles.navLink} ${index === 0 ? styles.active : ""}`}
                >
                  {text}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <button className={`btn primary ${styles.connectBtnDesktop}`}>
              CONNECT WALLET
            </button>
            {!isMobileMenuOpen && (
              <button className={styles.mobileToggleBtn} onClick={toggleMenu}>
                <FiMenu size={24} color="#141416" />
              </button>
            )}
          </div>
        </div>
      </header>
      <div
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <Image
              src="/images/Logo.png"
              alt="DiveSea Logo"
              width={40}
              height={40}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>DiveSea</span>
          </Link>
          <button className={styles.mobileCloseBtn} onClick={closeMenu}>
            <FiX size={24} color="#141416" />
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          <nav className={styles.mobileNavLinks}>
            {navItems.map((text) => (
              <Link key={text} href="#" onClick={closeMenu}>
                {text}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileSocials}>
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div className={styles.mobileMenuBottom}>
          <button className={`btn primary ${styles.connectBtnMobile}`}>
            CONNECT WALLET
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
