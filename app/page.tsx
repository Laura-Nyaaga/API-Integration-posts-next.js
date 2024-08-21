// import Image from "next/image";


import Login from "./components/Login";
export default function Home() {
  return (
    <main>
      {/* <h1 className="text-lime-700 text-center text-[34px]"> Introduction to NextJs</h1>
      <SectionAtom heading="About Us">
        <div>
          <p>We are learning about NextJS</p>
          <Link href={'/about'}><button>About</button></Link>
        </div>
      </SectionAtom> */}
      <Login/>
    </main>
  );
}