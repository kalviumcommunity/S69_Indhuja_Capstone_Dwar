// components/DonorSignup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonorSignup = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    interests: [],
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'agreeToTerms') {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Handle interests checkboxes
        const updatedInterests = [...formData.interests];
        if (checked) {
          updatedInterests.push(value);
        } else {
          const index = updatedInterests.indexOf(value);
          if (index > -1) {
            updatedInterests.splice(index, 1);
          }
        }
        setFormData({ ...formData, interests: updatedInterests });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/donor-profile", { state: { donorData: formData } });
    }, 1500);
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  // Handle modal close
  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  
  // Password validation
  const passwordsMatch = formData.password === formData.confirmPassword;
  const passwordIsValid = formData.password.length >= 8;

  return (
    <div 
      id="modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <div 
        className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-800 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-2 text-white text-center">
          Join as a Donor
        </h2>
        <p className="text-gray-400 text-center mb-6">Make a difference with your contributions</p>
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-green-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-12 h-1 ${step >= 2 ? 'bg-green-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-green-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-12 h-1 ${step >= 3 ? 'bg-green-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-green-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 text-white border ${!formData.password || passwordIsValid ? 'border-gray-700' : 'border-red-500'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="••••••••"
                  required
                />
                {formData.password && !passwordIsValid && (
                  <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 text-white border ${!formData.confirmPassword || passwordsMatch ? 'border-gray-700' : 'border-red-500'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="••••••••"
                  required
                />
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                )}
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.name || !formData.email || !passwordIsValid || !passwordsMatch}
                  className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 2: Contact Information */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="City, Country"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Areas of Interest</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Education', 'Healthcare', 'Environment', 'Disaster Relief', 'Children', 'Elderly'].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={interest}
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
                      />
                      <label htmlFor={interest} className="ml-2 block text-sm text-gray-300">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.phone || !formData.location}
                  className="w-1/2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Terms and Submit */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-white font-medium mb-2">Account Summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">Name:</div>
                  <div className="text-white">{formData.name}</div>
                  <div className="text-gray-400">Email:</div>
                  <div className="text-white">{formData.email}</div>
                  <div className="text-gray-400">Phone:</div>
                  <div className="text-white">{formData.phone}</div>
                  <div className="text-gray-400">Location:</div>
                  <div className="text-white">{formData.location}</div>
                  <div className="text-gray-400">Interests:</div>
                  <div className="text-white">{formData.interests.join(', ') || 'None selected'}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <input
                  id="terms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-600 rounded bg-gray-700 mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the <a href="#" className="text-green-400 hover:text-green-300">Terms of Service</a> and <a href="#" className="text-green-400 hover:text-green-300">Privacy Policy</a>
                </label>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.agreeToTerms || isLoading}
                  className="w-1/2 flex justify-center items-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
        
        {/* Sign in link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={onClose}
            className="text-green-400 hover:text-green-300 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default DonorSignup;
