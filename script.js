
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
			const res = await fetch(`${mangaKey}/${id}/reviews`)
			const response = await fetch(`${mangaKey}/${id}`);
        	const info = await response.json();
        	const reviews = await res.json()
        	console.log(reviews.data)
        	
			const closeButton = document.getElementById('closeDialog')
			const closeReview = document.getElementById('closeReview')
			
			const reviewButton = document.getElementById('reviewButton')
			const reviewDialog = document.getElementById('reviewDialog')
			const review = document.getElementById('review')
			
			const dialog = document.getElementById('moreInfoDialog');
            const moreInfoText = document.getElementById('moreInfoText')
            const background = document.getElementById('background')
            const title = document.getElementById('title')
            const author = document.getElementById('author')

            title.textContent = info.data.title
            author.textContent = ''
            info.data.authors.forEach(({ name }) => author.textContent += ` ${name}`)
            moreInfoText.textContent = info.data.synopsis;
            dialog.showModal()
            background.textContent = info.data.background
            closeButton.addEventListener('click', () => {
                dialog.close();
            });
            
            review.textContent = reviews.data[Math.floor(Math.random() * reviews.data.length)].review
            reviewButton.addEventListener('click', e => {
            	reviewDialog.showModal()
            })
            closeReview.addEventListener('click', () => {
                reviewDialog.close();
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
	    let { data } = result
	    data.forEach(
	    	manga => createMangaThumbnails(manga.images.jpg.image_url, manga.title, manga.mal_id))
    } catch (error) {
	    console.error(error);
    }
}

displayManga()



