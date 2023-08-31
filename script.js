
const testRoute = async (url) => {
     const response = await fetch(url)
     const data = await response.json()
     console.log('data:', data);
   };
   
  
   testRoute(mangaKey);




const createMangaThumbnails = (thumbnail, title, id) => {
	const ul = document.querySelector("#mangaList");
	const li = document.createElement("li");
	const img = document.createElement("img");
	const h3 = document.createElement("h3");
	
	li.className = "mangaPreview";
	img.className = "img";
	h3.className = "previewH3";
	img.src = thumbnail;
	h3.textContent = title;
	
	li.addEventListener('click', async e => {
		try{
			const response = await fetch(`${mangaKey}/${id}/moreinfo`);
        	const info = await response.json();
        	
			const closeButton = document.getElementById('closeDialog')
			const dialog = document.getElementById('moreInfoDialog');
            const moreInfoText = document.getElementById('moreInfoText')
            
            moreInfoText.textContent = info.data.moreinfo;
            dialog.showModal()
            closeButton.addEventListener('click', () => {
                dialog.close();
            });
		}catch (error) {
            console.error(error);
        }
		
	})
	
	li.append(img, h3);
	ul.append(li);
}



const displayManga = async () => {
    try {
	    const response = await fetch(mangaKey);
	    const result = await response.json();
	    let data = result.data
	    for (let i = 0; i < data.length; i++) {
	    	createMangaThumbnails(data[i].images.jpg.image_url, data[i].title, data[i].mal_id, );	
	    }
    } catch (error) {
	    console.error(error);
    }
}

displayManga()



