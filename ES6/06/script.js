const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let myInput = document.querySelector('input[type="text"]')

myInput.addEventListener('input', () => {
    let searchTerm = myInput.value;

    let filteredStreamers = streamers.filter(streamer =>{
        return streamer.name.includes(searchTerm);
    });

    console.log(filteredStreamers)
})

