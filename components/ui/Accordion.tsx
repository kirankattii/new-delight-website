"use client";

import React, { useMemo, useState, type ReactNode } from "react";

export type AccordionItem = {
  id?: string | number;
  title: ReactNode;
  content?: ReactNode;
  defaultOpen?: boolean;
};

export interface AccordionProps {
  items?: AccordionItem[];
  columns?: number;
    openMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  icon?: "arrow" | "check" | "plusminus" | ReactNode;
}

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 mr-3 mt-0.5 shrink-0"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3.5 h-3.5 text-gray-700"
      >
        <path
          d="M5 10.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="inline-flex w-6 h-6 items-center justify-center mr-3 shrink-0">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-700"
      >
        <path d={open ? "M4 10h12" : "M4 10h12M10 4v12"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex w-6 h-6 items-center justify-center mr-3 mt-1 shrink-0 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-700"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Accordion({
  items = [],
  columns = 2,
  openMultiple = false,
  className = "",
  itemClassName = "",
  icon = "arrow",
}: AccordionProps) {
  const [openState, setOpenState] = useState<Record<string | number, boolean>>(() => {
    const initial: Record<string | number, boolean> = {};
    items.forEach((it, idx) => {
      if (it.defaultOpen) initial[it.id ?? idx] = true;
    });
    return initial;
  });

  const toggleItem = (key: string | number) => {
    setOpenState((prev) => {
      const next = { ...prev };
      const isOpen = !!next[key];
      if (openMultiple) {
        next[key] = !isOpen;
        return next;
      }
      // close others when single-open mode
      const result: Record<string | number, boolean> = {};
      result[key] = !isOpen;
      return result;
    });
  };

  const [leftItems, rightItems] = useMemo(() => {
    if (columns === 2) {
      const left: AccordionItem[] = [];
      const right: AccordionItem[] = [];
      items.forEach((it, i) => (i % 2 === 0 ? left.push(it) : right.push(it)));
      return [left, right];
    }
    return [items, []];
  }, [columns, items]);

  const renderItem = (it: AccordionItem, indexOffset: number) => {
    const key = it.id ?? indexOffset;
    const isOpen = !!openState[key];
    const panelId = `accordion-panel-${key}`;
    const buttonId = `accordion-trigger-${key}`;

    const renderLeftIcon = () => {
      if (React.isValidElement(icon)) return icon;
      if (icon === "plusminus") return <PlusIcon open={isOpen} />;
      if (icon === "check") return <CheckIcon />;
      return <ArrowIcon open={isOpen} />;
    };

    return (
      <div key={String(key)} className={`py-3 ${itemClassName}`}>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggleItem(key)}
          className="group w-full flex items-start text-left"
        >
          {renderLeftIcon()}
          <span className="text-base md:text-lg leading-7 md:leading-8 text-gray-800 group-hover:text-gray-900">
            {it.title}
          </span>
        </button>
        {it.content !== undefined && (
          <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className={`pl-9 pr-2 pt-2 text-gray-600 text-sm md:text-base transition-all duration-300 ease-out ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}>
                {it.content}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className}>
      {columns === 2 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          <div>
            {leftItems.map((it, i) => renderItem(it, i * 2))}
          </div>
          <div>
            {rightItems.map((it, i) => renderItem(it, i * 2 + 1))}
          </div>
        </div>
      ) : (
        <div>{items.map((it, i) => renderItem(it, i))}</div>
      )}
    </div>
  );
}


