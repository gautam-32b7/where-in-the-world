export default function Footer() {
  return (
    <footer className="p-4 border-t border-gray-200">
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Where in the world. All rights
        reserved.
      </p>
    </footer>
  );
}
