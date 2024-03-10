async function getMatches() {


    return await fetch("https://api.cricapi.com/v1/matches?apikey=9c74cb5e-bea0-46e1-85a3-86fa9f048d93&offset=0")
    .then(data => data.json())
    .then(data => {
        if (data.status != "success") return;

        const matchesList = data.data;

        const relevantData = matchesList.filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc")
        .map(match => `${match.name}, ${match.status}`);

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;
    }).catch(e => console.log(e));
}

getMatches();
