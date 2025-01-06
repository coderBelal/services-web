import Image from 'next/image';
import glaz from "../../../public/glazing-repairs.jpg"
export default function UPVCRepairPage() {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-12">
      <div className="w-full md:w-1/2 h-[400px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">UPVC Windows Repair</h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            Our UPVC repair service includes both doors and windows covering, draught
            problems, faulty hinges, and locking mechanisms. We provide comprehensive
            repair solutions to ensure your windows are functioning properly.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[400px]">
        <Image
          src={glaz} // Replace with your image path
          alt="UPVC Windows Repair"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
