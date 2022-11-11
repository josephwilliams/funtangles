import { useContext } from "react";
import { ColorContext } from "../contexts/color-context"
import { RectanglesContext } from "../contexts/rectangles-context"

export const useRectangles = () => useContext(RectanglesContext)
export const useColor = () => useContext(ColorContext)
