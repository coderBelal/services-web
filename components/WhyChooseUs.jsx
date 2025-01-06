import { Shield, PhoneCall, Clock, CheckCircle } from 'lucide-react'

export function WhyChooseUs() {
  const benefits = [
    {
      icon: PhoneCall,
      title: 'No Call Out Charge',
      description: 'Free initial consultation and assessment'
    },
    {
      icon: Shield,
      title: 'Fully Insured Works',
      description: 'Complete peace of mind with our comprehensive insurance'
    },
    {
      icon: Clock,
      title: 'Emergency Callouts',
      description: 'Available when you need us most'
    },
    {
      icon: CheckCircle,
      title: 'All Work Guaranteed',
      description: 'Quality assurance on every job'
    }
  ]

  return (
    <section className="relative bg-lime-500 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485 1.415 1.415L34.828.828 32 0zm-6.485 0L16.828 8.687l1.414 1.414 10.485-10.485L25.515 0zm12.97 0l-8.485 8.485 1.414 1.414L41.9 0h-3.415zM12.12 0L7.544 4.576 8.96 5.99 15.03 0h-2.91zm6.485 0L12.03 6.575 13.444 7.99 21.9 0h-3.295zM41.9 0L35.828 6.07 37.242 7.485 45.9 0h-4zm-24.985 0L7.544 9.37 8.96 10.784l13.457-13.457L16.915 0zm4.57 0L7.544 13.94 8.96 15.355 24.314 0h-2.829zm8.485 0l-15.97 15.97 1.414 1.414L32.8 0h-2.83zm-7.07 0L8.374 17.456 9.79 18.87 34.828 0h-2.828zm12.97 0L15.414 22.856l1.414 1.414L37.657 0h-2.828zm-4.571 0L15.414 18.285l1.414 1.414L34.828 0h-2.828zm8.485 0L21.9 21.9l1.414 1.414L41.9 0h-2.83zm-4.57 0l-10.485 10.485 1.414 1.414L41.9 0h-2.83zm12.97 0L28.284 28.284l1.414 1.414L48.97 0h-2.828zm-7.07 0l-17.456 17.457 1.415 1.414L45.9 0h-2.83zM51.8 0L31.544 20.257l1.414 1.414L52.657 0h-.858zm-2.83 0L29.314 19.657l1.414 1.414L52.657 0h-3.686zM48.97 0L33.314 15.657l1.414 1.414L52.657 0h-3.686zm2.828 0L36.142 15.657l1.414 1.414L52.657 0h-.858zm-7.07 0L35.657 9.07l1.415 1.415L52.657 0h-7.93zm-3.414 0L41.9 5.485 43.313 6.9l7.9-7.9h-7.9zm-7.07 0l7.071 7.07 1.414-1.414L41.9 0h-7.9z' fill='%23000' fill-opacity='.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-2xl md:text-3xl text-white/90">
            for your <span className="text-gray-700">UPVC Windows and Lock Repairs Redditch</span>
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white rounded-full p-6 mb-4 shadow-lg">
                <benefit.icon className="w-8 h-8 text-lime-500" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {benefit.title}
              </h4>
              <p className="text-white/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

