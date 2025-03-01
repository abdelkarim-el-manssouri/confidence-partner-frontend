"use client";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { navbarLinks } from "@/data/data";
import Image from "next/image";
import logoMark from "../../../../public/svg/logoMark.svg";
import primaryLogo from "../../../../public/svg/primaryLogo.svg";
import {
  AnimatedHamburgerButtonProps,
  MobileMenuProps,
} from "@/interfaces/Navabar";
import { usePathname } from "next/navigation";

const DURATION = 1;
const STAGGER = 0.1;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const pathname = usePathname();

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
          "container grid grid-cols-2 lg:grid-cols-3 backdrop-blur-sm items-center text-xl h-[var(--navbarHeight)] font-semibold z-50 fixed top-8 w-11/12 md:w-4/6 rounded-3xl px-6 mb-8 justify-self-center",
          scrolled ? "shadow-6 bg-backgroundClr" : ""
        )}
      >
        <Link href="/" className="w-fit" onClick={() => setIsOpen(false)}>
          <span className="sr-only">
            website logo. click to navigate to homepage
          </span>
          <Image
            src={primaryLogo}
            alt="confidence partner logo"
            className="max-w-full w-32 hidden lg:block"
          />
          <Image
            src={logoMark}
            alt="confidence partner logo"
            className="max-w-full w-10 aspect-square lg:hidden"
          />
        </Link>
        <div className="lg:hidden grid justify-end">
          <AnimatedHamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="relative hidden mx-auto lg:flex w-fit p-1"
        >
          <li>
            <Tab href="/you" setPosition={setPosition}>
              vous
            </Tab>
          </li>
          <li>
            <Tab href="/us" setPosition={setPosition}>
              nous
            </Tab>
          </li>
          <li>
            <Tab href="/together" setPosition={setPosition}>
              ensemble
            </Tab>
          </li>
          <li>
            <Tab href="/insights" setPosition={setPosition}>
              insights
            </Tab>
          </li>
          <Cursor position={position} />
        </ul>

        <Link
          href="/contact"
          className={`${
            pathname === "/contact"
              ? "bg-accent2 px-3 py-2.5 -mx-3 -my-2.5 rounded-2xl text-white"
              : ""
          } font-bold hidden lg:grid justify-self-end capitalize w-fit hover:bg-accent2 px-3.5 py-3 rounded-2xl hover:transition`}
        >
          contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;

const AnimatedHamburgerButton = ({
  isOpen,
  setIsOpen,
}: AnimatedHamburgerButtonProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen((pv) => !pv)}
        className="relative size-10 rounded-full"
      >
        <span className="sr-only">menu button</span>
        <motion.span
          variants={burgerButtonVariants.top}
          className="absolute h-0.5 w-7 bg-fontColor"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={burgerButtonVariants.middle}
          className="absolute h-0.5 w-7 bg-fontColor"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={burgerButtonVariants.bottom}
          className="absolute h-0.5 w-4 bg-fontColor"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </MotionConfig>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <AnimatePresence>
        {isOpen && <MobileMenuContent setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};

const MobileMenuContent = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      data-lenis-prevent
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-backgroundClr -z-10 fixed h-dvh -mx-7 inset-0 overflow-x-clip cursor-auto origin-top overflow-y-auto grid -mt-[2rem] pt-[calc(var(--navbarHeight)+2rem)]"
    >
      <nav className="w-5/6 mx-auto px-4 border-t border-accent py-16 grid grid-rows-[1fr,auto,auto]">
        <motion.ul initial="initial" animate="animate" exit="exit">
          {navbarLinks.map((link) => (
            <motion.li
              variants={{
                initial: {
                  opacity: 0,
                  x: "20%",
                  filter: "blur(10px)",
                },
                animate: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                },
                exit: {
                  opacity: 0,
                  x: "-20%",
                  filter: "blur(10px)",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: link.id * STAGGER,
              }}
              key={link.id}
              className="text-5xl uppercase mb-8 font-bold"
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-5"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            ease: "easeInOut",
            duration: DURATION,
            delay: 1,
          }}
          className="py-10 grid place-content-center"
          key="div1"
        >
          <Image
            src={primaryLogo}
            alt="confidence partner logo"
            className="w-60"
          />
        </motion.div>
        <motion.q
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            ease: "easeInOut",
            duration: DURATION,
            delay: 1.2,
          }}
          className="text-xl text-center pb-10 capitalize italic"
          key="div2"
        >
          trust is the foundation, <br /> excellence is where we take you
        </motion.q>
      </nav>
    </motion.div>
  );
};

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
      className="relative z-10 block cursor-pointer uppercase md:px-5 md:py-3"
    >
      <Link
        href={href}
        className={`${
          pathname === href
            ? "bg-accent2 px-3.5 py-3 -mx-3.5 -my-3 rounded-2xl text-white"
            : ""
        } capitalize`}
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
    y: "-100%",
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

const burgerButtonVariants = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 3px)",
    },
  },
};

const menuVariants = {
  initial: {
    // opacity: 0,
    scaleY: 0,
  },
  animate: {
    // opacity: 1,
    scaleY: 1,
    transition: {
      // ease: [0.01, 1.09, 1, 1.03],
      // ease: [0.165, 0.84, 0.44, 1],
      ease: [0.76, 0, 0.24, 1],
      duration: 0.7,
    },
  },
  exit: {
    // opacity: 0.5,
    scaleY: 0,
    transition: {
      // ease: [0, 0.4, 0.12, -0.21],
      ease: [0.76, 0, 0.24, 1],
      duration: 0.7,
      delay: 1,
    },
  },
};

// -----------------------------------------------
