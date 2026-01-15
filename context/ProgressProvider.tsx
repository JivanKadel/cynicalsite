"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="5px"
      color="#675DD8"
      options={{ showSpinner: true }}
      spinnerPosition="top-left"
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
