import Link from "next/link";

interface TabBarItemProps {
  url: string;
  icon: JSX.Element;
  text: string;
}

const TabBarItem = (props: TabBarItemProps) => {
  const { url, icon, text } = props;

  return (
    <Link href={url}>
      <div className="flex flex-col items-center justify-center w-24 gap-y-0.5 p-1">
        {icon}
        <span className="text-xs font-normal text-white">{text}</span>
      </div>
    </Link>
  );
};

export default TabBarItem;
