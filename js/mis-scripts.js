//Imported Timer
import {
  timeLeft,
  startTimer,
  onTimesUp,
  TIME_LIMIT,
  checkTime
} from './timer.js';
startTimer()

//Imported Map
import { map } from "./map.js";

//Show Map on board
const labyrinthDiv = document.getElementById("labyrinth");
const arrayDiv = []

//Function to create a bidimensional array
function muestraMapa() {

  //Use "for" to iterate through the firs array [i]
  for (let i = 0; i < map.length; i++) {
    const row = map[i];
    const arrayBox = document.createElement("div");
    arrayBox.setAttribute("class", "arraybox");
    labyrinthDiv.appendChild(arrayBox);
    const subArrayDiv = []

    //Another "for" to iterate through the second array [j]
    for (let j = 0; j < row.length; j++) {

      //Use "if" to check each individual index's value
      //Indexs' with value "1" will be assigned a div class "wall", and will be used for collision in the future
      if (map[i][j] === 1) {
        const wall = document.createElement("div");
        wall.setAttribute("class", "wall");
        arrayBox.appendChild(wall);
        subArrayDiv.push(wall)

      //Indexs' with value "0" will be assigned a div class "path", and will allow movement to the player
      } else if (map[i][j] === 0) {
        const path = document.createElement("div");
        path.setAttribute("class", "path");
        arrayBox.appendChild(path);
        subArrayDiv.push(path)

      //Indexs' with value "2" will be assigned a div class "exit", and will mark the goal for our game
      } else if (map[i][j] === 2) {
        const exit = document.createElement("div");
        exit.setAttribute("class", "exit");
        arrayBox.appendChild(exit);
        subArrayDiv.push(exit)

      //Indexs' with value "3" will be assigned a div class "player", and will be the index which will move through the array
      } else if (map[i][j] === 3) {
        const player = document.createElement("class");
        player.setAttribute("class", "player");
        arrayBox.appendChild(player);
        subArrayDiv.push(player)
      }

      else if (map[i][j] === 4) {
        const key = document.createElement("class");
        key.setAttribute("class", "key");
        arrayBox.appendChild(key);
        subArrayDiv.push(key)
      }

      else if (map[i][j] === 5) {
        const door = document.createElement("class");
        door.setAttribute("class", "door");
        arrayBox.appendChild(door);
        subArrayDiv.push(door)
      }
    } 
    //We push the sub array of divs to the main arrayDiv
    arrayDiv.push(subArrayDiv)
  }
}
//We now call the function
muestraMapa()

//Score values
var score = 5000
var finalScore = document.querySelector(".puntuacion")
var scoreIndex = document.querySelector("#puntuacion")
var scoreID = setInterval(()=>{
  score -= 10
  scoreIndex.innerText = score
  }, 1000)

//Player
var playerMove = document.getElementsByClassName("player")

//We set the coordinates for the player to spawn in the array
var px = 31
var py = 1

//Player's movement
//We configure the player's position to equal X given coordinates
playerMove = map[px][py]

//We create the input to trigger the player(3) through the map (array)
const movement = window.addEventListener("keydown", function(e){
    switch(e.key){
        case"w":
        if (map[px-1][py] === 1){
            
            //We set a penalization when the player collides with a wall
            score -= 10
            scoreIndex.innerText = score

        } else if (map[px-1][py] === 0){
            //We exchange the value of player's current position (3) to 0 (path) and set its corresponding class.
            map[px][py] = 0
            arrayDiv[px][py].setAttribute("class", "path")

            map[px-1][py] = 3
            arrayDiv[px-1][py].setAttribute("class", "player")
            px--
        }break;

        case"a":
        if (map[px][py-1] === 1){
          
            score -= 10
            scoreIndex.innerText = score

        } else if (map[px][py-1] === 0){
          
            map[px][py] = 0
            arrayDiv[px][py].setAttribute("class", "path")

            map[px][py-1] = 3
            arrayDiv[px][py-1].setAttribute("class", "player")
            py--
            
        } else if (map[px][py-1] === 4){
          
          map[px][py] = 0
          arrayDiv[px][py].setAttribute("class", "path")

          map[px][py-1] = 3
          arrayDiv[px][py-1].setAttribute("class", "player")
          py--
          map[6][41] = 0
          arrayDiv[6][41].setAttribute("class", "path")

      }
        
        else if (map[px][py-1] === 2){
          
            map[px][py] = 0
            arrayDiv[px][py].setAttribute("class", "path")

            map[px][py-1] = 3
            arrayDiv[px][py-1].setAttribute("class", "player")
            py--
            onTimesUp()
            clearInterval(scoreID)
            finalScore.innerText = score + timeLeft
            
            $('#myModal').modal('toggle')
      
        } break;

        case"s":
        if (map[px+1][py] === 1){
          
            score -= 10
            scoreIndex.innerText = score
            
        } else if (map[px+1][py] === 0){
          
            map[px][py] = 0
            arrayDiv[px][py].setAttribute("class", "path")

            map[px+1][py] = 3
            arrayDiv[px+1][py].setAttribute("class", "player")
            px++
            
        } else if (map[px+1][py] === 5){
          
          score -= 10
          scoreIndex.innerText = score

        }break;

        case"d":
        if (map[px][py+1] === 1){
          
            score -= 10
            scoreIndex.innerText = score
            
        } else if (map[px][py+1] === 0){
          
            map[px][py] = 0
            arrayDiv[px][py].setAttribute("class", "path")

            map[px][py+1] = 3
            arrayDiv[px][py+1].setAttribute("class", "player")
            py++
            
        } else if (map[px][py+1] === 2){
          
          map[px][py] = 0
          arrayDiv[px][py].setAttribute("class", "path")

          map[px][py+1] = 3
          arrayDiv[px][py+1].setAttribute("class", "player")
          py++
          onTimesUp()
          clearInterval(scoreID)
          finalScore.innerText = score
          window.alert("You Win!")

        }break;
    }
})
