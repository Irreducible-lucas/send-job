const SignUpStepThree = () => (
  <div className="text-center">
    <h2 className="mb-2 text-2xl font-bold text-gray-800">
      Welcome to Untitled!
    </h2>
    <p className="text-sm text-gray-600">You're all set up. Start exploring!</p>
    <div className="w-full h-40 mt-4">
      {" "}
      {/* Updated width to full and increased height */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YouTube video link
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <button
      type="button"
      className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
      onClick={() => alert("Form submitted!")}
    >
      Get Started
    </button>
  </div>
);

export default SignUpStepThree;
