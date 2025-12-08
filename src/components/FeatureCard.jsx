const FeatureCard = ({ feature }) => {
  const { title, description, icon, color, bgColor } = feature;
  return (
    <div className={`   flex flex-col items-center gap-6 text-white text-center shadow-xl border border-[#25235222] hover:bg-[#25235222] hover:shadow-2xl p-6   transition-transform duration-300 hover:translate-y-1`}>
      <div className={`text-5xl p-4 rounded`}   style={{
    backgroundColor: bgColor,
    color: color
  }}>{icon}</div>
      <div>
            <h3 className="text-xl font-bold leading-tight py-2">{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
