'use strict';

if (nagigator.geolocation) {

    const successCallBack = (position) => {
        console.log('position', position);
        const link = document.createElement('a');
        link.setAttribute('href', `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`);

        link.setAttribute('target', '_blank');
        link.innerText = 'Click Here to see your position';
        document.querySelector('body').appendChild(link);
        
    }
}