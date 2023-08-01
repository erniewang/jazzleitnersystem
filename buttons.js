function createSongUnit(songName) {
    return `
    <div id="songUnit">
                <div class="smallBox">
                    <button style="background-color: green;" onclick="finalStage(this)">✅</button>
                    <button onclick="delBlock(this)" style="background-color: rgb(170, 95, 95);">❌</button>
                    <button id = "restart" style="background-color: rgb(0, 101, 168), 67;" onclick="resetT(this)">⬅️</button>
                    <button style="background-color: rgb(0, 101, 168), 67;" onclick="advance(this)">➡️</button>
                    <p>${songName}</p>
                    <a href="${checkUrls(songName)}" target="_blank" style="display: inline-block; background-color: gray; color: white; text-decoration: none; border-radius: 4px;">History</a>
                    <a href="https://www.youtube.com/results?search_query=${songName} backing track jazz" target="_blank" style="display: inline-block; background-color: gray; color: white; text-decoration: none; border-radius: 4px;">Backing Tracks</a>
                </div>
            </div>
    `;
}
function createSongUnitLast(songName) {
    return `
    <div id="songUnit">
                <div style="height: 100px;" class="smallBox">
                    <p>${songName}</p>
                    <a href="${checkUrls(songName)}" target="_blank" style="display: inline-block; background-color: gray; color: white; text-decoration: none; border-radius: 4px;">History</a>
                    <a href="https://www.youtube.com/results?search_query=${songName} backing track jazz" target="_blank" style="display: inline-block; background-color: gray; color: white; text-decoration: none; border-radius: 4px;">Backing Tracks</a>
                </div>
            </div>
    `;
}

//what the fuck? how to fix
function checkUrls(songName) {
    const link1 = "https://www.jazzstandards.com/compositions-0/" + songName.toLowerCase().replace(/[^a-z]/g, "") + ".htm";
    /*
    fetch(link1)
        .then(response => {
            if (response.ok) {
                console.log(link1);
                return link1;
            } else {
                console.log(`The link ${url} returned a ${response.status} status code.`);
            }
        })
        .catch(error => {
        });
        */
    return "https://www.google.com/search?q=" + songName + " jazz standard history";
}

function loadStuff(button) {
    if (button.id === "homePage") {
        document.getElementById("standards").style.visibility = "hidden";
        document.getElementById("standards").style.opacity = 0;
        document.getElementById("welcome").style.display = "inline-block";
    }
    else if (button.id === "progress") {
        document.getElementById("standards").style.visibility = "visible";
        document.getElementById("standards").style.opacity = 1;
        document.getElementById("welcome").style.display = "none";
    }
    else {
        return;
    }
}
