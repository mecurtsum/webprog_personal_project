fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'a4432d19-3639-4366-b26a-afe6ff1424eb',
        'Content-Type': 'application/json',
    },
})
.then(res => res.json())
.then(json => console.log(json))