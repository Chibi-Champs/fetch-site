
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
	
	li.addEventListener('click', e => {
		let description = document.createElement('p')
		fetch(`${mangaKey}/${id}/moreinfo`)
		.then(res => res.json())
		.then(info => {
			description.textContent = info.data.moreinfo
			console.log(info.data.moreinfo)
		})
		let div = document.createElement('div')
		div.append(description)
		// document.body.append(div)
	
		
	})
	
	li.append(img, h3);
	ul.append(li);
	
	 li.addEventListener('click', async e => {
        try {
            const response = await fetch(`${mangaKey}/${id}/moreinfo`);
            const info = await response.json();

            // Get a reference to the dialog element and the text element inside it
            const dialog = document.getElementById('moreInfoDialog');
            const moreInfoText = document.getElementById('moreInfoText');

            // Set the text content of the dialog and open it
            moreInfoText.textContent = info.data.moreinfo;
            dialog.showModal();

            // Handle the close button
            const closeButton = document.getElementById('closeDialog');
            closeButton.addEventListener('click', () => {
                dialog.close();
            });
        } catch (error) {
            console.error(error);
        }
    });
}



const displayManga = async () => {
    try {
	    const response = await fetch(mangaKey);
	    const result = await response.json();
	    let data = result.data
	    for (let i = 0; i < data.length; i++) {
	    	createMangaThumbnails(data[i].images.jpg.image_url, data[i].title, data[i].mal_id);	
	    }
    } catch (error) {
	    console.error(error);
    }
}

displayManga()



