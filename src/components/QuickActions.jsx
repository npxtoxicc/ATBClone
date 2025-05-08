import { FiPlus, FiArrowRight, FiSmartphone } from 'react-icons/fi';

const ActionButton = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-center text-sm">{title}</span>
      {subtitle && <span className="text-center text-xs">{subtitle}</span>}
    </div>
  );
};

const QuickActions = () => {
  return (
    <div className="flex justify-around px-4 py-6">
      <ActionButton 
        icon={<FiPlus className="h-6 w-6" />} 
        title="Top up" 
        subtitle="card" 
      />
      
      <ActionButton 
        icon={<FiArrowRight className="h-6 w-6" />} 
        title="Transfer" 
        subtitle="from card" 
      />
      
      <ActionButton 
        icon={<FiSmartphone className="h-6 w-6" />} 
        title="Mobile" 
        subtitle="operators" 
      />
    </div>
  );
};

export default QuickActions;