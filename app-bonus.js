/*
    Write a function that takes a string representing the position on a chess board (A1-H8). 

    Return a list of all of the valid ending squares for a knight after 1 move from this position. 

    For example: "A3" -> ["C2", "C4", "B5", "B1"]
    
        **** SEND BASE ANSWER FIRST

    -------------

    Bonus→ Return all valid positions for 2 moves

    Bonus 2 → Return all valid positions for N moves (where N is accepted as a parameter).


*/


function validPosition(position, numberOfMoves=1) {

    const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const movementArry = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2],
    ]

    // Array containing all valid positions for the current move
    let validMoves = [];
    // Returned array will all valid positions for all moves
    let result = [];

    let xCordNum = letterArr.indexOf(position[0]);
    let yCordNum = +position[1];


    for (let i = 0; i < movementArry.length; i++) {

        let currXPosLetter = letterArr[xCordNum + movementArry[i][0]];
        let currYPos = yCordNum + movementArry[i][1];

        if ((typeof currXPosLetter !== 'undefined') && (!(currYPos <= 0))) {

            result.push(currXPosLetter + currYPos.toString());
        }
    }


    if (numberOfMoves > 1) {
        for (let j = 0; j < numberOfMoves; j++) {
            console.log("j ", j);
            for (let k = 0; k < result.length; k++) {
                let xCordNum2 = letterArr.indexOf(result[k][0]);
                let yCordNum2 = +result[k][1];

                for (let i = 0; i < movementArry.length; i++) {

                    let currXPosLetter = letterArr[xCordNum2 + movementArry[i][0]];
                    let currYPos = yCordNum2 + movementArry[i][1];

                    if ((typeof currXPosLetter !== 'undefined') && (!(currYPos <= 0))) {

                        validMoves.push(currXPosLetter + currYPos.toString());
                    }
                }
            }
        }
    }



    return result.concat(validMoves);

}

console.log(validPosition("A1", 4));