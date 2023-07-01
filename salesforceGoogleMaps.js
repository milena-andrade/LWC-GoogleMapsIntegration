import { LightningElement } from 'lwc';

export default class SalesforceGoogleMaps extends LightningElement {
    mapMarkers = [
        {
            location: {
                City: 'São Vicente',
                Country: 'BRAZIL',
                PostalCode: '11340450',
                State: 'SP',
                Street: 'Paulo Horneuax de Moura, 721',
            },
            value: 'location007',
            title: 'Casa do Cliente',
            icon: 'standard:account',
        },
    ];
    zoomLevel = 15;
    listView = 'visible';




}