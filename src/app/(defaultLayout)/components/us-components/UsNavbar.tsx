"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const UsNavbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 100) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="flex justify-center">
      <motion.div
        variants={NavbarVariants}
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        className={twMerge(
          "container grid items-center text-xl h-[var(--us-navbarHeight)] font-semibold z-10 fixed bottom-4 w-fit rounded-3xl px-6 justify-self-center",
          scrolled ? "bg-backgroundClr shadow-2" : "bg-transparent"
        )}
      >
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="relative mx-auto flex gap-8 lg:gap-2 w-fit px-4 md:px-0 md:p-1"
        >
          <li>
            <Tab href="/us" setPosition={setPosition}>
              nous
            </Tab>
          </li>
          <li>
            <Tab href="/us/ourStory" setPosition={setPosition}>
              histoire
            </Tab>
          </li>
          <li>
            <Tab href="/us/ourTeam" setPosition={setPosition}>
              equipe
            </Tab>
          </li>
          <Cursor position={position} />
        </ul>
      </motion.div>
    </nav>
  );
};

export default UsNavbar;

const Tab = ({
  children,
  href,
  setPosition,
}: {
  children: string;
  href: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer md:px-5 md:py-3"
    >
      <Link
        href={href}
        className={`${
          pathname === href
            ? "bg-accent2 px-3.5 py-3 -my-3 -mx-3.5 rounded-2xl text-white"
            : ""
        } capitalize font-bold`}
      >
        {children}
      </Link>
    </div>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 bg-accent2 h-13 rounded-2xl"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

// ------------All animations variants------------

const NavbarVariants = {
  hidden: {
    y: "100%",
    transition: {
      stiffness: 4,
    },
  },
  visible: {
    y: 0,
    transition: {
      stiffness: 4,
    },
  },
};

// -----------------------------------------------
