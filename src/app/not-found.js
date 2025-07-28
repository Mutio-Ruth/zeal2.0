// B:\mytestProjects\PatriciaConstructions\v2\panframltdv2\src\app\not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <p className="text-gray-500 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
