import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <p className="text-gray-600 flex items-center">
            Made with <Heart className="h-4 w-4 text-rose-500 mx-1" /> by Tristan.dev
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;