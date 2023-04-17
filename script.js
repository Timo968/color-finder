const backgroundShapes = document.getElementById("backgroundShapes");

function createShape() {
    const shape = document.createElement("div");
    shape.classList.add("shape");

    const shapeType = Math.floor(Math.random() * 2);
    if (shapeType === 0) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "20px";
    }

    const size = Math.floor(Math.random() * 200) + 100;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    const colors = ["#ff7f7f", "#7fbfff", "#7fff7f"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    shape.style.backgroundColor = color;

    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 100);
    shape.style.left = `${positionX}%`;
    shape.style.top = `${positionY}%`;

    const animationDuration = Math.floor(Math.random() * 5) + 5;
    shape.style.animationDuration = `${animationDuration}s`;

    backgroundShapes.appendChild(shape);

    setTimeout(() => {
        backgroundShapes.removeChild(shape);
    }, animationDuration * 1000);
}

setInterval(createShape, 1000);
