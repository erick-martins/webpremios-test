import React from 'react';
import { Filters } from 'webpremios-app-hook';
import MyCustomComponent from './components/MyCustomComponent';



const setup = () => {

    Filters.listMenuBar('sample')
        .do( items => {
            debugger;
            let newItem = {
                name: 'Sample',
                icon: 'sample-icon',
                component: <MyCustomComponent />
            };
            // Filters should always returns the new subject
            return [...items, newItem];
        });
    
}

export default setup;

