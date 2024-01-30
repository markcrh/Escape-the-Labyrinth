//Timer
import {
  FULL_DASH_ARRAY,
  WARNING_THRESHOLD,
  ALERT_THRESHOLD,
  COLOR_CODES,
  TIME_LIMIT,
  startTimer,
  onTimesUp,
  formatTime,
  setRemainingPathColor,
  calculateTimeFraction,
  setCircleDasharray
} from './timer.js';

//Map
import { map } from "./map.js";




// Muestra el laberinto
const labyrinthDiv = document.getElementById("labyrinth");
// console.log(labyrinthDiv);
const test = []
function muestraMapa() {
  // muestra mapa completo

  for (let i = 0; i < map.length; i++) {
    const row = map[i];
    const arrayBox = document.createElement("div");
    arrayBox.setAttribute("class", "arraybox");
    labyrinthDiv.appendChild(arrayBox);
    const test2 = []
    

    for (let j = 0; j < row.length; j++) {
      if (map[i][j] === 1) {
        // console.log("wall");
        const wall = document.createElement("div");
        wall.setAttribute("class", "wall");
        arrayBox.appendChild(wall);
        test2.push(wall)
      } else if (map[i][j] === 0) {
        // console.log("path");
        const path = document.createElement("div");
        path.setAttribute("class", "path");
        arrayBox.appendChild(path);
        test2.push(path)
      } else if (map[i][j] === 2) {
        // console.log("exit");
        const exit = document.createElement("div");
        exit.setAttribute("class", "exit");
        arrayBox.appendChild(exit);
        test2.push(exit)
      } else if (map[i][j] === 3) {
        // console.log("player");
        const player = document.createElement("class");
        player.setAttribute("class", "player");
        arrayBox.appendChild(player);
        test2.push(player)
      }
      //   console.log(map[i][j]); // ?
      //   console.log(row[j]); // ?
    }
    test.push(test2)
    console.log(test)
  }
}

console.log(muestraMapa());

// JUGARDOR

var playerMove = document.getElementsByClassName("player")
var px = 31
var py = 1
playerMove = map[px][py]

window.addEventListener("keydown", function(e){
    switch(e.key){
        case"w":
        if (map[px-1][py] === 1){
            console.log("wall")
        } else if (map[px-1][py] === 0){
            console.log("nos fuimos")
            map[px][py] = 0
            test[px][py].setAttribute("class", "path") //El array "test" nos sirve para cambiar el estilo de la coordenada del array [px][py]
            map[px-1][py] = 3
            test[px-1][py].setAttribute("class", "player")
            px--
            console.log(map)
            console.log(playerMove)
        }break;
        case"a":
        if (map[px][py-1] === 1){
            console.log("wall")
        } else if (map[px][py-1] === 0){
            console.log("nos fuimos")
            map[px][py] = 0
            test[px][py].setAttribute("class", "path")
            map[px][py-1] = 3
            test[px][py-1].setAttribute("class", "player")
            py--
            console.log(map)
        }break;
        case"s":
        if (map[px+1][py] === 1){
            console.log("wall")
        } else if (map[px+1][py] === 0){
            console.log("nos fuimos")
            map[px][py] = 0
            test[px][py].setAttribute("class", "path")
            map[px+1][py] = 3
            test[px+1][py].setAttribute("class", "player")
            px++
            console.log(map)
        }break;
        case"d":
        if (map[px][py+1] === 1){
            console.log("wall")
        } else if (map[px][py+1] === 0){
            console.log("nos fuimos")
            map[px][py] = 0
            test[px][py].setAttribute("class", "path")
            map[px][py+1] = 3
            test[px][py+1].setAttribute("class", "player")
            py++
            console.log(map)
        }break;
    }
})

console.log(playerMove)
 
