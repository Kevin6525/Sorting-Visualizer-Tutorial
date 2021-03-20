export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    for(let i = 0; i < array.length; i ++)
    {
      console.log(array[i]);
    }
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
function swap(arr, val1, val2)
{
  let temp = arr[val2];
  arr[val2] = arr[val1];
  arr[val1] = temp;
}
export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    doQuickSort(array, 0, array.length - 1, animations);
    for(let i = 0; i < array.length; i ++)
    {
      console.log(array[i]);
    }
    return animations;
  }
function doQuickSort(array, lowIndex, highIndex, animations)
{
    if(lowIndex >= highIndex) return;
    let pivot = getPivot(array, lowIndex, highIndex, animations);
    doQuickSort(array, lowIndex, pivot - 1, animations);
    doQuickSort(array, pivot + 1, highIndex, animations);
}
//This is the function to find the partition the array through pivot points
 function getPivot(array, lowIndex, highIndex, animations)
  {
    // Standard quicksort, we set our last element to be our pivot value
    // Pivot index is where the pivot value belongs in the array once sorted
      let pivotIdx = lowIndex
      let pivotVal = array[highIndex];
      // Iterate through the list, note we use lowIndex as the starting index (For recursive calls)
      for(let i = lowIndex; i < highIndex; i ++)
      {
        //Push the animation twice, Once to highlight it, second to reset color
          animations.push([pivotIdx, i, false]);
          animations.push([pivotIdx, i, false]);
          //If the current value is less than the pivot value, than we increment pivot index
          if(array[i] < pivotVal)
          {
            //Push two animations to swap bar heights (Use true to indicate a change)
              animations.push([array[pivotIdx], i, true]);
              animations.push([array[i], pivotIdx, true]);
              swap(array,i,pivotIdx);
              pivotIdx ++;
          }
      }
      //Once we reach the end, we highlight the pivot values determined index and the original index
      //Reset the colors and commit the swap in bar heights
      animations.push([pivotIdx, highIndex, false]);
      animations.push([pivotIdx, highIndex, false]);
      animations.push([array[pivotIdx], highIndex, true]);
      animations.push([array[highIndex], pivotIdx, true]);
      swap(array, pivotIdx, highIndex);
      return pivotIdx;
  }
