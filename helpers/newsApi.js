const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('e2ee5f0e86f945828947853852bb91a9', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' } );

export default newsapi;