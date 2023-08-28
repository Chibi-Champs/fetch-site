    
    console.log(apiKey);
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e83074ae9msh01a992d70f3dac5p1d8bc3jsn11454281692e',
		'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
	}
};

const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e83074ae9msh01a992d70f3dac5p1d8bc3jsn11454281692e',
		'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
	}
};

const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e83074ae9msh01a992d70f3dac5p1d8bc3jsn11454281692e',
		'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
	}
};

const fetchChapter = async () => {
    try {
	    const response = await fetch(getChapters, optionss);
	    const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }

};

const fetchImg = async () => {
    try {
	    const response = await fetch(ImagUrl, option);
    	const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }
}

const fetchMang = async () => {
    try {
	    const response = await fetch(apiKey, options);
	    const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }
}

console.log(fetchMang(), fetchImg(), fetchChapter());