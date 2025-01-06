import Image from 'next/image';
import glaz from "../../../public/glazing-repairs.jpg"
 

const services = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Locks Opened",
    description: "If you've lost your keys or snapped a key in your lock we are on hand to help. Our friendly, reliable locksmiths Redditch are on hand to tackle any emergency."
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Lock Types Supplied",
    description: "We can supply and fit all types of locks, including, rim cylinder, euro profile locks, window locks, garage door locks, mortice and mortice sash locks."
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Doors and Locks Repaired",
    description: "Our professional locksmiths Redditch can repair and replace all door and window locks for both domestic and commercial properties."
  }
]

 
export default function LocksmithPage() {
  return (
   <>
    <div className="max-w-7xl mx-auto flex items-center justify-between py-12">
      <div className="w-full md:w-1/2 h-[400px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Locksmith Services</h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            As a professional locksmith in Redditch, we offer a lock repair service
            for all types of locks, including UPVC windows and doors. Our expert
            team ensures your security needs are met with precision and care.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[400px]">
        <Image
          src= {glaz} // Replace with your image path
          alt="Locksmith Services"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
 
    </div>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-lime-500">ALL</span>{' '}
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
