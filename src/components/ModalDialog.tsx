import { ModalProps } from "../type";

const ModalDialog = ({
  isOpen,
  onClose,
  onSave,
  children,
  onAddAnother,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {children}
        <div className="flex justify-end mt-10 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg"
          >
            Cancel
          </button>
          {onAddAnother && (
            <button
              onClick={onAddAnother}
              className="px-4 py-2 text-sm text-green-600 bg-green-100 rounded-lg"
            >
              Add Another and Save
            </button>
          )}
          <button
            onClick={onSave}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
