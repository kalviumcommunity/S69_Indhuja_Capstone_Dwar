import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrgSignup = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Information
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    
    // Organization Details
    orgType: "",
    regNumber: "",
    taxExemptStatus: "",
    foundedYear: "",
    mission: "",
    areasOfFocus: [],
    registrationDoc: null,
    
    // Location Information
    country: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    
    // Contact Information
    phone: "",
    website: "",
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: ""
    },
    
    // Contact Person
    contactPerson: {
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      phone: ""
    },
    
    // Banking Information
    bankingInfo: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      routingNumber: "",
      swiftCode: ""
    },
    
    // Media
    logo: null,
    coverPhoto: null,
    registrationProof: null,
    galleryImages: [],
    
    // Terms
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    // Handle nested objects (e.g., socialMedia.facebook, contactPerson.firstName)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      
      if (type === 'checkbox') {
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: checked
          }
        });
      } else if (type === 'file') {
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: files[0]
          }
        });
      } else {
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: value
          }
        });
      }
    } else {
      // Handle regular fields
      if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
      } else if (type === 'file') {
        if (name === 'galleryImages') {
          // Handle multiple files for gallery
          const imageFiles = Array.from(files);
          setFormData({ ...formData, [name]: [...formData.galleryImages, ...imageFiles] });
        } else {
          setFormData({ ...formData, [name]: files[0] });
        }
      } else if (name === 'areasOfFocus') {
        // Handle multi-select for areas of focus
        const options = e.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedValues.push(options[i].value);
          }
        }
        setFormData({ ...formData, [name]: selectedValues });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/org-profile", { state: { orgData: formData } });
    }, 1500);
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const removeGalleryImage = (index) => {
    const updatedGallery = [...formData.galleryImages];
    updatedGallery.splice(index, 1);
    setFormData({ ...formData, galleryImages: updatedGallery });
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
  
  // Organization types
  const orgTypes = [
    "Nonprofit Organization",
    "Educational Institution",
    "Healthcare Provider",
    "Religious Organization",
    "Community Group",
    "Foundation",
    "Social Enterprise",
    "Charity",
    "NGO",
    "Government Agency",
    "International Organization",
    "Arts & Culture Organization",
    "Environmental Organization",
    "Human Rights Organization",
    "Other"
  ];
  

  
  // Areas of focus
  const areasOfFocus = [
    "Education",
    "Health",
    "Poverty Alleviation",
    "Environment",
    "Human Rights",
    "Disaster Relief",
    "Arts & Culture",
    "Animal Welfare",
    "Community Development",
    "Children & Youth",
    "Women & Girls",
    "Elderly Care",
    "Disability Services",
    "Refugee Support",
    "Food Security",
    "Water & Sanitation",
    "Economic Development",
    "Technology",
    "Sports & Recreation",
    "Religious Activities"
  ];
  
  // Tax exempt status options
  const taxExemptOptions = [
    "501(c)(3) - Public Charity",
    "501(c)(4) - Social Welfare",
    "501(c)(7) - Social Club",
    "Not Tax Exempt",
    "International Equivalent",
    "Pending",
    "Other"
  ];

  return (
    <div 
      id="modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <div 
        className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-800 max-h-[90vh] overflow-y-auto animate-fadeIn"
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
          Organization Registration
        </h2>
        <p className="text-gray-400 text-center mb-6">Partner with us to receive donations and create impact</p>
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-8 h-1 ${step >= 2 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-8 h-1 ${step >= 3 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-8 h-1 ${step >= 4 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 4 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-8 h-1 ${step >= 5 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 5 ? 'bg-purple-500' : 'bg-gray-600'} transition-colors duration-300`}></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Account Information */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Organization Name</label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Organization Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Official Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="org@example.com"
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
                  className={`w-full bg-gray-800 text-white border ${!formData.password || passwordIsValid ? 'border-gray-700' : 'border-red-500'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
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
                  className={`w-full bg-gray-800 text-white border ${!formData.confirmPassword || passwordsMatch ? 'border-gray-700' : 'border-red-500'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
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
                  disabled={!formData.orgName || !formData.email || !passwordIsValid || !passwordsMatch}
                  className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 2: Organization Details */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Organization Type</label>
                <select
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="" disabled>Select organization type</option>
                  {orgTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Registration Number</label>
                  <input
                    type="text"
                    name="regNumber"
                    value={formData.regNumber}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Registration/Tax ID"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Tax Exempt Status</label>
                  <select
                    name="taxExemptStatus"
                    value={formData.taxExemptStatus}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="" disabled>Select status</option>
                    {taxExemptOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Founded Year</label>
                  <input
                    type="number"
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    min="1800"
                    max={new Date().getFullYear()}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="YYYY"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Registration Document</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="registrationDoc"
                      onChange={handleChange}
                      className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <div className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span className="text-gray-400 truncate">
                        {formData.registrationDoc ? formData.registrationDoc.name : "Upload registration certificate/document"}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Upload your organization's registration certificate or legal document (PDF, DOC, or image)</p>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Mission Statement</label>
                <textarea
                  name="mission"
                  value={formData.mission}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="3"
                  placeholder="Describe your organization's mission and goals"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Areas of Focus</label>
                <select
                  name="areasOfFocus"
                  multiple
                  value={formData.areasOfFocus}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  size="5"
                >
                  {areasOfFocus.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <p className="text-gray-400 text-xs mt-1">Hold Ctrl (or Cmd) to select multiple areas</p>
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
                  disabled={!formData.orgType || !formData.regNumber || !formData.mission || !formData.registrationDoc}
                  className="w-1/2 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Location Information */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Country"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">State/Province</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="State/Province"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Postal/ZIP Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Postal/ZIP Code"
                  required
                />
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
                  disabled={!formData.country || !formData.address || !formData.city || !formData.state || !formData.postalCode}
                  className="w-1/2 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Organization Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://www.example.org"
                />
              </div>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h3 className="text-white text-lg font-medium mb-3">Social Media Profiles</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Facebook</label>
                    <input
                      type="url"
                      name="socialMedia.facebook"
                      value={formData.socialMedia.facebook}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://facebook.com/yourorg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Twitter</label>
                    <input
                      type="url"
                      name="socialMedia.twitter"
                      value={formData.socialMedia.twitter}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://twitter.com/yourorg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Instagram</label>
                    <input
                      type="url"
                      name="socialMedia.instagram"
                      value={formData.socialMedia.instagram}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://instagram.com/yourorg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">LinkedIn</label>
                    <input
                      type="url"
                      name="socialMedia.linkedin"
                      value={formData.socialMedia.linkedin}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://linkedin.com/company/yourorg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h3 className="text-white text-lg font-medium mb-3">Primary Contact Person</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="contactPerson.firstName"
                      value={formData.contactPerson.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="contactPerson.lastName"
                      value={formData.contactPerson.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Position/Title</label>
                  <input
                    type="text"
                    name="contactPerson.position"
                    value={formData.contactPerson.position}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Position/Title"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="contactPerson.email"
                      value={formData.contactPerson.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="contact@example.com"
                    />
                    <p className="text-gray-400 text-xs mt-1">Leave blank if same as organization email</p>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="contactPerson.phone"
                      value={formData.contactPerson.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-gray-400 text-xs mt-1">Leave blank if same as organization phone</p>
                  </div>
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
                  disabled={!formData.phone || !formData.contactPerson.firstName || !formData.contactPerson.lastName || !formData.contactPerson.position}
                  className="w-1/2 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 5: Banking Information and Media */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-gray-700 pb-4 mb-4">
                <h3 className="text-white text-lg font-medium mb-3">Banking Information</h3>
                <p className="text-gray-400 text-sm mb-4">This information will be used to process donations to your organization</p>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Account Holder Name</label>
                  <input
                    type="text"
                    name="bankingInfo.accountName"
                    value={formData.bankingInfo.accountName}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Organization Name as on Bank Account"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Bank Name</label>
                    <input
                      type="text"
                      name="bankingInfo.bankName"
                      value={formData.bankingInfo.bankName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Bank Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Account Number</label>
                    <input
                      type="text"
                      name="bankingInfo.accountNumber"
                      value={formData.bankingInfo.accountNumber}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Account Number"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Routing Number</label>
                    <input
                      type="text"
                      name="bankingInfo.routingNumber"
                      value={formData.bankingInfo.routingNumber}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Routing/Sort Code"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">SWIFT/BIC Code</label>
                    <input
                      type="text"
                      name="bankingInfo.swiftCode"
                      value={formData.bankingInfo.swiftCode}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="For International Transfers"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Organization Media</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Organization Logo</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="pt-1 text-sm text-gray-400">
                          {formData.logo ? formData.logo.name : "Upload a logo"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        name="logo"
                        onChange={handleChange}
                        className="opacity-0" 
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Cover Photo (Optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="pt-1 text-sm text-gray-400">
                          {formData.coverPhoto ? formData.coverPhoto.name : "Upload a cover photo"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        name="coverPhoto"
                        onChange={handleChange}
                        className="opacity-0" 
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Registration Proof (Optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="pt-1 text-sm text-gray-400">
                          {formData.registrationProof ? formData.registrationProof.name : "Upload registration proof"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        name="registrationProof"
                        onChange={handleChange}
                        className="opacity-0" 
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </label>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Upload additional registration documents or certificates (PDF, DOC, or image)</p>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Organization Gallery (Optional)</label>
                  <div className="flex items-center justify-center w-full mb-3">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="pt-1 text-sm text-gray-400">
                          Add images to your organization gallery
                        </p>
                      </div>
                      <input 
                        type="file" 
                        name="galleryImages"
                        onChange={handleChange}
                        className="opacity-0" 
                        accept="image/*"
                        multiple
                      />
                    </label>
                  </div>
                  
                  {/* Gallery preview */}
                  {formData.galleryImages.length > 0 && (
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Selected Images ({formData.galleryImages.length})</p>
                      <div className="grid grid-cols-3 gap-2">
                        {formData.galleryImages.map((image, index) => (
                          <div key={index} className="relative group">
                            <div className="h-20 bg-gray-700 rounded-lg overflow-hidden">
                              <img 
                                src={URL.createObjectURL(image)} 
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-gray-400 text-xs mt-1">Upload images of your organization's work, events, or facilities</p>
                </div>
              </div>
              
              <div className="flex items-start mt-6">
                <input
                  id="terms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700 mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                </label>
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
                  type="submit"
                  disabled={!formData.bankingInfo.accountName || !formData.bankingInfo.bankName || !formData.bankingInfo.accountNumber || !formData.bankingInfo.routingNumber || !formData.agreeToTerms || isLoading}
                  className="w-1/2 flex justify-center items-center px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </>
                  ) : (
                    "Register Organization"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
        
        {/* Sign in link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already registered?{" "}
          <span
            onClick={onClose}
            className="text-purple-400 hover:text-purple-300 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrgSignup;
