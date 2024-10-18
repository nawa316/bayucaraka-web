import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full h-fit gap-[10px] py-[10px] justify-center items-center">
      <div className="flex h-[45px] w-[45px] justify-center items-center rounded-full border bg-[#D97700]">
        <figure className="flex w-[30px] h-[30px]">
          <Image
            src="/images/about/bayucaraka.png"
            width={100}
            height={100}
            alt="Bayucaraka"
          />
        </figure>
      </div>
      <div className="flex h-[45px] w-[600px] justify-center items-center rounded-full border bg-[#D97700]">
        <ul className="flex flex-row justify-center items-center gap-[20px] px-[20px] text-white">
          <li>Racing Plane</li>
          <li>Fixed Wings</li>
          <li>VTOL</li>
          <li>Technology Development</li>
          <li>Official</li>
        </ul>
      </div>
    </nav>
  );
}
