const FAQcard = ({ faq }) => {
  const { answer, question } = faq;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow  bg-[rgb(11,23,39)] border my-1 border-b border-gray-900 text-white focus:bg-[#25235222] focus:text-secondary-content "
    >
      <div className=" font-bold text-[22px]  collapse-title   peer-checked:bg-secondary peer-checked:text-secondary-content focus:border-[#218bf4] border-b border-gray-700">
        {question}
      </div>
      <div className="collapse-content text-[19px] border-t border-gray-800">
       {answer}
      </div>
    </div>
  );
};

export default FAQcard;
