const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawLine(m, b) {
    // Set the line color
    ctx.strokeStyle = 'black';
    
    // Set the line width
    ctx.lineWidth = 2;

    // Calculate the starting and ending points of the line
    const x1 = 0;
    const y1 = b;
    const x2 = canvas.width;
    const y2 = m * x2 + b;

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Convert the canvas to an image URL
    const imgUrl = canvas.toDataURL();

    // Set the src attribute of the <img> tag to the image URL
    const imgElement = document.getElementById('myImage');
    imgElement.src = imgUrl;
}

// Example usage: Draw a line with equation y = 2x + 5
drawLine(2, 5);
