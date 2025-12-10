import { useTheme } from "../context/ThemeContext";

const FAQcard = ({ faq }) => {
  const { answer, question } = faq;
  const {theme} = useTheme()
  return (
    <div
      tabIndex={0}
      className={`collapse collapse-arrow   my-1 inter text-(--text)   ${theme === "light" ? "border-b  border-gray-200" : "bg-[rgb(11,23,39)] border-b  border-gray-200  focus:text-secondary-content focus:bg-[#25235222]"} `}
    >
      <div className={`font-bold text-[22px]  collapse-title   peer-checked:bg-secondary peer-checked:text-secondary-content focus:border-[#218bf4] ${theme === "light" ? "border-b border-gray-50" : "border-b border-gray-600"} `}>
        {question}
      </div>
      <div className="collapse-content text-[19px] border-t border-gray-800">
       {answer}
      </div>
    </div>
  );
};

export default FAQcard;
