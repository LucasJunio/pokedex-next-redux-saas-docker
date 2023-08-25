"use client";
import { useState, useEffect } from "react";
import ReduxProvider from "@/store/reduxProvider";

export default function Providers({ children }) {
  return <ReduxProvider>{children};</ReduxProvider>;
}
