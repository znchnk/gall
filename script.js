const wrapper = document.querySelector('.wrapper');

function createCard(cardObj) {
    return `
    <div class="card">
        <div class="header">            
            <img class="header-image" src="http://localhost:3001/lorde.jpg" alt="avatar">
            <div class="header-title">
                ${cardObj.author}
            </div>
        </div>
        <div class="image-wrapper">
            <img class="image" src="${cardObj.download_url}" alt="test image">
        </div>
        <div class="content">
            She would be half a planet away, floating in a turquoise sea, dancing by moonlight to flamenco guitar.
        </div>        
    </div>
    `;

}

fetch('https://picsum.photos/v2/list')

    .then(function(response) {
        return response.json();
    })
    .then((data)=> {       
        let cardList = '';

        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)
        })

        wrapper.innerHTML = cardList;

        let msnry;
        setTimeout(() => {
            msnry = new Masonry (wrapper);
        }, 1000)

        setTimeout(()=> {
            msnry.reloadItems();

        }, 2000)
    });