"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNFTs } from "@/lib/store/nftSlice";
import { RootState, AppDispatch } from "@/lib/store/store";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import NFTCard from "../NFTCard/NFTCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./SliderSection.module.scss";

const SliderSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.nfts);

  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const x = useMotionValue(0);

  const [constraintWidth, setConstraintWidth] = useState(0);

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const trackWidth = innerRef.current.scrollWidth;

      const maxDrag = trackWidth - carouselWidth;

      setConstraintWidth(Math.min(0, -maxDrag));
    }
  }, [items]);

  const handleScroll = (direction: "left" | "right") => {
    const currentX = x.get();
    const cardStride = 304;

    let newX;
    if (direction === "left") {
      newX = Math.min(currentX + cardStride, 0);
    } else {
      newX = Math.max(currentX - cardStride, constraintWidth);
    }

    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
    });
    x.set(newX);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Weekly - Top NFT</h2>

        <div ref={carouselRef} className={styles.carouselContainer}>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : (
            <motion.div
              ref={innerRef}
              drag="x"
              dragConstraints={{ right: 0, left: constraintWidth }}
              animate={controls}
              className={styles.innerCarousel}
              style={{ x }}
              whileTap={{ cursor: "grabbing" }}
            >
              {items.map((item) => (
                <NFTCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </div>

        <div className={styles.navigation}>
          <div className={styles.navButtons}>
            <button
              onClick={() => handleScroll("left")}
              className={styles.navButton}
            >
              <FaArrowLeft color="#141416" />
            </button>
            <div className={styles.divider}></div>
            <button
              onClick={() => handleScroll("right")}
              className={styles.navButton}
            >
              <FaArrowRight color="#141416" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SliderSection;
