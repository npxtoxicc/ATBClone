import { motion } from 'framer-motion';
import { FiArrowLeft, FiUser, FiCreditCard, FiPhone, FiGlobe } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const TransferOption = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="flex items-center p-4 border-b border-gray-100"
      whileTap={{ backgroundColor: '#f3f4f6' }}
    >
      <div className="bg-indigo-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

const TransfersScreen = () => {
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
        <h1 className="text-xl font-semibold">Transfers</h1>
      </div>
      
      <div className="divide-y divide-gray-100">
        <TransferOption 
          icon={<FiUser className="text-indigo-600" />}
          title="To Contacts"
          description="Transfer money to your contacts"
        />
        
        <TransferOption 
          icon={<FiCreditCard className="text-indigo-600" />}
          title="To Card"
          description="Transfer to any card with 16-digit number"
        />
        
        <TransferOption 
          icon={<FiPhone className="text-indigo-600" />}
          title="To Phone Number"
          description="Transfer to mobile phone number"
        />
        
        <TransferOption 
          icon={<FiGlobe className="text-indigo-600" />}
          title="International Transfer"
          description="Send money worldwide"
        />
      </div>
    </div>
  );
};

export default TransfersScreen;