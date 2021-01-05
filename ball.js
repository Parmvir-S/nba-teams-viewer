let endpoint = "https://www.balldontlie.io/api/v1/teams/28"

async function getTeam() {
    const response = await fetch(endpoint)
    const data = await response.json().catch(err => console.log(err, 'error'))
    //console.log(data.full_name)
    document.getElementById("displayteam").innerHTML = "Team Name: " + data.full_name + "<br>" + "Conference: " + data.conference + "<br>" + "Division: "  + data.division;
}


function submittedit() {
var ad = document.getElementById("team").value;
endpoint = "https://www.balldontlie.io/api/v1/teams/28" + ad;
}


