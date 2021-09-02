import { Box } from '@material-ui/core';
import * as React from 'react';
import { NavigationBarProps } from '../types/types';


const NavigationBar: React.FC<NavigationBarProps> = ( {name} ) => {
    return ( 
        <Box sx={{ 
            position: "fixed",
            top: "0",
            left: "0",
            width: "96.5%", 
            height: "25px",
            bgcolor: 'primary.dark',
            margin: "0",
            padding: "12px",
            paddingLeft: "40px",
            color: 'white',
            fontFamily: "Roboto",
            fontSize: "15px",
            }}
        >
            {name}
        </Box>
     );
}
 
export default NavigationBar;