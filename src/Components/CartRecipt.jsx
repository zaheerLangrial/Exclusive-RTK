import React, { useRef, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";

function CartReceipt() {
  const pdfExportComponent = useRef(null);
  const cartProduct = useSelector((state) => state.cart);
  var subTotal = 0;
  if (cartProduct) {
    for (let x of cartProduct) {
      subTotal += x.newPrice * x.quantity;
    }
  }

  const handleDownloadReceipt = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div className=" w-[1170px] mx-auto py-5">
      <div className="px-6 w-[470px] h-[324px] border border-black">
        <PDFExport ref={pdfExportComponent}>
          <div className="mt-8 text-base">
            <h1 className="font-medium text-lg">Cart Total</h1>
          </div>
          <div className="pb-4 border-b flex justify-between mt-6">
            <h1>Subtotal:</h1>
            <p>${subTotal}</p>
          </div>
          <div className="py-4 border-b flex justify-between">
            <h1>Shipping:</h1>
            <p>Free</p>
          </div>
          <div className="py-4 flex justify-between">
            <h1>Total:</h1>
            <p>${subTotal}</p>
          </div>
        </PDFExport>
        <div className="flex justify-center items-center">
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
