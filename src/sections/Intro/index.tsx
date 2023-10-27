import Image from "next/image"
import Link from "next/link";

export const Intro: React.FC = () => {
  return (
    <>
      <section className="bg-dark-gray min-h-screen h-full">
        <header className="flex justify-between">
          <Link href='#intro'>
            <Image src='/images/logo/white-logo.svg' alt="Logo marolla" width={100} height={16} />
          </Link>
          <button className="text-white">
            d
          </button>
          
        </header>
        <Image src='/images/logo/white-logo.svg' alt="Logo marolla" width={300} height={300} />
        <h1 className="text-opacity-90">Intro</h1>
      </section>
    </>
  );
};
