class Cell_ {
  constructor(x, y, dist, prev, next, state, direction) {
    this.x = x;
    this.y = y;
    this.dist = dist; //distance
    this.prev = prev; //parent cell in the path
    this.next = next;
    this.state = state;
    this.direction = direction;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

class adyacentsCellsBFS {
  reconocernodos(matrix, dist = 3) {
    var m = matrix.length;
    var n = matrix[0].length;
    var cells = [];
    for (let i = 0; i < m; i++) {
      cells[i] = [];
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] != 1) {
          //console.log(`{${JSON.stringify(parent)}}`);
          cells[i][j] = new Cell_(i, j, 0, null, null, null, null);
          console.log(i, j, 0, cells[i][j]);
        }
      }
    }
  }
}

keylogic = new adyacentsCellsBFS();
const matrix_ = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1],
];
keylogic.reconocernodos(matrix_);
