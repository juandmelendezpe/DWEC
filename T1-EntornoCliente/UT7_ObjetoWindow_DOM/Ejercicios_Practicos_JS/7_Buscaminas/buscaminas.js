// Función para inicializar el juego
function initializeGame() {
    const size = parseInt(document.getElementById('size').value);
    const mines = parseInt(document.getElementById('mines').value);
    const board = createBoard(size, mines);
    renderBoard(board);
}

// Función para crear el tablero y colocar minas
function createBoard(size, mines) {
    const board = Array(size).fill(null).map(() => Array(size).fill(0));
    
    for (let i = 0; i < mines; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * size);
            col = Math.floor(Math.random() * size);
        } while (board[row][col] === 'M');
        board[row][col] = 'M';
    }
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (board[row][col] !== 'M') {
                board[row][col] = countMines(board, row, col);
            }
        }
    }
    
    return board;
}

// Función para contar las minas alrededor de una casilla
function countMines(board, row, col) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    let count = 0;
    for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length && board[newRow][newCol] === 'M') {
            count++;
        }
    }
    return count;
}

// Función para renderizar el tablero en la página web
function renderBoard(board) {
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = '';
    const table = document.createElement('table');
    for (let row = 0; row < board.length; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < board[row].length; col++) {
            const td = document.createElement('td');
            if (board[row][col] === 'M') {
                td.classList.add('mine');
                td.textContent = 'M';
            } else {
                td.classList.add('safe');
                td.textContent = board[row][col];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    gameDiv.appendChild(table);
}
