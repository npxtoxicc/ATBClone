import { motion } from 'framer-motion';
import { FiArrowLeft, FiGift, FiShoppingBag, FiCoffee, FiWifi } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const GiftCategory = ({ icon, title, color }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4"
      whileHover={{ scale: 1.05 }}
    >
      <div className={`${color} p-4 rounded-full mb-2`}>
        {icon}
      </div>
      <span className="text-sm text-center">{title}</span>
    </motion.div>
  );
};

const GiftsScreen = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-full">
      <div className="flex items-center p-4 border-b border-gray-100">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4"
        >
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Gifts & Rewards</h1>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <GiftCategory 
            icon={<FiGift className="text-white h-6 w-6" />}
            title="Special Offers"
            color="bg-purple-500"
          />
          
          <GiftCategory 
            icon={<FiShoppingBag className="text-white h-6 w-6" />}
            title="Shopping"
            color="bg-blue-500"
          />
          
          <GiftCategory 
            icon={<FiCoffee className="text-white h-6 w-6" />}
            title="Food & Drinks"
            color="bg-yellow-500"
          />
          
          <GiftCategory 
            icon={<FiWifi className="text-white h-6 w-6" />}
            title="Digital Services"
            color="bg-red-500"
          />
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Featured Rewards</h2>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-2">20% Cashback</h3>
            <p className="mb-4">Get 20% cashback on your first purchase at partner stores</p>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium">
              View Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsScreen;