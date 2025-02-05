import { useState } from "react";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h2 className="text-lg font-semibold text-center">Transactions</h2>
      </div>

      {/* Tabs */}
      <div className="flex mt-4 ">
        <button
          className={`flex-1 text-center py-2 font-semibold ${
            activeTab === "transactions"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("transactions")}
        >
          My Transactions
        </button>
        <button
          className={`flex-1 text-center py-2 font-semibold ${
            activeTab === "promo"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("promo")}
        >
          Promo Code
        </button>
      </div>

      {/* Transactions List */}
      {activeTab === "transactions" && (
        <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800">STANDARD</h3>
            <span className="text-blue-600 font-bold">FREE</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Purchase date: 2022-04-20 13:17:05
          </p>
          <button className="w-full mt-3 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold">
            Invoice
          </button>
        </div>
      )}

      {/* Promo Code Section */}
      {activeTab === "promo" && (
        <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
          <p className="text-gray-700 font-semibold">
            Promo Code:{" "}
            <span className="text-blue-600 font-bold">MYPROMO1</span>
          </p>
          <ul className="mt-2 text-gray-500 text-sm space-y-1">
            <li>✅ Valid until 31 August 2022</li>
            <li>✅ Only applies to design category</li>
            <li>✅ Discounts $5</li>
          </ul>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default Transactions;
