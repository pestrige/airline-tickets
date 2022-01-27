import "styled-components";
import { MainTheme } from "./types/types";

declare module "styled-components" {
  export interface DefaultTheme extends MainTheme {}
}
