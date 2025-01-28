import { ModalProps } from "../type";

const PayModal = ({ isOpen, onClose, onSave }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add Pay Modal
          </h2>
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p>Specify your pay preferences here.</p>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="text-gray-500 border px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 px-4 py-2 rounded-lg"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
