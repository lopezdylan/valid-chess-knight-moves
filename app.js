/*
    Write a function that takes a string representing the position on a chess board (A1-H8). 

    Return a list of all of the valid ending squares for a knight after 1 move from this position. 

    For example: "A3" -> ["C2", "C4", "B5", "B1"]
    
        **** SEND BASE ANSWER FIRST

    -------------

    Bonus→ Return all valid positions for 2 moves

    Bonus 2 → Return all valid positions for N moves (where N is accepted as a parameter).


*/


function validPosition(position) {

    // Store x axis letters to convert from a number back to a letter
    const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    // Store all possible movement combinations
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

    // Returning array
    let result = [];

    // Converting and storing the X string position to a int
    let xCordNum = letterArr.indexOf(position[0]);
    // Converting and storing the Y num position as an int
    let yCordNum = +position[1];

    // Loop through each possible movement combination and apply them to 
    // the initial provided position 
    for (let i = 0; i < movementArry.length; i++) {
        // Store the X position after applying the x position from the current
        // element in the movementArry
        let currXPos = xCordNum + movementArry[i][0];
        // Get the corresponding letter. If out of bounds (outside of the board)
        // then it will return undefined (b/c passing in negative int or out of range)
        xCordLetter = letterArr[currXPos];
        // console.log(i, ' L ', xCordLetter);

        // Store the Y position after applying the Y position from the current
        // element in the movementArry
        let currYPos = yCordNum + movementArry[i][1];
        // console.log(i, ' N ', currYPos);

        // Check if X coordinate letter is NOT undefined
        // Check if Y coordinate is NOT less than or equal to 0
        if ((typeof xCordLetter !== 'undefined') && (!(currYPos <= 0))) {
            // console.log(i, ' L ', xCordLetter);
            // console.log(i, ' N ', currYPos);

            // Cast Y position to a string and concatenate with X coordinate 
            // before pushing to array
            result.push(xCordLetter + currYPos.toString());
        }
    }

    return result;

}

console.log(validPosition("A3"));