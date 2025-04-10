const container = document.querySelector(".container");
const resize = document.querySelector("#resize");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const color = document.querySelector("#favcolor");
const rainbow = document.querySelector("#random");

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function createGrid(pixels = 16) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const size = 400;
    const cellSize = size / pixels;
    
    for (let i = 0; i < pixels * pixels; i++) {
        const cell = document.createElement("div");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.border = "1px solid #000";
        container.appendChild(cell);

        color.addEventListener("click", () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = color.value;
            })
        }) 

        del.addEventListener("click", () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "#fff";
            })
        })

        rainbow.addEventListener("click", () => {
            cell.addEventListener("mouseover", () => {
                const randomColor = `rgb(${random(255)} ${random(355)} ${random(255)})`;
                cell.style.backgroundColor = randomColor;
            }) 
        })
        
        clear.addEventListener("click", () => {
            cell.style.backgroundColor = "#fff";
            cell.style.border = "1px solid #000";
        })
    }
}

resize.addEventListener("click", () => {
    const size = parseInt(prompt("Enter the new size (1-100)"));

    if ((size === null) || isNaN(size) || (size < 1 || size > 100)) {
        alert("Enter a value between 1 and 100");
        return;
    }
    createGrid(size);
    }
)

createGrid();