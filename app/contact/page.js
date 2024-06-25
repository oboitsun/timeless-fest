import Heading from "../../components/UI/Heading";

export default function ContactPage() {
  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading addClasses="pb-10">Contact</Heading>
        <div className="w-full flex flex-col gap-5 xl:gap-3  bg-white p-5 lg:p-7 xl:p-10   text-xl text-black">
          <p className="text-black/50">General Enquiries</p>
          <h2 className="font-matiz uppercase text-3xl">MEDIA/SPONSORSHIP/CORPORATE TABLES</h2>
          <p>Kristin Ralph</p>
          <a href="mailto:media@timelessgroup.co.nz" className="underline">
            media@timelessgroup.co.nz
          </a>
        </div>
      </div>
    </section>
  );
}
