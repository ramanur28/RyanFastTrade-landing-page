import "../style/portfolio.css";

import { motion, animate, useInView } from "framer-motion";
import { countAnim } from "../anim/anim";
import { useEffect, useState, useRef } from "react";

const Portfolio = () => {
  const [num1, changeNum1] = useState(0);
  const [num2, changeNum2] = useState(1);
  const target = useRef();
  const inView = useInView(target, { once: true });

  useEffect(() => {
    if (inView) {
      countAnim(99, changeNum1);
      countAnim(7595, changeNum2);
    }
  }, [inView]);

  return (
    <div className="portfolio container">
      <motion.div className="portfolio-header">
        <div className="counter">
          <h2 ref={target}>{num1}%</h2>
          <p>Tingkat Penyelesaian 30 hari</p>
        </div>
        <div className="counter">
          <h2 ref={target}>{num2}</h2>
          <p>Transaksi 30 Hari</p>
        </div>
      </motion.div>
      <div className="portfolio-items">
        <div className="items-wrapper">
          <div className="portfolio-item">
            <i className="fa-solid fa-thumbs-up"></i>
            <p className="text">Umpan Balik Yang Diterima</p>
            <p className="text">5075</p>
          </div>
          <div className="portfolio-item">
            <i className="fa-solid fa-credit-card"></i>
            <p className="text">Metode Pembayaran</p>
            <p className="text">5075</p>
          </div>
        </div>
        <div className="items-wrapper">
          <div className="portfolio-item">
            <i className="fa-solid fa-key"></i>
            <p className="text">Kata Sandi Dana</p>
            <p className="text">5075</p>
          </div>
          <div className="portfolio-item">
            <i className="fa-solid fa-star"></i>
            <p className="text">Pengikut</p>
            <br />
          </div>
        </div>
        <div className="items-wrapper">
          <div className="portfolio-item">
            <i className="fa-solid fa-lock"></i>
            <p className="text">Pusat Penghapusan Pembatasan</p>
            <p className="text">5075</p>
          </div>
          <div className="portfolio-item">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p className="text">Kata Sandi Dana</p>
            <p className="text">5075</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
