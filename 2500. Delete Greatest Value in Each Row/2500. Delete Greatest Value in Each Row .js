var grid = [[58,42,8,75,28],[35,21,13,21,72]]
//m == grid.length
//n == grid[i].length
//1 <= m, n <= 50
//1 <= grid[i][j] <= 100

let deleteGreatestValue = grid => {

    //sort grid
    let sortedGrid = grid.map(element => { 
        element.sort((a, b) =>
        {
            return a - b
        })
        return element
    })

    let n = grid[0].length // we get a static value of the width [0]
    let i = 0  //count
    let biggest = 0 // biggest number in each iteration
    let result = 0 // sum
    while ( i < n ){

        sortedGrid.forEach(element => { 
            const poped = element.pop()
            if (poped >= biggest) { biggest = poped }
        })
        result += biggest
        biggest = 0
        i++
    }
  return result;
};
console.log(deleteGreatestValue(grid))
