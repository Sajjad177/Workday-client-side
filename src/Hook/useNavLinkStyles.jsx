import { useLocation } from "react-router-dom";

const useNavLinkStyles = (path) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const linkClasses = isActive
    ? "text-blue-500 font-bold"
    : "text-gray-700 hover:text-blue-500";
  const spanClasses = isActive
    ? "absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 transform scale-x-100 transition-transform duration-300"
    : "absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300";

  return { linkClasses, spanClasses };
};

export default useNavLinkStyles;
