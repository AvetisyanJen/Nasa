import React from 'react';
import { Asteroid } from '../../types';
import './Asteroids.scss';
import { useTranslation } from 'react-i18next';




const AsteroidData: React.FC<{asteroidData: Asteroid[]}> = ({ asteroidData}) => {
    console.log(asteroidData);
    const [t] = useTranslation('global');
    const data = Object.values(asteroidData).flat(1);
    console.log(data);
    return (
        <div>

            {data.length > 0 && (
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>{t('nearbyAsteroid.name')}</th>
                            <th>{t('nearbyAsteroid.distance')}</th>
                            <th>{t('nearbyAsteroid.magnitude')}</th>
                            <th>{t('nearbyAsteroid.diameter')}</th>
                            <th>{t('nearbyAsteroid.hazardous')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{Number(item.close_approach_data[0].miss_distance.kilometers).toFixed(1)}</td>
                                <td>{item.absolute_magnitude_h}</td>
                                <td>{item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(4)}</td>
                                <td>{item.is_potentially_hazardous_asteroid ? t('nearbyAsteroid.yes') : t('nearbyAsteroid.no')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AsteroidData;
