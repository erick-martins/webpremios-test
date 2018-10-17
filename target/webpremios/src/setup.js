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

            return items.concat(newItem);
        });
    
}

export default setup;

