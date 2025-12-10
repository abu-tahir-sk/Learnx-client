
const Register = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-[430px] mx-auto bg-white rounded-2xl shadow-lg p-6">
      {/* header title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">Register now</h2>
      </div>      
       
      
      {/* forms */}
      <form className="space-y-4">
        <input className="w-full p-3 border border-gray-400 rounded outline-none focus:border-blue-400 placeholder-gray-500" type="text" placeholder="Name" name="name" />
        <input className="w-full p-3 border border-gray-400 rounded outline-none focus:border-blue-400 placeholder-gray-500" type="url" placeholder="photo URL" name="name" />
        <input className="w-full p-3 border border-gray-400 rounded outline-none focus:border-blue-400 placeholder-gray-500" type="email" placeholder="Email" name="email" />
        <input className="w-full p-3 border border-gray-400 rounded outline-none focus:border-blue-400 placeholder-gray-500" type="password" name="password" placeholder="password" id="" />

        <button className="w-full p-3 bg-gradient-to-r from-blue-300 via-cyan-500  to-cyan-300 text-white text-lg font-semibold">Submit</button>
        <p className="text-center">Already have an account <a href="#"></a>login </p>
      </form>
    </div>
    </div>
  );
};

export default Register;