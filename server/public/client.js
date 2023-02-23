console.log('script sourced');

function getArtists() {
    // Axios GET request
    axios.get('/artist').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let serverArtists = response.data;
        let contentDiv = document.querySelector('#artistTableBody');
        contentDiv.innerHTML = '';
        for(let artist of serverArtists) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}

getArtists();

// TODO This function will push artist info into new object, that will get pushed into artistListArray
function submitArtist(event) {
    // *stops page from refreshing automatically
    event.preventDefault();
    // confirming location in function
    console.log('In submitForm function');
    //setting vars for each input value
    let artistName = document.querySelector('#nameInput').value;
    let artistBirth = document.querySelector('#bornInput').value;
    let artistDeath = document.querySelector('#deadInput').value;
    // logging all inputs
    console.log('Input values: ', artistName, artistBirth, artistDeath);
    // storing inputs into object to get pushed into array in server.js
    let artistForServer = {
        name: artistName,
        born: artistBirth,
        died: artistDeath
    };
    console.log(artistForServer);

    // axios.post will take user input and send to server
    //! Make add.post on server side.
    axios.post('/artist', artistForServer).then( (response) => {
        console.log('mental check');
        console.log(response);
        console.log('sanity check');
        getArtists();
    }).catch((error) => {
        console.log(error);
        alert(`Dis ain't right, dawg.`);
    })
}


// TODO Add ajax request for /songs and display on DOM

// function getSongs() {
//     axios.get('/song').then((response) => {
//         console.log(response);
//         // Creating a variable to contain the data of response
//         let serverSongs = response.data;
//         let contentDiv = document.querySelector('#songTableBody');
//         for (let song of serverSongs) {
//             contentDiv.innerHTML += `
//                 <tr>
//                     <td></td>
//                     <td></td>
//                 </tr>
//             `;
//         }
//     })
// }
