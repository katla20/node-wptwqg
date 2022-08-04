class Cell {
  constructor(x, y, dist, prev) {
    this.x = x;
    this.y = y;
    this.dist = dist; //distance
    this.prev = prev; //parent cell in the path
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

class ShortestPathBetweenCellsBFS {
  //BFS, Time O(n^2), Space O(n^2)
  shortestPath(matrix, start, end) {
    var sx = start[0];
    var sy = start[1];
    var dx = end[0];
    var dy = end[1];
    //if start or end value is 0, return
    if (matrix[sx][sy] == 0 || matrix[dx][dy] == 0) {
      console.log('There is no path.');
      return;
    }
    //initialize the cells
    var m = matrix.length;
    var n = matrix[0].length;
    var cells = [];
    for (let i = 0; i < m; i++) {
      cells[i] = [];
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] != 0) {
          cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
        }
      }
    }
    //breadth first search
    var queue = [];
    var src = cells[sx][sy];
    src.dist = 0;
    queue.push(src);
    var dest = null;
    var p;
    while ((p = queue.shift()) != null) {
      //find destination
      if (p.x == dx && p.y == dy) {
        dest = p;
        break;
      }
      // moving up
      this.visit(cells, queue, p.x - 1, p.y, p);
      // moving left
      this.visit(cells, queue, p.x, p.y - 1, p);
      // moving down
      this.visit(cells, queue, p.x + 1, p.y, p);
      //moving right
      this.visit(cells, queue, p.x, p.y + 1, p);
    }

    //compose the path if path exists
    if (dest == null) {
      console.log('there is no path.');
      return;
    } else {
      let path = [];
      p = dest;
      do {
        path.unshift(p);
      } while ((p = p.prev) != null);
      console.log(`${path}`);
    }
  }

  //function to update cell visiting status, Time O(1), Space O(1)
  visit(cells, queue, x, y, parent) {
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
    if (dist < p.dist) {
      p.dist = dist;
      p.prev = parent;
      queue.push(p);
    }
  }
}

const matrix = [
  [1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 1],
];
myObj = new ShortestPathBetweenCellsBFS();

//case1, there is no path
let start = [0, 2];
let end = [5, 2];
console.log('case 1: ');
myObj.shortestPath(matrix, start, end);

//case 2, there is path
let start1 = [0, 2];
let end1 = [1, 1];
console.log('case 2: ');
myObj.shortestPath(matrix, start1, end1);

// permutes(permutation: Array<Function>) {
//   debugger;
//   let length = permutation.length,
//     result = [permutation.slice()],
//     c = new Array(length).fill(0),
//     i = 1, k, p;

//   while (i < length) {
//     if (c[i] < i) {
//       k = i % 2 && c[i];
//       p = permutation[i];
//       permutation[i] = permutation[k];
//       permutation[k] = p;
//       ++c[i];
//       i = 1;
//       result.push(permutation.slice());
//     } else {
//       c[i] = 0;
//       ++i;
//     }
//   }
//   return result;
// }
