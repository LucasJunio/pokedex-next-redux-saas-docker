"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { reduxProvider } from "../../store/reduxProvider";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <reduxProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </reduxProvider>
  );
}
