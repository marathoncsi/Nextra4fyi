import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
import Weather21234 from "./app/Links/Weather21234";

export function useMDXComponents(components) {
  return {
    Weather21234,
    ...themeComponents,
    ...components,
  };
}
