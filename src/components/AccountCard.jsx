import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiLock, FiTrendingUp } from 'react-icons/fi';

const AccountCard = ({ account, currentIndex, index, onSwipe }) => {
  const [showBalance, setShowBalance] = useState(true);
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  return (
    <AnimatePresence initial={false} custom={currentIndex}>
      {index === currentIndex && (
        <motion.div 
          className="absolute w-full px-4 py-6"
          key={account.id}
          custom={currentIndex}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) {
              onSwipe(1);
            } else if (swipe > 10000) {
              onSwipe(-1);
            }
          }}
        >
          <div className="bg-yellow-400 rounded-xl p-6 shadow-lg relative overflow-hidden">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="absolute right-6 top-6 w-16 opacity-90"
            />
            <img 
              src="https://atb.az/wp-content/uploads/2023/01/logo.svg"
              alt="ATB"
              className="w-16 mb-8"
            />
            
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">
                {showBalance ? account.balance.toFixed(2) : '••••••'}
              </span>
              <span className="ml-2 text-xl">₼</span>
            </div>

            <div className="flex justify-around mt-8">
              <button className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-lg mb-2">
                  <FiLock className="h-6 w-6" />
                </div>
                <span className="text-sm">Block card</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-lg mb-2">
                  <FiTrendingUp className="h-6 w-6" />
                </div>
                <span className="text-sm">Limits</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountCard;