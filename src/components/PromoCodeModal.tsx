import { useState } from "react";
import { X } from "lucide-react";

interface PromoCodeModalProps {
  onClose: () => void;
  applyDiscount: (discount: number) => void;
}

export default function PromoCodeModal({
  onClose,
  applyDiscount,
}: PromoCodeModalProps) {
  const [selectedCode, setSelectedCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplyCode = () => {
    if (selectedCode === "DISCOUNT10") {
      applyDiscount(10);
      onClose();
    } else if (selectedCode === "SALE20") {
      applyDiscount(20);
      onClose();
    } else {
      setErrorMessage("Invalid promo code.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">💳</span>
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold">Promo Code</h2>
        <p className="text-center text-gray-500 text-sm">
          Enter the promo code to get attractive discounts
        </p>

        <div className="mt-4">
          <select
            value={selectedCode}
            onChange={(e) => {
              setSelectedCode(e.target.value);
              setErrorMessage(""); // Clear error on change
            }}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
          >
            <option value="">Select Promo Code</option>
            <option value="DISCOUNT10">DISCOUNT10</option>
            <option value="SALE20">SALE20</option>
          </select>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <button
          onClick={handleApplyCode}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Code
        </button>
      </div>
    </div>
  );
}
