import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DumbbellIcon, Salad } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-100 via-cyan-100 to-blue-200">
    {/* Decorative background blob */}
    <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-[40%] bg-cyan-200/30 blur-3xl" />

    <div className="container relative mx-auto flex min-h-screen items-center px-4 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        {/* Left column - Image */}
        <div className="relative">
          <div className="absolute -left-4 top-4 h-4 w-4 animate-[ping_2s_infinite] rounded-full bg-white" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Dumbbells with fruits"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right column - Text content */}
        <div className="flex flex-col items-start justify-center gap-6 px-4 lg:px-8">
          <Badge className="bg-white px-6 py-2 text-base font-medium uppercase tracking-wider">
            <DumbbellIcon className="mr-2 h-4 w-4" />
            Exercise
            <span className="mx-2 text-pink-500">+</span>
            <Salad className="mr-2 h-4 w-4" />
            Nutrition
          </Badge>
          
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 lg:text-6xl">
            supports
            <br />
            your health
          </h1>
          
          <p className="text-xl text-gray-600">
            Health information site
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}