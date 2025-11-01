import FemurFractureCont from "@/components/HealthInfo/Prevent/FemurFracture/contents";

export default function FemurFracturePage(){
  return(
    <section className="w-full bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            大腿骨骨折について
          </h2>
        </div>
      </div>
      <FemurFractureCont/>
    </section>
  );
}