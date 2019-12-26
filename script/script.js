const container = document.querySelector("#container");
const resetBtn = document.querySelector("#resetGrid");
const gridSizeBtn = document.querySelector("#changeGridSize");

// Setting square specifications

var defaultSquareSize = 16;

// Creating row container

const createRowContainerObj = () => {
    const rowContainer = document.createElement("div")
    rowContainer.classList.add("rowContainer");

    return rowContainer;
}

// Creating square element

const createSquareObj = () => {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener(
        "mouseover", (e) => {
            e.target.classList.toggle("active");
        }
    )

    return square;
}

/* Displaying the squares */

function display(squareSize) {
    for (i=0; i<squareSize; i++) {
        
        let rowContainer = createRowContainerObj();
        container.appendChild(rowContainer);
        
        for (j=0; j<squareSize; j++) {
            let square = createSquareObj()
            rowContainer.appendChild(square);
        }
    }
}

/* Reset grid */

function resetDisplay(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

// Configuring grid reset

resetBtn.addEventListener(
    "click", (e) => {
        let nodes = container.childNodes;
        nodes.forEach(
            (node) => {
                let squares = node.childNodes;
                squares.forEach(
                    (square) => {
                        square.classList.remove("active");
                    }
                )
            }
        )       
    }
);

// Configuring grid size

gridSizeBtn.addEventListener(
    "click", (e) => {
        let gridSize = prompt("How big do you want the square?");
        gridSize = parseInt(gridSize);

        if (isNaN(gridSize)) { 
            alert("Value is not a number!");
            return;
         }

        if (gridSize < 1 || gridSize > 30) {
            alert("Invalid grid size (maximum 30 squares)");
        } else {
            resetDisplay(container);
            display(gridSize);
        }
    }
)

display(defaultSquareSize);