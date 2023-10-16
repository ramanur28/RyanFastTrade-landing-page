import "../style/hero.css";
import bitcoin from "../assets/bitcoin.png";
import shine from "../assets/shine.png";

import { motion } from "framer-motion";

import { slideUp } from "../anim/anim";

const Hero = () => {
  const titleContent = "P2P Trading Solution";

  return (
    <div className="hero container" id="home">
      <div className="hero-title">
        {titleContent.split(" ").map((word, index) => {
          return (
            <span key={index}>
              <motion.h2
                initial={slideUp.initial}
                animate={slideUp.animate}
                custom={index}
              >
                {word}
              </motion.h2>
            </span>
          );
        })}
      </div>
      <a href="#" className="hero-button">
        Contact Us
      </a>
      <p className="hero-text">
        Withdraw Mata uang digital (Usdt,Busd,Btc,Bnb,Eth,Doge) Melalui Program
        P2P Binance. Bebas Biaya Transaksi untuk seluruh Bank Lokal di Indonesia
      </p>
      <img src={shine} alt="shine" className="shine" />
      <motion.img
        initial={slideUp.initial}
        animate={slideUp.animate}
        src={bitcoin}
        alt="bitcoin crypto image"
        className="bitcoin"
      />
    </div>
  );
};

export default Hero;
