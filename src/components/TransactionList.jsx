import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import TransactionItem from './TransactionItem';
import { FiCalendar, FiSearch } from 'react-icons/fi';

const TransactionList = ({ transactions = sampleTransactions }) => {
  // Group transactions by date
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const date = format(new Date(transaction.date), 'yyyy-MM-dd');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  // Convert the grouped transactions object to an array of [date, transactions] pairs
  const groupedTransactionsArray = Object.entries(groupedTransactions);

  const formatDateHeader = (dateStr) => {
    const date = parseISO(dateStr);
    if (isToday(date)) {
      return 'Today';
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else {
      return format(date, 'd MMMM yyyy', { locale: enUS });
    }
  };

  return (
    <div className="bg-white rounded-t-3xl mt-2 shadow-lg fade-in">
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold uppercase text-gray-500">Transactions</h3>
        <div className="flex space-x-4">
          <button className="text-gray-500">
            <FiCalendar className="h-6 w-6" />
          </button>
          <button className="text-gray-500">
            <FiSearch className="h-6 w-6" />
          </button>
        </div>
      </div>

      {groupedTransactionsArray.map(([date, transactions]) => (
        <div key={date}>
          <div className="flex items-center p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold uppercase text-gray-500">
              {formatDateHeader(date)}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;