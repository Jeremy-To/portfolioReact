import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <BsFillMoonStarsFill /> : <BsSunFill />}
      variant={"ghost"}
      onClick={toggleColorMode}
      color={useColorModeValue("gray.300", "gray.600")}
    />
  );
};
