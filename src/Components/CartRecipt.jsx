import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { PDFExport } from '@progress/kendo-react-pdf';

function CartReceipt(props) {
  const { quantity, total } = props;
  const cartProduct = useSelector(state => state.cart);
  const prices = cartProduct.map(pro => pro.newPrice);
  const pdfExportComponent = useRef(null);

  const handleDownloadReceipt = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-5">
      <div className="px-3 py-5 w-80 border">
        <div>
          <h1 className="font-medium text-lg">Cart Total</h1>
        </div>
        <div className="py-2 border-b flex justify-between mt-2">
          <h1>Subtotal:</h1>
          <p>${total * quantity}</p>
        </div>
        <div className="py-2 border-b flex justify-between">
          <h1>Shipping:</h1>
          <p>Free</p>
        </div>
        <div className="py-2 border-b flex justify-between">
          <h1>Total:</h1>
          <p>${total * quantity}</p>
        </div>
        <div className="flex justify-center items-center mt-3">
          <button
            className="bg-[#DB4444] py-3 px-6 text-white rounded-md"
            onClick={handleDownloadReceipt}
          >
            Download Receipt
          </button>
        </div>
      </div>

      <PDFExport ref={pdfExportComponent}>
        <div className="pdf-receipt">
          {/* The content you want to include in the PDF goes here */}
          <h1>Receipt</h1>
          <p>Subtotal: ${total * quantity} </p>
          <p>Shipping: Free </p>
          <p>Total: ${total * quantity} </p>
        </div>
      </PDFExport>
    </div>
  );
}

export default CartReceipt;
