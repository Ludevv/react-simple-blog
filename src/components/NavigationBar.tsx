import * as React from 'react';
import { NavigationBarProps } from '../types/types';


const NavigationBar: React.FC<NavigationBarProps> = ( {name} ) => {
    return ( 
        <nav>
            {name}
        </nav>
     );
}
 
export default NavigationBar;