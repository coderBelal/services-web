import Image from "next/image";
 import pc from "../public/pc.jpg"
import Link from "next/link";

export function Hero() {

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
  
    return (
      <div className="relative    text-black  py-24">
        <div className="absolute inset-0">
          <Image
            src={pc}
            alt="UPVC Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional UPVC Doors, Windows & Lock Repairs
            </h1>
            <div className="flex items-center gap-4">
              <div className="bg-lime-500 rounded-full p-4 text-center w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">30</span>
                <span className="text-xs uppercase">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    )
  }
  
  