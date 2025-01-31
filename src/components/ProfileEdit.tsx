import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ellipse } from "../assets";

const ProfileEdit = () => {
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Zaire Torff Dandelia",
    email: "Ztorff@gmail.com",
    jobTitle: "UI/UX Designer",
    dateOfBirth: "17 August 2000",
    gender: "Female",
    phoneNumber: "+6287609876789",
    aboutMe:
      "I'm Oluwasegun Adebayo, a Software Engineer based in Kono, Sierraleone. I'm passionate about building innovative and user-friendly web applications. I love the challenge of turning ideas into functional code and seeing the positive impact it can have on people's lives.",
    profileImage: ellipse,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (section: string) => {
    if (section === "about") setIsEditingAbout(false);
    if (section === "personal") setIsEditingPersonal(false);
    console.log("Saved Profile:", profile);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <div className="px-4 py-3 border-b border-gray-200">
        <button
          className="text-gray-600 text-start lg:text-lg"
          onClick={() => navigate("/profile")}
        >
          &larr;
        </button>
        <h1 className="text-lg font-semibold text-gray-800 text-center">
          Edit Profile
        </h1>
      </div>
      <div className="px-4 py-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-gray-700 font-semibold">Photo and about me</h2>
            <button
              className="text-sm text-blue-600 hover:underline flex items-center gap-x-1"
              onClick={() => setIsEditingAbout(!isEditingAbout)}
            >
              {isEditingAbout ? <X size={16} /> : <Pencil size={16} />}{" "}
              {isEditingAbout ? "Cancel" : "Edit"}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer">
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-14 h-14 rounded-full border"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </label>
            <p className="text-base text-gray-700">
              Make sure the face is clearly visible, front and neatly dressed
            </p>
          </div>
          <p className="mt-5 font-semibold">About Me</p>
          {isEditingAbout ? (
            <textarea
              name="aboutMe"
              value={profile.aboutMe}
              onChange={handleChange}
              className="text-sm text-gray-600 border p-2 mt-3 w-full rounded-lg h-24 outline-0"
            />
          ) : (
            <p className="text-sm text-gray-600">{profile.aboutMe}</p>
          )}
        </div>

        {isEditingAbout && (
          <div className="flex justify-end">
            <button
              onClick={() => handleSave("about")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 mt-2"
            >
              <Check size={16} /> Save
            </button>
          </div>
        )}
      </div>

      {/* Personal Data Section */}
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-700 font-semibold">Personal data</h2>
          <button
            className="text-sm text-blue-600 hover:underline flex items-center gap-x-1"
            onClick={() => setIsEditingPersonal(!isEditingPersonal)}
          >
            {isEditingPersonal ? <X size={16} /> : <Pencil size={16} />}{" "}
            {isEditingPersonal ? "Cancel" : "Edit"}
          </button>
        </div>
        <div className="text-sm text-gray-700 space-y-4">
          {Object.entries(profile).map(([key, value]) =>
            key !== "profileImage" && key !== "aboutMe" ? (
              <div key={key}>
                <div className="font-medium">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </div>
                <div>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="border p-2 w-full mt-1 rounded-md"
                    />
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
        {isEditingPersonal && (
          <div className="flex justify-end">
            <button
              onClick={() => handleSave("personal")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 mt-7"
            >
              <Check size={16} /> Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileEdit;
