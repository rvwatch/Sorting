const { expect } = require('chai').use(require('chai-sorted'));
const mergeSort = require('../lib/Merge.js');

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

describe('MergeSort', () => {

  it('should be a function', () => {
    expect(mergeSort).to.be.a('function')
  })

  it('should sort an already sorted array', () => {
    expect(sortedArray).to.be.sorted();
    console.log(sortedArray);
    expect(mergeSort(sortedArray)).to.be.sorted();
  })

  it('should sort a sorted but descending array', () => {
    console.log(descending);
    expect(mergeSort(descending)).to.be.sorted();
  })

  it('should sort a small unsorted array', () => {
    expect(smallArray).to.not.be.sorted();
    expect(mergeSort(smallArray)).to.be.sorted()
  })

  it('should sort a negative array', () => {
    expect(negativeNumbers).to.not.be.sorted();
    expect(mergeSort(negativeNumbers)).to.be.sorted()
  })

  it('should sort letters', () => {
    expect(letters).to.not.be.sorted();
    expect(mergeSort(letters)).to.be.sorted()
  })

  it('should sort a large array', () => {
    genArray(30)
    expect(array).to.not.be.sorted();
    expect(mergeSort(array)).to.be.sorted()
  })

  it.skip('should sort a max array set to only', () => {
    genArray(43500)
    expect(array).to.not.be.sorted();
    expect(mergeSort(array)).to.be.sorted()
  })

})