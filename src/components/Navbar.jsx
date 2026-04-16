import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const hoverTimeout = useRef(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/topics", label: "Topics" },
    { path: "/favorites", label: "Favorites" },
    { path: "/quiz", label: "Quiz" }, // ✅ NEW
    { path: "/about", label: "About" },
  ];

  const handleHover = (path) => {
    hoverTimeout.current = setTimeout(() => {
      if (location.pathname !== path) {
        navigate(path);
      }
    }, 300);
  };

  const cancelHover = () => {
    clearTimeout(hoverTimeout.current);
  };

  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md sticky top-0 z-50">

      {/* LOGO */}
      <div
        onMouseEnter={() => handleHover("/")}
        onMouseLeave={cancelHover}
        className="absolute left-6 top-1/2 -translate-y-1/2 font-heading text-2xl tracking-wide cursor-pointer"
      >
        🇻🇳 VietHeritage
      </div>

      {/* MENU */}
      <div className="flex justify-center gap-10">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.div
              key={item.path}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => handleHover(item.path)}
              onMouseLeave={cancelHover}
              className="cursor-pointer"
            >
              <span
                className={`relative font-heading uppercase text-sm tracking-[2px] transition group
                  ${isActive ? "text-secondary" : "text-white"}
                  hover:text-secondary`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-secondary transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </span>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;