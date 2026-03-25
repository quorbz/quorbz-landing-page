import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quorbz - Minimalist Futuristic',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8 font-sans">
      <header className="text-5xl font-light tracking-wide mb-4">Quorbz</header>
      <p className="text-xl font-light mb-8 max-w-2xl text-center">Premium AI-driven solutions designed for the modern enterprise. Clean, efficient, and focused on delivering unparalleled value.</p>
      <div className="flex space-x-6">
        <button className="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition">Discover More</button>
        <button className="border border-black px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition">Get Started</button>
      </div>
      <div className="mt-16">
        {/* Placeholder for product image */}
        <div className="w-96 h-64 bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
    </div>
  );
}
