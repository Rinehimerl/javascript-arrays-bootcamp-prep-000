function chocolateBars(array) = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift (element)
}
