import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          title="UPVC Windows Repair"
          description="Professional UPVC window repair and maintenance services"
          href="/services/upvc-windows-repair"
        />
        <ServiceCard
          title="Locksmith Services"
          description="Expert locksmith services for your security needs"
          href="/services/locksmith-services"
        />
        <ServiceCard
          title="Glazing Repairs"
          description="Specialized glazing repair and replacement services"
          href="/services/glazing-repairs"
        />
      </div>
    </div>
  )
}

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

