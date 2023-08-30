    
console.log(apiKey);
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '319070a8b0msh0d2ddac304140e7p12bd7djsnd62c0587b586',
		'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
	}
};


const fetchChapter = async () => {
    try {
	    const response = await fetch(getChapters, options);
	    const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }

};

const fetchImg = async (id) => {
    try {
	    const response = await fetch(`https://mangaverse-api.p.rapidapi.com/manga/image?id=${id}`, options);
    	const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }
}

// const fetchMang = async () => {
//     try {
// 	    const response = await fetch(apiKey, options);
// 	    const result = await response.json();
// 	    console.log(result);
//     } catch (error) {
// 	    console.error(error);
//     }
// }
const createMangaThumbnails = (thumbnail, title) => {
	const ul = document.querySelector("#mangaList");
	const li = document.createElement("li");
	const img = document.createElement("img");
	const h3 = document.createElement("h3");
	
	li.className = "mangaPreview";
	img.className = "img";
	h3.className = "previewH3";
	img.src = thumbnail;
	h3.textContent = title;
	li.append(img, h3);
	ul.append(li);
}

const displayManga = async () => {
    try {
	    const response = await fetch(apiKey, options);
	    const result = await response.json();
	    let data = result.data
	    for (let i = 0; i < data.length; i++) {
	    	createMangaThumbnails(data[i].thumb, data[i].title)
	    	console.log(result);	
	    }
    } catch (error) {
	    console.error(error);
    }
}
// fetchMang()
// fetchChapter()
fetchImg('647fedf7c71c2c9122b31939')
// console.log(fetchChapter(), fetchImg(fetchMang().data[0].id))

let chapter = document.querySelector('#chapter')
let page = document.createElement('img')

console.log(fetchChapter(), displayManga(), fetchImg());
