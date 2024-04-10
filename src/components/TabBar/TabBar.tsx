"use client";

import { GoHome, GoNote, GoPencil } from "react-icons/go";

import { MdOutlineSubscriptions } from "react-icons/md";
import { TabBarItem } from "./TabBarItem";

const TabBar = () => {
  return (
    <div className="sm:hidden w-full h-14 items-center justify-between bg-neutral-900 z-10 bottom-0 max-[640px]:fixed max-[640px]:flex max-[640px]:flex-row">
      <TabBarItem
        url="/home"
        icon={<GoHome color="white" size="24px" className="mb-1.5" />}
        text="홈"
      />
      <TabBarItem
        url="/feed/subscriptions"
        icon={
          <MdOutlineSubscriptions
            color="white"
            size="24px"
            className="mb-1.5"
          />
        }
        text="구독"
      />
      <TabBarItem
        url="/feed/author"
        icon={<GoPencil color="white" size="24px" className="mb-1.5" />}
        text="작가"
      />
      <TabBarItem
        url="/feed/you"
        icon={<GoNote color="white" size="24px" className="mb-1.5" />}
        text="나"
      />
    </div>
  );
};

export default TabBar;
