import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Customizable Accordion component (JSX + Tailwind)
// Each accordion item is visually separate (disconnected design)

export default function Accordion({
  items,
  multiOpen = false,
  open: controlledOpen,
  onChange,
  allowAllClosed = true,
  renderIcon,
  className = "",
  headerClass = "",
  contentClass = "",
}) {
  const isControlled = controlledOpen !== undefined;

  const [openState, setOpenState] = useState([]);

  const openIds = isControlled
    ? Array.isArray(controlledOpen)
      ? controlledOpen
      : controlledOpen == null
      ? []
      : [controlledOpen]
    : openState;

  useEffect(() => {
    if (!multiOpen && !isControlled && openState.length > 1) {
      setOpenState(openState.slice(0, 1));
    }
  }, [multiOpen]);

  const toggle = (id, disabled) => {
    if (disabled) return;

    let next = [];

    if (multiOpen) {
      if (openIds.includes(id)) {
        next = openIds.filter((x) => x !== id);
      } else {
        next = [...openIds, id];
      }
    } else {
      if (openIds.includes(id)) {
        next = allowAllClosed ? [] : openIds;
      } else {
        next = [id];
      }
    }

    if (isControlled) {
      onChange?.(multiOpen ? next : next[0] ?? null);
    } else {
      setOpenState(next);
      onChange?.(multiOpen ? next : next[0] ?? null);
    }
  };

  const headersRef = useRef([]);

  const onHeaderKeyDown = (e, idx) => {
    const max = items.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = idx === max ? 0 : idx + 1;
      headersRef.current?.[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = idx === 0 ? max : idx - 1;
      headersRef.current?.[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      headersRef.current?.[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      headersRef.current?.[max]?.focus();
    }
  };

  const DefaultIcon = ({ open }) => (
    <svg
      className={`w-5 h-5 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const id = String(item.id);
        const isOpen = openIds.includes(item.id);
        const btnId = `accordion-${id}-btn`;
        const panelId = `accordion-${id}-panel`;

        return (
          <div
            key={id}
            className={`border rounded-2xl border-zinc-700 bg-zinc-900 overflow-hidden transition-all duration-200 ${
              isOpen ? "ring-1 ring-zinc-700" : "hover:shadow-md"
            }`}
          >
            <h3 className="m-0">
              <button
                id={btnId}
                ref={(el) => (headersRef.current[idx] = el)}
                className={`w-full px-5 py-4 text-left flex items-center justify-between focus:outline-none focus-visible:ring focus-visible:ring-offset-2 ${headerClass} ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id, item.disabled)}
                onKeyDown={(e) => onHeaderKeyDown(e, idx)}
                disabled={item.disabled}
                type="button"
              >
                <span className="flex-1 font-medium text-white">{item.title}</span>
                <span className="ml-3 flex-shrink-0">
                  {renderIcon ? renderIcon({ open: isOpen, disabled: item.disabled }) : <DefaultIcon open={isOpen} />}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key={`panel-${id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={`overflow-hidden px-5 bg-zinc-900 ${contentClass}`}
                  aria-labelledby={btnId}
                  role="region"
                >
                  <div className="py-3 text-slate-300">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

