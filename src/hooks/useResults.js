import { useState, useEffect } from 'react';

// API
import yelp from '../api/yelp';

export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    // Gets Search Results from Yelp API
    const searchAPI = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    // Run Initial Search onLoad
    useEffect(() => {
        searchAPI('pasta')
    }, [])

    return [ searchAPI, results, errorMessage ];
};