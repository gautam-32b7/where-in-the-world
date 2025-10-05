import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-gray-100 mb-8">
      <Link to="/">
        <h1 className="text-xl font-medium md:text-2xl text-gray-900 p-4 md:p-8">
          Where in the world?
        </h1>
      </Link>
    </header>
  );
}
