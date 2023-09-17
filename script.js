const value = document.querySelector("#value");
const input = document.querySelector(".slider");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

function createGrid() {
    var grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    const dimension = input.value;

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = 'auto '.repeat(dimension);
    grid.style.gridTemplateRows = 'auto '.repeat(dimension);

    for (let i = 0; i < dimension * dimension; i++) {
        const content = document.createElement('div');
        content.setAttribute("class", "grid-item");
        content.classList.add('grid-item');

        grid.appendChild(content);
    }

    const container = document.querySelector(".container");
    container.replaceChild(grid, document.querySelector(".grid"));
}

function resetGrid() {
    var container = document.querySelector(".grid");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    createGrid();
}

const button = document.getElementById("default");

const grid = document.querySelector(".container");

grid.addEventListener("mouseover", (event) => {
    if (event.target.matches(".grid-item")) {
        console.log(event.target);
        event.target.classList.add("changed");
    }
});