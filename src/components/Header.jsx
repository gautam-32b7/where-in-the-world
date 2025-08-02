import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-12 py-6 flex items-center justify-between border-b-1 border-gray-300 mb-6">
      <h1 className="text-2xl text-gray-950 font-bold">Where in the world?</h1>
      <button className="p-2 text-gray-950 flex items-center gap-1 font-medium cursor-pointer">
        <Moon />
        <span>Dark Mode</span>
      </button>
    </header>
  );
}
