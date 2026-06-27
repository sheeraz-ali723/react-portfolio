import React, { useState } from 'react'
const Contact = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
const [email, setEmail] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    const strongPassword =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

if (!strongPassword.test(password)){
setError(
"Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
);
return;
}

    // Check only in signup mode
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Clear error if passwords match
    setError('');

    // Proceed with form submission
    alert("Form submitted successfully!");
  setName('');
setEmail('');
setPassword('');
setConfirmPassword('');
setError('');

  };


  return (
    <div data-aos="fade-left" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-center text-slate-300 mb-8">
          {isLogin
            ? "Login to continue"
            : "Sign up and start your journey"}
        </p>

        {/* Form */}
<form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-800/70 text-white border border-slate-700 focus:outline-none focus:border-cyan-400"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-800/70 text-white border border-slate-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-800/70 text-white border border-slate-700 focus:outline-none focus:border-cyan-400"
          />
        {!isLogin && (
  <p className="text-slate-400 text-xs mt-1">
    Use 6+ characters with uppercase, lowercase, number & symbol.
  </p>
)}

          

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
               value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-800/70 text-white border border-slate-700 focus:outline-none focus:border-cyan-400"
              
            />
          )}
          {error && (
  <p className="text-red-400 text-sm font-medium">
    {error}
  </p>
)}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        {/* Toggle */}
        <div className="text-center mt-6">
          <p className="text-slate-300">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-cyan-400 font-semibold hover:text-cyan-300"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};



export default Contact

