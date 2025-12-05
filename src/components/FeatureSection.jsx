import { LuFilePlus, LuSend, LuShieldCheck, LuSunMoon } from "react-icons/lu";
import { PiCheckCircleThin } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <div className=" bg-[#0b1727] py-8">
     <div className="flex flex-col justify-center items-center py-6 space-y-4 w-full px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white leading-snug">
    Explore the Features Built
  </h2>

  <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed md:max-w-xl mx-auto">
    Key features that make assignment creation, submission, and evaluation
    smooth and easy.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto py-8">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    id: 1,
    title: "Create & Manage Assignments",
    description:
      "Users can create assignments with title, marks, difficulty, and due date.",
    icon: <LuFilePlus />,
    color: "#4f46e5",
    bgColor: "#4f46e522",
  },
  {
    id: 2,
    title: "Submit Assignments",
    description:
      "Submit Google Docs link with notes directly from the assignment page.",
    icon: <LuSend />,
    color: "#0284c7",
    bgColor: "#0284c722",
  },
  {
    id: 3,
    title: "Evaluate Submissions",
    description:
      "Teachers or friends can review submitted assignments and give marks & feedback.",
    icon: <PiCheckCircleThin />,
    color: "#16a34a",
    bgColor: "#16a34a22",
  },
  {
    id: 4,
    title: "Real-Time Progress Tracking",
    description:
      "Track your pending, completed, and graded assignments in real-time.",
    icon: <BsBarChart />,
    color: "#eab308",
    bgColor: "#eab30822",
  },
  {
    id: 5,
    title: "Secure Authentication",
    description: "JWT-based login system with protected private routes.",
    icon: <LuShieldCheck />,
    color: "#dc2626",
    bgColor: "#dc262622",
  },
  {
    id: 6,
    title: "Theme Customization",
    description:
      "Toggle between light & dark mode for a personalized experience.",
    icon: <LuSunMoon />,
    color: "#9333ea",
    bgColor: "#9333ea22",
  },
];

export default FeatureSection;
