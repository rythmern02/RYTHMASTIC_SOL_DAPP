import { useRouter } from 'next/router';
import React from 'react';

const Homepage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/Homepage2');
  };
 
  return (
    <div className="bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 text-white font-sans h-screen flex flex-col justify-center items-center rythmastic_bg">
      <p className="text-5xl font-bold mb-8">Welcome to Rythmastic</p>
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition"
        onClick={handleRedirect}
      >
        Explore Music
      </button>
    </div>
  );
};

export default Homepage;
