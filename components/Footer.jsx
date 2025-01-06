'use client'

import { useState } from 'react'

export function Footer() {
  const [agreed, setAgreed] = useState(false)

  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">DB UPVC and Lock Repairs Redditch</h3>
            <div className="space-y-2">
              <p>Address:</p>
              <p>2 Hadlow Close, Greenlands</p>
              <p>Redditch, Worcestershire, B98 7FU</p>
              <p className="mt-4">Email: info@upvcandlockrepairs.co.uk</p>
              <p>Tel: 07522 293432</p>
              <div className="mt-4">
                <h4 className="font-semibold">Opening hours:</h4>
                <p>Mon - Thurs 9:00am to 4:30pm</p>
                <p>Closed Friday, Saturday and Sunday</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send an Enquiry</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telephone"
                  className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Enquiry"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded border-gray-500"
                />
                <label htmlFor="privacy" className="text-sm">
                  If you agree please tick the box.
                </label>
              </div>
              <button
                type="submit"
                disabled={!agreed}
                className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>
            Copyright © 2024 DB UPVC & Locks, All Rights Reserved | Privacy Policy | Web Design Redditch by Fusion Creative Redditch
          </p>
        </div>
      </div>
    </footer>
  )
}

