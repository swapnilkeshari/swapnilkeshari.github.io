import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredCardProps extends React.ComponentProps<"div"> {
  /**
   * List of links to display
   */
  links: {
    label: string;
    href: string;
  }[];
  /**
   * How much to delay each child
   */
  delay?: number;
  /**
   * How much to delay the opening animation (useful for making the animation feel more interactive)
   */
  openingDelay?: number;
}

export default function StaggeredCard({
  links,
  className,
  delay = 0.06,
  openingDelay = 0.1,
  ...props
}: StaggeredCardProps) {
  const easeOut = [0, 0, 0.2, 1];

  const [open, setOpen] = useState(false);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRect = containerRef.current?.getBoundingClientRect();

  function updateHoverRect(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setHoverRect(e.currentTarget.getBoundingClientRect());
  }

  function resetHoverRect() {
    setHoverRect(null);
  }

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative h-fit w-fit", className)} {...props}>

        <button className={ `${className}  cursor-pointer rounded relative group lg:text-light lg:dark:text-dark`} onClick={toggleOpen}>
            More
            <span
                className={`
                    inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 w-0
                    group-hover:w-full transition-[width] ease duration-300 dark:bg-light
                     lg:bg-light lg:dark:bg-dark
                    `}
            >
            </span>
        </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={{ closed: { scale: 0.85, opacity: 0 }, open: { scale: 1, opacity: 1 } }}
            transition={{ duration: 0.15, ease: easeOut, delay: openingDelay }}
            className="absolute top-full mt-2 w-max origin-top-right rounded-md bg-dark text-light">
            <div ref={containerRef} className="relative" onMouseLeave={resetHoverRect}>
              {/* hover effect */}
              <AnimatePresence>
                {hoverRect && containerRect && (
                  <motion.div
                    initial="hidden"
                    animate="shown"
                    exit="hidden"
                    variants={{
                      hidden: {
                        x: hoverRect.left - containerRect.left,
                        y: hoverRect.top - containerRect.top + 15,
                        width: hoverRect.width,
                        height: hoverRect.height,
                        opacity: 0,
                      },
                      shown: {
                        x: hoverRect.left - containerRect.left,
                        y: hoverRect.top - containerRect.top,
                        width: hoverRect.width,
                        height: hoverRect.height,
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 h-8 w-16 rounded-md bg-white/10"
                  />
                )}
              </AnimatePresence>
              {links.map((link, i) => {
                return (
                  <motion.li
                    key={link.label}
                    onMouseOver={updateHoverRect}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: easeOut,
                      delay: i * delay + openingDelay,
                    }}
                  >
                    <a
                      className="relative z-10 block w-full cursor-pointer rounded-lg px-8 py-3.5 text-center text-neutral-200"
                      onClick={toggleOpen}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
