export const minimax = (board, depth, player) => {
  let best_node;

  if (player === 1) {
    best_node = [-1,-1, -1000];
  } else {
    best_node = [-1,-1, 1000];
  }

  if (depth === 0 || someoneWin(board)) {
    let score = get_score(board);
    return [-1,-1,score];
  }
  
  for (let cell of emptyCells(board)) {
    let pos_x = cell[0];
    let pos_y = cell[1];
    board[pos_x][pos_y] = player;

    let current_node = minimax(board, depth - 1, -player);

    board[pos_x][pos_y] = 0;
    current_node[0] = pos_x;
    current_node[1] = pos_y;
    

    if (player === 1) {
      if (current_node[2] > best_node[2]) {
        best_node = current_node;
      }
    } else {
      if (current_node[2] < best_node[2]) {
        best_node = current_node;
      }
    }
  }

  return best_node;
}

const winnerState = (board) => {
  let list_state_winner = [];
  // horizontal lines 
  for (let i = 0; i < board.length; i++) {
    let winner_pos = [];
    for (let j = 0; j < board.length; j++) {
      winner_pos.push(board[i][j]);
    }
    list_state_winner.push(winner_pos);
  }

  // vertical lines
  for (let i = 0; i < board.length; i++) {
    let winner_pos = [];
    for (let j = 0; j < board.length; j++) {
      winner_pos.push(board[j][i]);
    }
    list_state_winner.push(winner_pos);
  }

  // principal diagonal 
  let winner_pos = [];
  for (let i = 0; i < board.length; i++) {
    winner_pos.push(board[i][i]);
  }
  list_state_winner.push(winner_pos);

  // secondary diagonal 
  winner_pos = [];
  for (let i = 0; i < board.length; i++) {
    winner_pos.push(board[i][(board.length - 1) - i]); 
  }
  list_state_winner.push(winner_pos);
  return list_state_winner;
}

const someoneWin = (board) => {
  const HUMAN = +1;
  const IA = -1;
  return winPlayer(board, HUMAN) || winPlayer(board, IA); 
}

const winPlayer = (board, player) => {
  let winner_line = winnerState(board);
  for (let i = 0; i < winner_line.length; i++) {
    let line_filled = 0;
    for (let j = 0; j < board.length; j++) {
      if (winner_line[i][j] === player) {
        line_filled++;
      }
    }
    if (line_filled === board.length) {
      return true;
    }
  }
  return false;
}

const get_score = (board) => {
  let score = 0;
  const HUMAN = +1;
  const IA = -1;

  if (winPlayer(board, HUMAN)) {
    score = +1;
  } else if (winPlayer(board, IA)) {
    score = -1;
  } else {
    score = 0;
  }

  return score;
}

export const emptyCells = (board) => {
  let empty_cells_pos = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        empty_cells_pos.push([i,j]);
      }
    }
  }
  return empty_cells_pos;
}