import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { HeaderIconListSkeleton } from "../HeaderIconListSkeleton";
import Image from "next/image";
import { TextInput } from "flowbite-react";
import togetherValueLogo from "../../../../public/togetherValueLogo.svg";

const HeaderSkeleton = () => {
  return (
    <header className="flex flex-row w-full h-14 items-center justify-between border px-3 max-[640px]:fixed bg-white z-10">
      <div className="flex items-center justify-between min-w-[241px]">
        <div className="flex items-center justify-center w-10 h-10 max-[640px]:hidden">
          <AiOutlineMenu size="24px" />
        </div>
        <Image
          src={togetherValueLogo}
          alt="togetherValueLogo"
          className="flex min-w-[200px]"
        />
      </div>
      <div className="max-w-md max-[640px]:hidden">
        <TextInput
          id="search"
          placeholder="검색"
          rightIcon={GoSearch}
          size={610}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <HeaderIconListSkeleton />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
