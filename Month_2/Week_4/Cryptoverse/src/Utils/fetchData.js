export const coinRankingApi = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		'x-rapidapi-key': process.env.REACT_APP_COIN_KEY,
	}
};

export const CryptocurrencyNews = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
		'x-rapidapi-key': process.env.REACT_APP_NEWS_KEY, 
	}
};

// for sending the converted data  when user provide url and key
export const fetchdata = async(url,options)=>{
    let response = await fetch(url,options);
    let data = await response.json();
    return data;
}