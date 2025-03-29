import React, { useEffect, useState } from 'react';
import { ShoppingCart, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
  is_available: boolean;
}

function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]); // State to manage cart items

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  async function fetchCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Error fetching categories:', error);
      return;
    }
    
    setCategories(data);
  }

  async function fetchProducts() {
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_available', true);
    
    if (selectedCategory) {
      query = query.eq('category_id', selectedCategory);
    }
    
    const { data, error } = await query.order('name');
    
    if (error) {
      console.error('Error fetching products:', error);
      return;
    }
    
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Added to cart:', product);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Our Menu</h1>
        <div className="flex items-center space-x-4">
          <Filter className="h-6 w-6 text-gray-500" />
          <select 
            className="border rounded-lg px-4 py-2"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-rose-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading menu items...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={product.image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1089'} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-500 font-bold">Ksh {product.price.toFixed(2)}</span>
                  <button 
                    className="bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition"
                    onClick={() => addToCart(product)} // Updated to call addToCart
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
