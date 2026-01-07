import FAQcard from "./FAQcard";


const FAQSection = () => {
      return (
            <div className="py-10">
                  <div className="flex flex-col justify-center items-center text-center text-(--text) font-bold">
                        <h4 className="text-3xl md:text-4xl pb-3">Frequently Asked Questions</h4>
                        <p className="text-[17px] font-normal max-w-[400px]">will have some frequently asked questions about your applications features and uses</p>
                  </div>
                  <div className="max-w-6xl mx-auto py-10">
                        {
                              data.map(faq=><FAQcard key={faq.id} faq={faq}/>)
                        }
                  </div>
            </div>
      );
};

const data = [
  {
    "id": 1,
    "question": "What is the purpose of this assignment management platform?",
    "answer": "This platform allows users to create, submit, and evaluate assignments in an online group-study environment. It helps students collaborate and track their academic progress efficiently."
  },
  {
    "id": 2,
    "question": "How do I create a new assignment?",
    "answer": "Any logged-in user can create an assignment by providing a title, description, marks, difficulty level, thumbnail URL, and due date. The form includes a date picker and validation for all required fields."
  },
  {
    "id": 3,
    "question": "Can I submit assignments directly from the platform?",
    "answer": "Yes. Users can submit their assignments by providing a Google Docs link and an optional note. Every submission is stored as pending until evaluated by another user."
  },
  {
    "id": 4,
    "question": "How does the assignment evaluation process work?",
    "answer": "Users can view pending submissions and provide marks and feedback. The evaluator cannot evaluate their own submission, ensuring fairness. Once evaluated, the status changes to completed."
  },
  {
    "id": 5,
    "question": "Is my data secured on this platform?",
    "answer": "Yes. Firebase authentication is used for secure login and JWT-based authorization ensures that private routes and sensitive actions are protected. MongoDB credentials are securely stored using environment variables."
  },
  {
    "id": 6,
    "question": "Does this platform support different device sizes?",
    "answer": "Absolutely. The entire application is fully responsive and works smoothly on mobile, tablet, and desktop devices."
  }
]


export default FAQSection;