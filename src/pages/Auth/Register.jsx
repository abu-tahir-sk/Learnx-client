
const Register = () => {
  return (
    <div className="w-[430px] bg-white rounded-2xl shadow-lg">
      {/* header title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">Register </h2>
      </div>
      {/* tab control */}
      <div className="relative flex h-12 mb-6 border border-gray-300 overflow-hidden">
        <button className="text-lg font-medium transition-all  z-10 text-white">register</button>
        
        <div className="absolute top-0 h-full rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-200"></div>
      </div>
      {/* forms */}
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" name="password" placeholder="password" id="" />

        <button>Submit</button>
        <p>Already have an account <a href="#"></a>login </p>
      </form>
    </div>
  );
};

export default Register;