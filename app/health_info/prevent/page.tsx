import PreventList from "@/components/HealthInfo/Prevent/prevent_list";

export default function PreventPage(){
  return(
    <section className="w-full bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            コンディショニング・予防理学一覧
          </h2>
          <p className="text-lg text-gray-600">
            コンディショニングや疾病予防など予防理学療法の観点で情報を提供しております。
          </p>
        </div>
      </div>
      <PreventList />
    </section>
  );
}