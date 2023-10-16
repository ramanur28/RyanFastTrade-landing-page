import "../style/Faq.css";
import Question from "./Question";
import data from "../assets/faq.json";

const Faq = () => {
  return (
    <div className="faq container">
      <h2 className="subtitle">FAQ</h2>
      {data.map((data) => {
        return <Question ask={data.ask} answer={data.answer} key={data.id} />;
      })}
    </div>
  );
};

export default Faq;
