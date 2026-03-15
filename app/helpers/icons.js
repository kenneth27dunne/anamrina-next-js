import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";

export const getIconComponent = (iconName) => {
  if (iconName === undefined || iconName.length <= 0) return null;
  iconName = iconName.trim();
  return (
    MdIcons[iconName] ||
    FaIcons[iconName] ||
    FiIcons[iconName] ||
    AiIcons[iconName] ||
    RiIcons[iconName] ||
    HiIcons[iconName] ||
    BiIcons[iconName] ||
    TbIcons[iconName] ||
    null
  );
};
