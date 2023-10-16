import { useState } from "react";
import "../style/Question.css";
import { motion } from "framer-motion";
import { questionAnim } from "../anim/anim";

const Question = ({ ask, answer }) => {
  const [isActive, setActive] = useState(false);

  return (
    <motion.div
      className="question"
      onClick={() => {
        setActive(!isActive);
      }}
      initial={questionAnim.initial}
      animate={isActive ? "active" : "initial"}
      variants={questionAnim}
    >
      <p className="ask">{ask}</p>
      <p className="answer">{answer}</p>
    </motion.div>
  );
};

export default Question;
