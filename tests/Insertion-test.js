const { expect } = require('chai').use(require('chai-sorted'));
const insertionSort = require('../lib/InsertionSort.js');

let array = [];
let n;
let letters = ['q', 'j', 'x', 'v', 'b', 'a', 'c', 'd'];
let smallArray = [3, 5, 2, 8, 9];
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let descending =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let negativeNumbers = [-7, -1, -3, -9, -4];



function genArray(n) {
  for (var i=0; i<n; i++) {
    let random = Math.round(Math.random() * n);
    if (!array.includes(random)) {
      array.push(random);
    }else{
      n++;
    }
  } return array;
}

describe('insertionSort', () => {

  it('should be a function', () => {
    expect(insertionSort).to.be.a('function')
  })

  it('should sort an already sorted array', () => {
    expect(sortedArray).to.be.sorted();
    expect(insertionSort(sortedArray)).to.be.sorted();
  })

  it('should sort a sorted but descending array', () => {
    console.log(descending);
    expect(insertionSort(descending)).to.be.sorted();
  })

  it('should sort a small unsorted array', () => {
    expect(smallArray).to.not.be.sorted();
    expect(insertionSort(smallArray)).to.be.sorted()
  })

  it('should sort a negative array', () => {
    expect(negativeNumbers).to.not.be.sorted();
    expect(insertionSort(negativeNumbers)).to.be.sorted()
  })

  it('should sort letters', () => {
    expect(letters).to.not.be.sorted();
    expect(insertionSort(letters)).to.be.sorted()
  })

  it('should sort a large array', () => {
    genArray(5000)
    expect(array).to.not.be.sorted();
    expect(insertionSort(array)).to.be.sorted()
  })

  it.skip('should sort a max array set to only', () => {
    genArray(19000)
    expect(array).to.not.be.sorted();
    expect(insertionSort(array)).to.be.sorted()
  })

})