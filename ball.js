let endpoint = "https://www.balldontlie.io/api/v1/teams/28"

async function getTeam() {
    const response = await fetch(endpoint)
    const data = await response.json().catch(err => console.log(err, 'error'))
    //console.log(data.full_name)
    document.getElementById("displayteam").innerHTML = "Team Name: " + data.full_name + "<br>" + "Conference: " + data.conference + "<br>" + "Division: "  + data.division;
}


function submittedit() {
    var ad = document.getElementById("team").value;
    console.log(ad);
    
    var nbaTeamMapping = {
        'Atlanta':1,
        'Boston':2                      
    };
    var nbaNumber = nbaTeamMapping[ad];
    var url = "https://www.balldontlie.io/api/v1/teams/" + nbaNumber;


    getRequest(url).then(resolveHandler, rejectHandler);

}

function resolveHandler(respJson) {
    
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


