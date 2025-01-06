import Image from 'next/image';
import glaz from "../../../public/glazing-repairs.jpg"
export default function GlazingPage() {
  return (
    <div className="max-w-7xl mx-auto flex bg-gray-100 items-center justify-between py-12">
      <div className="w-full  h-[400px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Glazing Repairs</h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            Our glazing specialists can replace or repair misted, cracked, or
            smashed glass in your UPVC windows and doors. We provide efficient
            and professional glazing solutions to restore your windows to perfect
            condition.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[400px]">
        <Image
          src={glaz} 
          alt="Glazing Services"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
