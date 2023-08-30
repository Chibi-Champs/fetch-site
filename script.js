const fetchHandler = async (url) => {
    try {
	    const response = await fetch(url);
	    // const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }

};

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

displayManga()
const preview = document.querySelectorAll('.mangaPreview')
console.log(preview)
document.body.addEventListener('click', e => {
	console.log(e)
})


