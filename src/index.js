module.exports = function towelSort (matrix) {
    if (matrix) {
    return matrix.flatMap((element, index) => index % 2 === 0 ? element : element.reverse()) 
    }
    else{
  return []
}
}
