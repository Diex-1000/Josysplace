// src/components/Policies.jsx
import { Clock } from "lucide-react";

export default function Policies() {
    return (
      <section className="bg-slate-200 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Policies</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment</h3>
            <div className="text-sm text-gray-800 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Currency</span>
                <span>US Dollar</span>
              </div>
              <div>
                <span className="font-medium">Accepted credit cards:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>American Express</li>
                  <li>Bancomer</li>
                  <li>Banamex</li>
                  <li>MasterCard (Canada)</li>
                  <li>MasterCard</li>
                  <li>Visa</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Cancellation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
          <li>No disturbing noises after 10 PM</li>
          <li>Minimum reservation age is 25 years old</li>
          <li>No party groups allowed</li>
        </ul>
          </div>
  
          {/* Check-in / Check-out */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Check-in / Check-out</h3>
            <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Clock className="text-gray-600" />
            <span className="text-gray-700">Check-in after 3:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-gray-600" />
            <span className="text-gray-700">Checkout before 11:00 AM</span>
          </div>
          <hr className="mb-4" />
        </div>
            <div className="text-sm text-gray-800 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Minimum age to register</span>
                <span>18</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Early checkout-fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Late checkout-fee</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  