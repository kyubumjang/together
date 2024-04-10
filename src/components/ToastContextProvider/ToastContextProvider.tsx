"use client";

import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { Toast } from "flowbite-react";

type ToastType = "check" | "error" | "info";

interface ToastTimer {
  timer?: ReturnType<typeof setTimeout>;
}
interface ToastProps {
  type: ToastType;
  text: string;
  undoItems?: Array<Promise<unknown>>;
}

type ToastContextProps = ({ type, text, undoItems }: ToastProps) => void;
const defaultValue = () => {};
const ToastContext = createContext<ToastContextProps>(defaultValue);

type ToastContextProviderProps = { children: ReactNode };

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<Array<ToastProps>>([]);

  const toast = useCallback(
    (toast: ToastProps & ToastTimer) => {
      setToasts((toasts: Array<ToastProps>) => [...toasts, toast]);
      toast.timer = setTimeout(
        () => setToasts((toasts: Array<ToastProps>) => toasts.slice(1)),
        8000,
      );
    },
    [setToasts],
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-4 right-1 z-20">
        {toasts.map((toast) => (
          <Toast key={toast.text}>
            {toast.type === "check" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <HiCheck className="h-5 w-5" />
              </div>
            )}
            {toast.type === "error" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                <HiX className="h-5 w-5" />
              </div>
            )}
            {toast.type === "info" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                <HiExclamation className="h-5 w-5" />
              </div>
            )}
            <div className="ml-3 text-sm font-normal">{toast.text}</div>
            <Toast.Toggle />
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);

export default ToastContextProvider;
