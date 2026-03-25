import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quorbz - Bold Visionary',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-green-600 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quorbz</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-green-300">Solutions</a>
          <a href="#" className="hover:text-green-300">About</a>
          <a href="#" className="hover:text-green-300">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center py-20 px-8">
        <h2 className="text-5xl font-extrabold mb-4 text-green-400">Empowering the Future of AI Lead Generation</h2>
        <p className="text-xl mb-12 max-w-3xl text-center">Harness cutting-edge autonomous systems for unparalleled efficiency and scale. Zero-human operations, infinite potential.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-400">High-Performance AI</h3>
            <p>Process thousands of leads per second with our GPU-accelerated engines.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-400">Dynamic Scaling</h3>
            <p>Auto-adapt to demand with cloud-native architecture.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-400">Tech Specs</h3>
            <p>99.9% uptime, API integrations, real-time analytics.</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-10 py-4 rounded-md font-bold hover:bg-green-600 transition duration-300">Get Started</button>
      </main>
      <footer className="bg-gray-800 p-4 text-center text-sm">
        © 2026 Quorbz Inc. All rights reserved.
      </footer>
    </div>
  );
}
