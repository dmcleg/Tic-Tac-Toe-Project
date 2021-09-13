let cells = document.querySelectorAll(".row > div")
let turnCounter = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked)
}

function cellClicked(e) {
    if (turnCounter % 2 ==0) {
        e.target.textContent = "X";
    } else {
        e.target.textContent = "O";
    }

    turnCounter++
    
    checkWin();
}

function checkWin() {
    if(cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X"){
        alert("Winner!")
        return
    }
    if(cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O"){
        alert("Winner!")
        return
    }
    if(cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O"){
        alert("Winner!")
        return
    }
    
    if (turnCounter == 9) {
        alert("Draw!")
    }
    
}