import { useState } from 'react';
import AccountCard from '../components/AccountCard';
import QuickActions from '../components/QuickActions';
import TransactionList from '../components/TransactionList';
import CardIndicator from '../components/CardIndicator';

// Mock data
const accounts = [
  { id: 1, name: 'AZN', balance: 15.71 },
  { id: 2, name: 'AZN', balance: 15.71 },
];

const transactions = [
  {
    id: 1,
    date: '2025-05-08',
    merchant: 'Unibank',
    cardNumber: '541124******8034',
    description: 'Transfer to card',
    amount: -8.00,
    logo: 'https://www.unibank.az/assets/images/logonew-orange.png',
    status: 'Completed'
  },
  {
    id: 2,
    date: '2025-05-08',
    merchant: 'ZEFER FILIALI',
    description: 'Communication services',
    amount: -1.00,
    error: 'Yanlış PIN kod',
    status: 'Failed'
  },
  {
    id: 3,
    date: '2025-05-08',
    merchant: 'ARAZ MARKET',
    description: 'Grocery and supermarkets',
    amount: -1.29,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Araz_Supermarket_logo.jpeg',
    status: 'Completed'
  },
  {
    id: 4,
    date: '2025-05-07',
    merchant: 'YEMEKLERIN CATDIRILMASI',
    description: 'Cafes and restaurants',
    amount: -4.00,
    status: 'Completed'
  },
  {
    id: 5,
    date: '2025-05-06',
    merchant: 'Withdrawal from account',
    description: 'Withdrawal',
    amount: -163.00,
    status: 'Completed'
  },
  {
    id: 6,
    date: '2025-05-06',
    merchant: 'KAPITAL BANK',
    description: 'Card replenishment',
    amount: +193.00,
    logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
    status: 'Completed'
  },{
  id: 7,
  date: '2025-04-23',
  merchant: 'SPOTIFY',
  error: 'Vəsait çatışmazlığı',
  description: 'Rest and entertainment',
  amount: -4.99,
  status: 'Failed'
},
{
  id: 8,
  date: '2025-04-09',
  merchant: 'PAYTR*ITEMPAZAR',
  description: 'Rest and entertainment',
  amount: -1.02,
  status: 'Completed'
},
{
  id: 9,
  date: '2025-04-05',
  merchant: 'KAPITAL BANK',
  cardNumber: '41697388******9984',
  description: 'Transfer to card',
  amount: -7.00,
  logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
  status: 'Completed'
},
{
  id: 10,
  date: '2025-04-05',
  merchant: 'KAPITAL BANK',
  description: 'Card replenishment',
  amount: +7.00,
  logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
  status: 'Completed'
},
{
  id: 11,
  date: '2025-04-04',
  merchant: 'AZERFON +994702355570',
  description: 'Rest and entertainment',
  amount: -1.00,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nar-new-logo.png',
  status: 'Completed'
},
{
  id: 12,
  date: '2025-04-02',
  merchant: 'RAHAT MARKET CRESCENT',
  description: 'Grocery and supermarkets',
  amount: -0.80,
  status: 'Completed'
},
{
  id: 13,
  date: '2025-04-02',
  merchant: 'From: 523915*******1820',
  description: 'Card replenishment',
  amount: +4.00,
  logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
  status: 'Completed'
},
{
  id: 14,
  date: '2025-03-30',
  merchant: 'AZERFON +994702355570',
  description: 'Rest and entertainment',
  amount: -1.00,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nar-new-logo.png',
  status: 'Completed'
},
{
  id: 15,
  date: '2025-03-29',
  merchant: 'DUOLINGO, INC.',
  description: 'Appliances',
  amount: -132.00,
  status: 'Completed'
},
{
  id: 16,
  date: '2025-03-29',
  merchant: 'KAPITAL BANK',
  description: 'Card replenishment',
  amount: +25.00,
  logo: 'https://jetchatbot.kapitalbank.az/files/static-images/content/2023/8/1/63c6723da04cbed2c81ee1ae/ef819380-a4b3-4be8-b296-40d5d55b0c88.png',
  status: 'Completed'
},
{
  id: 17,
  date: '2025-03-29',
  merchant: 'MilliOn',
  description: 'Card replenishment',
  amount: +99.00,       
  status: 'Completed'
},
];

const HomeScreen = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const handleSwipe = (direction) => {
    const newIndex = currentCardIndex + direction;
    if (newIndex >= 0 && newIndex < accounts.length) {
      setCurrentCardIndex(newIndex);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      <div className="h-72 relative overflow-hidden bg-gray-50">
        {accounts.map((account, index) => (
          <AccountCard 
            key={account.id}
            account={account}
            currentIndex={currentCardIndex}
            index={index}
            onSwipe={handleSwipe}
          />
        ))}
      </div>
      
      <CardIndicator 
        totalCards={accounts.length}
        currentIndex={currentCardIndex}
        setCurrentIndex={setCurrentCardIndex}
      />
      
      <div className="flex-1">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default HomeScreen;