'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

  function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              We are always happy to hear from you, so if you want to find out more about our service, 
              please contact us using the details below or fill in the form and someone will be in touch 
              as soon as possible.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">DB UPVC & LOCKS</h2>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Address:</span><br />
                    2 Hadlow Close, Greenlands,<br />
                    Redditch, Worcestershire, B98 7FU
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <div>
                    <span className="font-medium">Email:</span>{' '}
                    <a 
                      href="mailto:info@upvcandlockrepairs.co.uk" 
                      className="hover:text-blue-600 transition-colors"
                    >
                      info@upvcandlockrepairs.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <div>
                    <span className="font-medium">Tel:</span>{' '}
                    <a 
                      href="tel:07522293432" 
                      className="hover:text-blue-600 transition-colors"
                    >
                      07522 293432
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.7772765272393!2d-1.9494400000000001!3d52.3075800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870955e8f9a3beb%3A0x9f5f5f5f5f5f5f5f!2s2%20Hadlow%20Close%2C%20Redditch%20B98%207FU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Location map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact