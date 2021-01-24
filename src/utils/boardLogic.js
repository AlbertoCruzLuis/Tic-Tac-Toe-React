export default class BoardLogic {
  constructor(size) {
    this.size = size;
    this.matrix = this.create_matrix(size);
  }

  create_matrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
      let rows = [];
      for (let j = 0; j < size; j++) {
        rows.push(0);
      }
      matrix.push(rows);
    }
    return matrix;
  }

  print(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
  }
}