import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiUser, 
  FiSettings, 
  FiHelpCircle, 
  FiLock,
  FiFileText,
  FiCreditCard
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ icon, title }) => {
  return (
    <motion.div 
      className="flex items-center p-4 border-b border-gray-100"
      whileTap={{ backgroundColor: '#f3f4f6' }}
    >
      <div className="mr-4 text-gray-600">
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </motion.div>
  );
};

const MoreScreen = () => {
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
        <h1 className="text-xl font-semibold">More</h1>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center px-4 py-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
            <FiUser className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Əzizova Anami Ağasən q.</h2>
            <p className="text-gray-500">+994 70 235 55 70</p>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          <MenuItem 
            icon={<FiCreditCard className="h-6 w-6" />}
            title="My Cards"
          />
          
          <MenuItem 
            icon={<FiFileText className="h-6 w-6" />}
            title="Statements"
          />
          
          <MenuItem 
            icon={<FiLock className="h-6 w-6" />}
            title="Security"
          />
          
          <MenuItem 
            icon={<FiSettings className="h-6 w-6" />}
            title="Settings"
          />
          
          <MenuItem 
            icon={<FiHelpCircle className="h-6 w-6" />}
            title="Help & Support"
          />
        </div>
        
        <div className="p-4 mt-8">
          <button className="w-full bg-gray-100 py-3 rounded-lg font-medium text-gray-700">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreScreen;