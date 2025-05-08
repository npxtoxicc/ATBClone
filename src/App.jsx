import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TransfersScreen from './screens/TransfersScreen';
import GiftsScreen from './screens/GiftsScreen';
import MoreScreen from './screens/MoreScreen';
import TransactionDetails from './screens/TransactionDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen max-w-md mx-auto bg-white text-gray-900 relative pb-16 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-6 bg-white z-50"></div>
      <main className="flex-1 pt-6">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/transfers" element={<TransfersScreen />} />
          <Route path="/gifts" element={<GiftsScreen />} />
          <Route path="/more" element={<MoreScreen />} />
          <Route path="/transaction/:id" element={<TransactionDetails />} />
        </Routes>
      </main>
      
      <NavBar />
    </div>
  );
}

export default App;