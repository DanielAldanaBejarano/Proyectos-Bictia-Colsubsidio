function getCharacter(){
    /* Get input number */
    let charactersNumber = document.getElementById('search-input').value 
    document.getElementById("cards-container").value = ""
    /* Return numbers in title */
    document.getElementById('titleNumbers').innerHTML = `<h1 class="text-center"> Los primeros ${charactersNumber} personajes son: </h1>`
    /* Call number of characters */
    for (let index = 1; index <= charactersNumber; index++) {
        /* Url for index number */
        let url = `https://rickandmortyapi.com/api/character/${index}`
        /* Fetch */
        fetch(url)
            /* Response in .json */
            .then(res => res.json())
            /* Data to print */
            .then(data => {
                let html = 
                            `<section class="mt-4" id="main-section">                                
                                <div class="d-flex flex-wrap">                                                       
                                    <div class="bg-dark d-flex flex-column p-5 m-3">                                        
                                        <img class="img-fluid rounded-circle img-size" src="${data.image}" alt="characterPicture" id="charImg">
                                        <header class="text-white">                           
                                        <h6 id="charId">
                                            ID: ${data.id}
                                        </h6>                        
                                        <h6 id="charName">
                                            Nombre: ${data.name}
                                        </h6>
                                        <h6 id="charGender">                                        
                                            Género: ${data.gender}
                                        </h6>
                                        <h6 id="charSpecies">                                        
                                            Especie: ${data.species}
                                        </h6>
                                        <h6 id="charStatus">
                                            Estado: ${data.status}
                                        </h6>
                                        <h6 id="charLocation">
                                            Ubicación: ${data.location.name}
                                        </h6>
                                        </div>
                                    </div>
                                </div>
                            </section>`
                /* Print character card */
                document.getElementById("cards-container").innerHTML += html            
            }) /* Data to print ends */
    } /* For ends */
}/* getCharacter function ends */





