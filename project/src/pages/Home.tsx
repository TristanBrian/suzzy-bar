import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, CakeSlice } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=2070"
          alt="Delicious Cakes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-6 p-4">
            <h1 className="text-5xl font-bold">Welcome to Suzzy Snack Bar</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Indulge in our handcrafted cakes and delightful treats, made with love and the finest ingredients
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition"
            >
              View Our Menu <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Featured Delicacies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1089"
              alt="Chocolate Cake"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Chocolate Dream Cake</h3>
              <p className="text-gray-600">Rich chocolate layers with creamy ganache</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-bold">Ksh 3499.00</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80&w=1089"
              alt="Fruit Tart"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Fresh Fruit Tart</h3>
              <p className="text-gray-600">Seasonal fruits on vanilla custard</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-bold">KSh 2899.00</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">4.8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=1089"
              alt="Macarons"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Assorted Macarons</h3>
              <p className="text-gray-600">Delicate French macarons in various flavors</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-bold">KSh 2199.00</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <CakeSlice className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
          <p className="text-gray-600">Baked fresh every morning with premium ingredients</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Clock className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pre-order Available</h3>
          <p className="text-gray-600">Plan ahead and secure your favorite treats</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Star className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
          <p className="text-gray-600">Special occasions deserve special cakes</p>
        </div>
      </section>
    </div>
  );
}

export default Home;