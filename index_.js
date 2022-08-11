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
    var dx = 1;
    var dy = 4;
    var cells = [];
    var clean = [];
    let k = 0; //contador para determinar objeto iniciar de la cola
    var src = [];

    for (let i = 0; i < m; i++) {
      cells[i] = [];
      for (let j = 0; j < n; j++) {
        //console.log(matrix[i][j]);
        if (matrix[i][j] == 0) {
          cells[i][j] = new Cell_(i, j, 0, 0, 0, '2', null);
          k++;
          if (k == 1) {
            //usar la primera ubicacion desbloqueada
            src = cells[i][j];
            src.dist = 0;
          }
        }
      }
    }

    console.log('cells', cells);
    var queue = [];
    queue.push(src);
    var dest = null;
    var p; //parent

    while ((p = queue.shift()) != null) {
      //find destination
      if (p.x == dx && p.y == dy) {
        dest = p;
        break;
      }
      // moving up
      this.visit(cells, queue, p.x - 1, p.y, p, 'up');
      // moving left
      this.visit(cells, queue, p.x, p.y - 1, p, 'left');
      // moving down
      this.visit(cells, queue, p.x + 1, p.y, p, 'down');
      //moving right
      this.visit(cells, queue, p.x, p.y + 1, p, 'right');
    }

    if (dest == null) {
      console.log('there is no path.');
      return;
    } else {
      let path = [];
      p = dest;
      do {
        path.unshift(p); //se agrega el elemento al inicio del array
      } while ((p = p.prev) != null);
    }
    //console.log('path', path);
  }

  visit(cells, queue, x, y, parent, direction) {
    //out of boundary
    if (
      x < 0 ||
      x >= cells.length ||
      y < 0 ||
      y >= cells[0].length ||
      cells[x][y] == null
    ) {
      return;
    }

    //update distance, and previous node
    var dist = parent.dist + 1;
    var p = cells[x][y];
    p.dir = direction;

    //console.log('dist', dist, p);

    if (dist < p.dist) {
      p.dist = dist;
      p.prev = parent;
      queue.push(p);
      //console.log('dist < p.dist', queue);
      // console.log(`${JSON.stringify(parent)},`);
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
