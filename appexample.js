    function checkWin() {
        for(let i = 0; i < wins.length; i++) {
            //looping over the wins array

            let xCount = 0;
            let oCount = 0;

            for (let j = 0; j < wins[i].length; j++) {
                // looping over each winning combo array inside wins array.
                if(wins[i][j].innerHTML == "X")
                xCount++;
            } else if(wins[i][j].textContent == "O") {
                oCount++;
            } 
            if (xCount == 3) {
                alert("X wins!");
            } else if (oCount == 3) {
                alert("O wins!");
            }
        }
    }