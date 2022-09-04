import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren<{}>) {
  return (
    <main className="container mx-auto mt-4 flex flex-col items-center space-y-4">
      {children}
    </main>
  );
}

export function Header() {
  return (
    <header className="container mx-auto py-2">
      <h1 className="text-3xl font-bold text-center">URL Shortener</h1>
    </header>
  );
}
