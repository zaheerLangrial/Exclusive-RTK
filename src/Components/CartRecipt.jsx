import React, { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { useSelector } from 'react-redux';

function CartReceipt(props) {
  const { quantity, total } = props;
  const pdfExportComponent = useRef(null);
  const subtotal = useSelector(state => state.subtotal)

  const handleDownloadReceipt = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-5">
      <div className="px-3 py-5 w-80 border">
      <PDFExport ref={pdfExportComponent}>
        <div>
          <h1 className="font-medium text-lg">Cart Total</h1>
        </div>
        <div className="py-2 border-b flex justify-between mt-2">
          <h1>Subtotal:</h1>
          <p>${subtotal}</p>
        </div>
        <div className="py-2 border-b flex justify-between">
          <h1>Shipping:</h1>
          <p>Free</p>
        </div>
        <div className="py-2 border-b flex justify-between">
          <h1>Total:</h1>
          <p>${subtotal}</p>
        </div>
        </PDFExport>
        <div className="flex justify-center items-center mt-3">
          <button
            className="bg-[#DB4444] py-3 px-6 text-white rounded-md"
            onClick={handleDownloadReceipt}
          >
            Download Receipt
          </button>
        </div>
      </div>
           
    </div>
  );
}

export default CartReceipt;
