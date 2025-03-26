const LoginModal = ({ onClose }) => {
  // Handle modal close
  const handleClose = (e) => {
    // Close modal when clicking the close button or overlay
    if (e.target.id === "modal-overlay" || e.target.tagName === "BUTTON") {
      onClose(); // Call onClose to close the modal
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Log in to your Account</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Log In
          </button>
        </form>

        {/* Signup Link - Just close the modal */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <span
            onClick={onClose} // Just close the modal on Sign up click
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
