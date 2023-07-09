import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const StyledNavbar = () => {
  return (
    <header className="w-full absolute z-10 bg-dark-900 border-b-4 border-aqua-500 shadow-lg">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 transform hover:scale-105 transition-transform duration-300">
        <Link href="/" className="flex justify-center items-center transform hover:scale-110 transition-transform duration-300">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain filter hover:invert transition-filter duration-300"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-aqua-300 bg-dark-800 rounded-full border-2 border-aqua-500 min-w-[130px] shadow-md hover:bg-aqua-500 hover:text-dark-900 transition-all duration-300"
        />
      </nav>
    </header>
  );
};

export default StyledNavbar;
