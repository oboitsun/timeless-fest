import ContactForm from "../components/ContactForm";
import CloudinaryImgWrapper from "../components/UI/CloudinaryImgWrapper";

export default function Home() {
  return (
    <section className="w-full h-full flex-grow flex ">
      <div className="wrap grid max-xl:grid-rows-[max-content,1fr] flex-grow xl:grid-cols-[max-content,1fr] gap-5 lg:gap-7 xl:gap-10 2xl:gap-20  py-5 lg:py-10 2xl:py-14">
        <div className="w-full lg:w-[clamp(480px,50vw,560px)] flex flex-col gap-5 justify-center mx-auto">
          <h1 className="italic uppercase text-center text-lg lg:text-2xl">
            Creating Timeless Live music and entertainment experiences that convert into forever
            memories
          </h1>
          <div className="frame w-full py-2 px-4 lg:px-7 lg:py-4 xl:px-10 xl:py-6 flex  justify-center items-center win-2-tickets">
            {/* <CloudinaryImgWrapper
              width="80"
              height="80"
              className="w-20 relative z-10"
              src="/timeless-fest-tickets.png"
              sizes="(min-width:1024px) 10vw, 20vw"
            /> */}
            <h3 className="uppercase text-center text-lg lg:text-2xl gap-5 relative z-10">
              Fill out your email to stay updated{" "}
            </h3>
          </div>
          <ContactForm />
        </div>
        <div className="relative w-full h-full ">
          <CloudinaryImgWrapper
            width={1440}
            height={416}
            loader="blur"
            src="/timeless-fest-crowd.jpg"
            sizes="(min-width:1024px) 90vw, 100vw"
            className="object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}
