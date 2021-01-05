/*let endpoint = "https://www.balldontlie.io/api/v1/teams/28"

async function getTeam() {
    const response = await fetch(endpoint)
    const data = await response.json().catch(err => console.log(err, 'error'))
    //console.log(data.full_name)
    document.getElementById("displayteam").innerHTML = "Team Name: " + data.full_name + "<br>" + "Conference: " + data.conference + "<br>" + "Division: "  + data.division;
}*/
setInterval(timefunc, 0);
function timefunc() {
    let d = new Date();
    document.getElementById("timefunc").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
  }

function submittedit() {
    var ad = document.getElementById("team").value;
    console.log(ad);
    var nbaTeamMapping = {
        'Atlanta':1,
        'Boston':2,
        'Brooklyn':3,
        'Charlotte':4,
        'Chicago':5,
        'Cleveland':6,
        'Dallas':7,
        'Denver':8,
        'Detroit':9,
        'Golden State':10,
        'Houston':11,
        'Indiana':12,
        'LA Clippers': 13,
        'LA Lakers':14,
        'Memphis':15,
        'Miami':16,
        'Milwaukee':17,
        'Minnesota':18,
        'New Orleans':19,
        'New York':20,
        'Oklahoma':21,
        'Orlando':22,
        'Philadelphia':23,
        'Phoenix':24,
        'Portland':25,
        'Sacramento':26,
        'San Antonio':27,
        'Toronto':28,
        'Utah':29,
        'Washington':30,
    };
    var nbaNumber = nbaTeamMapping[ad];
    var url = "https://www.balldontlie.io/api/v1/teams/" + nbaNumber;


    getRequest(url).then(resolveHandler, rejectHandler);

}


function resolveHandler(respJson) {
    console.log(respJson)
    document.getElementById("results").innerHTML = 
    "Abbreviation: " + respJson.abbreviation + "<br>" + "City: " + respJson.city +
    "<br>" + "Conference: " + respJson.conference + "<br>" + 
    "Division: " + respJson.division + "<br>" + "Team Name: " + respJson.full_name; 
}

function rejectHandler(error) {
    console.log(error);
}

function getRequest(url) {
    var promiseObj = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if(xhr.status == 200) {
                var resp = xhr.responseText;
                var respJson = JSON.parse(resp);
                resolve(respJson);
            } else {
                reject(new Error(xhr.responseText));
            }
        }
        xhr.onerror = function() {
            reject(new Error("Client-side error"));
        }
        xhr.send();
    });
    return promiseObj;
}