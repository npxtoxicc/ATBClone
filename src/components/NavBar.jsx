import { NavLink, useLocation } from 'react-router-dom';
import { 
  FiCreditCard, 
  FiRepeat, 
  FiGift, 
  FiGrid 
} from 'react-icons/fi';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 shadow-lg max-w-md mx-auto">
      <div className="flex justify-around">
        <NavLink 
          to="/" 
          className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <FiCreditCard className="text-2xl mb-1" />
          <span className="text-xs">Card</span>
        </NavLink>
        
        <NavLink 
          to="/transfers" 
          className={`bottom-nav-item ${location.pathname === '/transfers' ? 'active' : ''}`}
        >
          <FiRepeat className="text-2xl mb-1" />
          <span className="text-xs">Transfers</span>
        </NavLink>
        
        <NavLink 
          to="/gifts" 
          className={`bottom-nav-item ${location.pathname === '/gifts' ? 'active' : ''}`}
        >
          <FiGift className="text-2xl mb-1" />
          <span className="text-xs">Gifts</span>
        </NavLink>
        
        <NavLink 
          to="/more" 
          className={`bottom-nav-item ${location.pathname === '/more' ? 'active' : ''}`}
        >
          <FiGrid className="text-2xl mb-1" />
          <span className="text-xs">More</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;