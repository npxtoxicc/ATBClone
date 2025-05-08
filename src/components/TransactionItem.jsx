import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TransactionItem = ({ transaction }) => {
  const navigate = useNavigate();
  const isExpense = transaction.amount < 0;
  
  return (
    <motion.div 
      className="transaction-item cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate(`/transaction/${transaction.id}`)}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          {transaction.logo ? (
            <img 
              src={transaction.logo} 
              alt={transaction.merchant} 
              className="w-12 h-12 rounded-md object-cover"
            />
          ) : (
            <div className={`w-12 h-12 rounded-md flex items-center justify-center ${isExpense ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
              {transaction.merchant.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">
                {transaction.cardNumber ? (
                  <span>{transaction.cardNumber}</span>
                ) : (
                  <span>{transaction.merchant}</span>
                )}
              </p>
              <p className="text-sm text-gray-500">{transaction.description}</p>
              {transaction.error && (
                <p className="text-xs text-red-500 mt-1">{transaction.error}</p>
              )}
            </div>
            <div className={`text-right ${isExpense ? 'text-red-500' : 'text-green-500'}`}>
              <p className="font-bold">
                {isExpense ? `-${Math.abs(transaction.amount).toFixed(2)}` : `+${transaction.amount.toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionItem;