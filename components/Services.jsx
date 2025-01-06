import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: "UPVC REPAIRS",
    description: "Our UPVC repair service includes both doors and windows covering, draught problems, faulty hinges and locking mechanisms...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/upvc-repairs"
  },
  {
    title: "LOCKSMITH SERVICES",
    description: "As a professional locksmith, we offer a lock repair service for all types of locks, including UPVC windows and doors...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/locksmith-services"
  },
  {
    title: "GLAZING REPAIRS",
    description: "Our glazing specialists can replace or repair misted, cracked or smashed glass in your UPVC windows and doors...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/glazing-repairs"
  }
]

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
        <h1 className='    text-center  text-2xl   font-semibold   mb-4'>Our Services </h1>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

