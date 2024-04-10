"use client";

import { Dropdown } from "flowbite-react";

type DropdownItems = {
  text: string;
  handleClick: () => void;
};

interface IconDropdownProps {
  label: JSX.Element;
  headerText?: string;
  dropdownItems: DropdownItems[];
}

const IconDropdown = (props: IconDropdownProps) => {
  const { label, headerText, dropdownItems } = props;

  return (
    <Dropdown label={label} arrowIcon={false} inline>
      {headerText && (
        <Dropdown.Header>
          <span className="block text-sm"> {headerText}</span>
        </Dropdown.Header>
      )}
      {dropdownItems.map((dropdownItem) => (
        <Dropdown.Item
          key={dropdownItem.text}
          onClick={dropdownItem.handleClick}
        >
          {dropdownItem.text}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default IconDropdown;
