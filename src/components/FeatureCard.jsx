import { useTheme } from "../context/ThemeContext";

const FeatureCard = ({ feature }) => {
  const { title, description, icon, color, bgColor } = feature;
  const { theme } = useTheme();
  return (
    <div
      className={`   flex flex-col items-center gap-6  text-center shadow-xl border  p-6 text-(--text)  hover:shadow-2xl ${theme === "light" ? " hover:bg-white/80 border-gray-100 " : " hover:bg-[#25235222] border-[#25235222]"} transition-transform duration-300 hover:translate-y-1`}
    >
      <div
        className={`text-5xl p-4 rounded`}
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold leading-tight py-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
