import { useTranslation } from 'react-i18next';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [t] = useTranslation('global');
  return (
    <header className='navbar'>
      <ul className='nav'>
        <li><Link to='/nasa_photo'>{t('navBar.astronomyPhoto')}</Link></li>
        <li><Link to='/nearby_asteroids'>{t('navBar.nearbyAsteroid')}</Link></li>
        <li><Link to='/submit_new_planet'>{t('navBar.submitPlanet')}</Link></li>
      </ul>
    </header>
  );
};

export default NavBar;

