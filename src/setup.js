import React from 'react';
import { Filters } from 'webpremios-app-hook';
import { Text } from 'react-native';


const setup = () => {
    console.log('Filters', Filters);
    
    Filters.listMenuBar('sample')
        .do( items => {
            let newItem = {
                name: 'Sample',
                icon: 'sample-icon',
                component: <Text>From Default</Text>
            };
            let newArray = items.concat(newItem);
            return newArray;
        });
    
}

export default setup;