"use client";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
