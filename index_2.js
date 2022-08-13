// JavaScript program to find perimeter of area
// covered by 1 in 2D matrix consists
// of 0's and 1's
let R = 3;
let C = 5;
   
// Find the number of covered side
// for mat[i][j].
function numofneighbour(mat, i, j)
{
    let count = 0;
   
    // UP
    if (i > 0 && mat[i - 1][j] == 1)
        count++;
   
    // LEFT
    if (j > 0 && mat[i][j - 1] == 1)
        count++;
   
    // DOWN
    if (i < R - 1 && mat[i + 1][j] == 1)
        count++;
   
    // RIGHT
    if (j < C - 1 && mat[i][j + 1] == 1)
        count++;
   
    return count;
}
   
// Returns sum of perimeter of shapes
// formed with 1s
function findperimeter(mat)
{
    let perimeter = 0;
   
    // Traversing the matrix and
    // finding ones to calculate
    // their contribution.
    for(let i = 0; i < R; i++)
        for(let j = 0; j < C; j++)
            if (mat[i][j] == 1)
                perimeter += (4 -
                numofneighbour(mat, i, j));
   
    return perimeter;
}
 
// Driver Code
let mat = [ [ 0, 1, 0, 0, 0 ],
            [ 1, 1, 1, 0, 0 ],
            [ 1, 0, 0, 0, 0 ] ];
              
document.write(findperimeter(mat));
 
// This code is contributed by souravghosh0416