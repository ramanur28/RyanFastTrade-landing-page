import "../style/About.css";

import { motion } from "framer-motion";
import { fadeIn, slideL, slideR } from "../anim/anim";

const About = () => {
  return (
    <div className="about container">
      <div className="content1">
        <motion.h2
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          className="about-title"
        >
          <span>Verified</span> Merchant
        </motion.h2>
        <motion.p
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          className="about-lead"
        >
          P2P On Binance
        </motion.p>
      </div>
      <div className="content2">
        <motion.p
          className="text1"
          initial={slideR.initial}
          whileInView={slideR.animate}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </motion.p>
        <motion.p
          initial={slideL.initial}
          whileInView={slideL.animate}
          className="text2"
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
