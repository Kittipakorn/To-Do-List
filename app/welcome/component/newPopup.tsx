import { useState } from "react";

export function Popup() {


    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-5 rounded-lg z-10">
        <h1 className="text-center">New Item</h1>
        <form className="flex flex-col gap-5">
            <label className="flex flex-col">
              Item Name:
              <input
                type="text"
                className="border"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </label>
            <label className="flex flex-col">
              Item Description:
              <input
                type="text"
                className="border"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                required
              />
            </label>
            <button type="submit">Add Item</button>
            <button type="button">
              Cancel
            </button>
          </form>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";

// interface ModalProps {
//   show: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
//       <div className="bg-white p-5 rounded-lg z-10">
//         {children}
//         <h1 className="text-center">Kasikorn Bank</h1>
//         <h1 className="text-center">กิตติปกรณ์ สีนาค</h1>
//       </div>
//     </div>
//   );
// };

// export default Modal;