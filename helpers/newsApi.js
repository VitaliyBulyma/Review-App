const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.SECRET_API_KEY, { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' } );

export default newsapi;
