"use client";
import { useCallback } from "react";
import { X } from "lucide-react";

type PropsTypes = {
  title: string;
  loadingText?: string;
};

type Props = {
  titles: PropsTypes;
  children: React.ReactNode | React.ReactNode[];
  onClose: () => void;
  open?: boolean;
  fullWidth?: boolean;
  customSize?: string;
};

export default function ModalComponent({
  titles: { title, loadingText },
  children,
  open = false,
  onClose,
  fullWidth = false,
  customSize,
}: Props) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-white rounded-2xl shadow-xl ${
            customSize ? customSize : fullWidth ? 'w-full' : 'max-w-[1200px]'
          } min-w-[80vw] md:min-w-[900px] max-h-[90vh] min-h-[300px] md:min-h-[460px] flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between py-5 px-6 border-b border-gray-100">
            <h1 className="font-bold text-[#2C2E7B] text-xl">{title}</h1>
            <button
              onClick={handleClose}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow max-h-[90vh] overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
