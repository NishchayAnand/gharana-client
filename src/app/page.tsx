import Image from "next/image";


export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="w-full h-screen px-10 pb-10 pt-[4.5rem] flex justify-center items-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/home-page-hero-section.jpg"
            alt="Hero Image"
            fill={true} // makes the image fill the parent container
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full h-screen bg-amber-400">
        {/*
        <Image
          src="/images/home-page-hero-section.jpg"
          alt="Hero Image"
          fill={true} // makes the image fill the parent container
          className="object-cover object-center"
        />
              */}
      </section>

    </main>
  );
}