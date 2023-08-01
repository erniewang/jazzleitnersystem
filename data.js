//make it so it directly provides links to backing tracks
var songIndex = 0;
var failed = [];

function add(button, words) {
    let rectangle = (button.parentNode.parentNode);
    let newSongUnit = document.createElement('div');
    if (words || words === 0) {
        if (button.id === "finalPosition") {
            newSongUnit.innerHTML = createSongUnitLast(words);
        }
        else {
            newSongUnit.innerHTML = createSongUnit(words);
        }
    }
    else {
        //about the index
        if (failed.length == 0) {
            songIndex++;
            newSongUnit.innerHTML = createSongUnit(orgoData[songIndex][0]);
            hashTable[orgoData[songIndex][0]][1] = 1;
        }
        else {
            let popedsong = failed.pop();
            newSongUnit.innerHTML = createSongUnit(popedsong);
        }
    }
    rectangle.appendChild(newSongUnit);
}


function finalStage(button) {
    let rectangle = (button.parentNode.parentNode.parentNode);
    const paragraphElement = rectangle.querySelector('p').textContent;
    hashTable[paragraphElement][1] = 7;
    let finalButton;
    finalButton = document.getElementById("finalPosition");
    add(finalButton, paragraphElement);
    delBlock(button);
    failed.pop();
}

function resetT(button) {
    let rectangle = (button.parentNode.parentNode.parentNode);
    const paragraphElement = rectangle.querySelector('p').textContent;
    hashTable[paragraphElement][1] = 1;
    let finalButton;
    finalButton = document.getElementById("firstButton");
    add(finalButton, paragraphElement);
    delBlock(button);
    failed.pop();
}

//MAJOR PROBLEM, NOT DELETING THE CORRECT THING
function delBlock(button) {
    const error = new Error();
    const stack = error.stack.split("\n");;
    let rectangle = (button.parentNode.parentNode);
    let name = rectangle.querySelector('p').textContent;
    if (stack.length <= 3) {
        hashTable[name][1] = 0;
    }
    failed.push(name);
    rectangle.remove();
}


var teirs = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7'];

function advance(button) {
    let level = (button.parentNode.parentNode.parentNode.parentNode);
    if (level.id === 'level6') {
        finalStage(button);
        return;
    }
    level = document.getElementById('level' + (parseInt(level.id.match(/\d+/)) + 1));
    let newSongUnit = document.createElement('div');
    newSongUnit.innerHTML = createSongUnit(button.parentNode.parentNode.querySelector('p').textContent);
    hashTable[newSongUnit.querySelector('p').textContent][1]++;
    level.appendChild(newSongUnit);
    delBlock(button);
    failed.pop();
}