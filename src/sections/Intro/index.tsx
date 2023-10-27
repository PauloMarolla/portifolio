import Image from "next/image"

export const Intro: React.FC = () => {
  return (
    <>
      <section className="bg-dark-gray min-h-screen">
        <Image src='/images/logo/white-logo.svg' alt="Logo marolla" width={300} height={300} />
        <h1 className="text-opacity-90">Intro</h1>
      </section>
    </>
  );
};
