import { useState } from "react";
import { ChevronRight, CircleCheck, ArrowLeft } from "lucide-react";
import PromoCodeModal from "./PromoCodeModal";

const planDetails = [
  { id: 1, text: "Limited range" },
  { id: 2, text: "Ads only appear 10 days" },
  { id: 3, text: "Capacity: 20 applicants" },
];

export default function CheckOut() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
        <button className="flex items-center mb-4 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">Checkout</h2>

        {/* Plan Details */}
        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">STANDARD</h3>
            <span className="text-blue-500 font-bold">FREE</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {planDetails.map((item) => (
              <li key={item.id} className="flex items-center">
                <CircleCheck className="w-4 h-4 text-green-500 mr-2" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Options */}
        <div className="space-y-2 mb-4">
          <div
            onClick={() => setIsPromoModalOpen(true)}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-xl cursor-pointer"
          >
            <span>Use Promo Code</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl cursor-pointer">
            <span>Payment Method</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <h3 className="font-semibold mb-2">Payment details</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Promote price</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span className="text-blue-500">${totalPrice}</span>
          </div>
        </div>

        {/* Pay Button */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Total Price</span>
          <span className="text-lg font-bold">${totalPrice}</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg">
          PAY
        </button>
      </div>

      {/* Promo Code Modal */}
      {isPromoModalOpen && (
        <PromoCodeModal onClose={() => setIsPromoModalOpen(false)} />
      )}
    </div>
  );
}
