"use client";

import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

import { Toast } from "flowbite-react";

interface ToastProps {
  icon: "check" | "x" | "exclamation";
  content: string;
}

const ToastComponent = (props: ToastProps) => {
  const { icon, content } = props;

  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        {icon === "check" && <HiCheck className="h-5 w-5" />}
        {icon === "x" && <HiX className="h-5 w-5" />}
        {icon === "exclamation" && <HiExclamation className="h-5 w-5" />}
      </div>
      <div className="ml-3 text-sm font-normal">{content}</div>
      <Toast.Toggle />
    </Toast>
  );
};

export default ToastComponent;
