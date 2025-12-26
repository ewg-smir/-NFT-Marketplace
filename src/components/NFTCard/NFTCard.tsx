"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NFTItem } from "@/lib/store/nftSlice";
import styles from "./NFTCard.module.scss"; 

const NFTCard = ({ item }: { item: NFTItem }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = item.endTime - now;

      if (distance < 0) {
        setTimeLeft("Expired");
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [item.endTime]);

  return (
    <motion.div
      className={styles.card} 
      whileHover={{ y: -5 }} 
    >
      <div className={styles.imageContainer}>
        <Image src={item.image} alt={item.name} fill className={styles.image} />
        <div className={styles.timer}>{timeLeft}</div>
      </div>
      <h3 className={styles.title}>{item.name}</h3>
      <div className={styles.info}>
        <div className={styles.bid}>
          <span>Current bid</span>
          <span className={styles.price}>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M6 0L0 10L6 18L12 10L6 0Z" fill="#141416" />
            </svg>
            {item.price} ETH
          </span>
        </div>
        <button className={styles.bidButton}>PLACE BID</button>
      </div>
    </motion.div>
  );
};

export default NFTCard;
