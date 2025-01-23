import React, { useState } from "react";

const VerificationCode: FC<{ onVerify: () => void }> = ({ onVerify }) => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);

  const handleInputChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        Verify your email
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter the verification code we sent to your email.
      </p>
      <div className="flex justify-center space-x-2 mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-lg"
          />
        ))}
      </div>
      <button
        type="button"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
        onClick={onVerify}
      >
        Verify
      </button>
    </div>
  );
};

export default VerificationCode;
