const OrgSignup = ({ onClose, setCurrentModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Organization Registration</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Organization Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-gray-700">Official Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-gray-700">Website</label>
            <input type="url" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700">Registration Number</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-gray-700">Mission Statement</label>
            <textarea className="w-full border rounded px-3 py-2" rows="4"></textarea>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Create Organization Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => setCurrentModal("login")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrgSignup;
