import React from 'react';
import colors from '../../config/colors';

export function TravelIcon({ fillColor = colors.text,size=25 }) {
    return <svg width={size} height={size} viewBox="0 0 959.192 959.192" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M923.777,2.34l-101.5,46.2c-6.5,3-12.5,7.1-17.6,12.2l-165.4,165.5l-569.6-68.3c-10.3-1.2-20.7,2.3-28,9.7l-31.7,31.7
		c-16.8,16.8-11.6,45.2,10.1,54.9l408.2,183l-117.2,117.2h-204.7c-9,0-17.6,3.6-24,9.899l-17.1,17.2c-17,17-11.4,45.7,10.6,55.101
		l172.7,74l74,172.699c9.4,22,38.2,27.601,55.101,10.601l17.199-17.2c6.4-6.4,9.9-15,9.9-24v-204.7l117.2-117.2l183,408.301
		c9.7,21.699,38.1,26.899,54.899,10.1l31.7-31.7c7.4-7.4,10.9-17.7,9.7-28l-68.4-569.6l165.5-165.5c5.101-5.1,9.2-11,12.2-17.6
		l46.2-101.5C966.478,14.44,944.877-7.26,923.777,2.34z"/>
        </g>

    </svg>
}