import Image from "next/image";

export default function DataFlow() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 lg:top-16 lg:left-10 lg:right-10 lg:bottom-16">
      <div className="absolute top-0 left-0 bg-background z-10">
        <Image
          src={"/products/vigile_logo.png"}
          width={120}
          height={120}
          alt="Vigile Logo"
        />
      </div>
      <div className="absolute top-6 w-1/2 border-3 border-green-400"></div>
      <div className="absolute bottom-6 right-0 w-1/2 border-3 border-green-400"></div>
      <div className="absolute left-1/2 right-1/2 border-3 border-blue-400 top-6 bottom-6"></div>
      <div className="absolute bottom-0 right-0 bg-background">
        <Image
          src={"/products/outlook.svg"}
          width={100}
          height={80}
          alt="Vigile Logo"
        />
      </div>
    </div>
  );
}
