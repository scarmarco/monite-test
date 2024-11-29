"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "@/hooks";
import { getUnits, postUnit, type Units } from "@/services/api";
import { useToastContext } from "@/contexts/ToastContext";

export function UnitsDropdown(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<Units>([]);
  const contentRef = useRef(null);

  const { setToasts } = useToastContext();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const handleNewUnit = useCallback(
    (unit: string) => async () => {
      try {
        const newOptions = await postUnit(unit);
        setValue(unit);
        setOptions(newOptions);
        setIsOpen(false);
        setToasts(`The '${unit}' was added as a new measuring unit`);
      } catch (error) {
        console.log(error);
      }
    },
    [setToasts]
  );

  const handleSelect = useCallback(
    (unit: string) => () => {
      setValue(unit);
      setIsOpen(false);
    },
    []
  );

  const newValueExists = useMemo(() => {
    if (!isOpen) {
      return false;
    }
    return options.find(({ text }) => text === value);
  }, [options, value, isOpen]);

  useOutsideClick(contentRef, handleClose);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const units = await getUnits();
        setOptions(units);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnits();
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full border-2 border-gray-100 bg-white rounded-lg pl-3 pr-7 py-2 outline-blue-400"
        value={value}
        onChange={handleChange}
        onFocus={handleOpen}
        {...props}
      />
      <ChevronDownIcon
        className="size-4 text-gray-400 absolute right-2"
        style={{ top: "calc(50% - 0.5rem)" }}
      />
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute left-0 right-0 bg-white shadow-xl rounded-lg z-20"
          style={{ top: "calc(100% + 0.25rem)" }}
        >
          {value && !newValueExists && (
            <div
              className="p-3 cursor-pointer hover:bg-gray-50 rounded-lg"
              onClick={handleNewUnit(value)}
            >
              Create &#39;{value}&#39; as the new unit
            </div>
          )}

          {(!value || newValueExists) && (
            <>
              <div className="p-3 font-semibold border-b border-gray-200/80 border-solid rounded-t-lg cursor-default">
                Select a unit or start typing to create a new one
              </div>
              {options.map(({ id, text }) => (
                <div
                  key={id}
                  className="p-3 border-b border-gray-200/80 border-solid last:border-none hover:bg-gray-50 last:rounded-b-lg cursor-pointer"
                  onClick={handleSelect(text)}
                >
                  {text}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
