// Unsplash API
const count = 10;
const apiKey = '8jP3xQitHC3uClSdvWSwyrZVguDmUf_Q1L1pVTz1b7U';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photes from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch (error){
        // Catch error here
    }
}

// On load
getPhotos();