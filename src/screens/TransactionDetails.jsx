import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiShare2 } from 'react-icons/fi';
import { format } from 'date-fns';

const TransactionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock transactions data - in real app, fetch from API
  const transactions = {
    1: {
      id: 1,
      date: '2025-05-08T14:30:00',
      merchant: 'Unibank',
      cardNumber: '541124******8034',
      description: 'Transfer to card',
      amount: -8.00,
      logo: 'https://www.unibank.az/assets/images/logonew-orange.png',
      status: 'Completed',
      category: 'Transfer'
    },
    2: {
      id: 2,
      date: '2025-05-08T19:45:00',
      merchant: 'ZEFER FILIALI',
      description: 'Communication services',
      amount: -1.00,
      error: 'Yanlış PIN kod',
      status: 'Failed',
      category: 'Communication'
    },
    3: {
      id: 3,
      date: '2025-05-08T18:23:42',
      merchant: 'ARAZ MARKET',
      description: 'Grocery and supermarkets',
      amount: -1.29,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Araz_Supermarket_logo.jpeg',
      status: 'Completed',
      category: 'Shopping'
    },
    4: {
      id: 4,
      date: '2025-05-07T18:03:12',
      merchant: 'YEMEKLERIN CATDIRILMASI',
      description: 'Cafes and restaurants',
      amount: -4.00,
      status: 'Completed',
      category: 'Food & Drinks'
    },
    5: {
      id: 5,
      date: '2025-05-06T18:30:00',
      merchant: 'Withdrawal from account',
      description: 'Withdrawal',
      amount: -163.00,
      status: 'Completed',
      category: 'Withdrawal'
    },
    6: {
      id: 6,
      date: '2025-05-06T15:45:00',
      merchant: 'KAPITAL BANK',
      description: 'Card replenishment',
      amount: 193.00,
      logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
      status: 'Completed',
      category: 'Deposit'
    },
    7: {
      id: 7,
      date: '2025-04-23T12:30:00',
      merchant: 'SPOTIFY',
      description: 'Rest and entertainment',
      amount: -4.99,
      error: 'Vəsait çatışmazlığı',
      status: 'Failed',
      category: 'Entertainment'
    },
    8: {
      id: 8,
      date: '2025-04-09T16:20:00',
      merchant: 'PAYTR*ITEMPAZAR',
      description: 'Rest and entertainment',
      amount: -1.02,
      status: 'Completed',
      category: 'Entertainment'
    },
    9: {
      id: 9,
      date: '2025-04-05T14:15:00',
      merchant: 'KAPITAL BANK',
      cardNumber: '41697388******9984',
      description: 'Transfer to card',
      amount: -7.00,
      logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
      status: 'Completed',
      category: 'Transfer'
    },
    10: {
      id: 10,
      date: '2025-04-05T14:10:00',
      merchant: 'KAPITAL BANK',
      description: 'Card replenishment',
      amount: 7.00,
      logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
      status: 'Completed',
      category: 'Deposit'
    },
    11: {
      id: 11,
      date: '2025-04-04T11:30:00',
      merchant: 'AZERFON +994702355570',
      description: 'Rest and entertainment',
      amount: -1.00,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nar-new-logo.png',
      status: 'Completed',
      category: 'Entertainment'
    },
    12: {
      id: 12,
      date: '2025-04-02T13:45:00',
      merchant: 'RAHAT MARKET CRESCENT',
      description: 'Grocery and supermarkets',
      amount: -0.80,
      status: 'Completed',
      category: 'Shopping'
    },
    13: {
      id: 13,
      date: '2025-04-02T13:40:00',
      merchant: 'From: 523915*******1820',
      description: 'Card replenishment',
      amount: 4.00,
      logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
      status: 'Completed',
      category: 'Deposit'
    },
    14: {
      id: 14,
      date: '2025-03-30T10:15:00',
      merchant: 'AZERFON +994702355570',
      description: 'Rest and entertainment',
      amount: -1.00,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nar-new-logo.png',
      status: 'Completed',
      category: 'Entertainment'
    },
    15: {
      id: 15,
      date: '2025-03-29T16:30:00',
      merchant: 'DUOLINGO, INC.',
      description: 'Appliances',
      amount: -132.00,
      status: 'Completed',
      category: 'Education'
    },
    16: {
      id: 16,
      date: '2025-03-29T16:25:00',
      merchant: 'KAPITAL BANK',
      description: 'Card replenishment',
      amount: 25.00,
      logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
      status: 'Completed',
      category: 'Deposit'
    },
    17: {
      id: 17,
      date: '2025-03-29T16:20:00',
      merchant: 'MilliOn',
      description: 'Card replenishment',
      amount: 99.00,
      status: 'Completed',
      category: 'Deposit'
    }
  };

  const transaction = transactions[id];

  if (!transaction) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-700">Transaction not found</h1>
          <button 
            onClick={() => navigate(-1)} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2">
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">Transaction Details</h1>
        <div className="flex space-x-4">
          <button className="p-2">
            <FiDownload className="h-6 w-6" />
          </button>
          <button className="p-2">
            <FiShare2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {transaction.logo ? (
                <img 
                  src={transaction.logo}
                  alt={transaction.merchant}
                  className="w-16 h-16 rounded-lg mr-4 object-contain"
                />
              ) : (
                <div className={`w-16 h-16 rounded-lg mr-4 flex items-center justify-center ${transaction.amount < 0 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
                  {transaction.merchant.charAt(0)}
                </div>
              )}
              <div>
                <h2 className="font-semibold">{transaction.merchant}</h2>
                <p className="text-sm text-gray-500">{transaction.description}</p>
                {transaction.error && (
                  <p className="text-xs text-red-500 mt-1">{transaction.error}</p>
                )}
              </div>
            </div>
            <span className={`text-xl font-bold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
              {transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount).toFixed(2)} ₼
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Date</span>
              <span>{format(new Date(transaction.date), 'dd MMM yyyy HH:mm')}</span>
            </div>
            {transaction.cardNumber && (
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Card number</span>
                <span>{transaction.cardNumber}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Category</span>
              <span>{transaction.category}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Status</span>
              <span className={transaction.status === 'Completed' ? 'text-green-500' : 'text-red-500'}>
                {transaction.status === 'Completed' ? 'Completed' : 'Error'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;