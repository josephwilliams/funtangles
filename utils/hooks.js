import { useContext } from "react";
import { ColorContext } from "../contexts/color-context"
import { RectanglesContext } from "../contexts/rectangles-context"
import { AuthContext } from "../contexts/auth-context"

export const useColor = () => useContext(ColorContext)
export const useRectangles = () => useContext(RectanglesContext)
export const useAuth = () => useContext(AuthContext)
