import React from 'react';
import colors from '../../config/colors';

export function WorkIcon({fillColor=colors.text}) {
    return <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H2" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12V14" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12V14" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       
    </svg>
}