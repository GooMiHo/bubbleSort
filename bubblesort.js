function bubbleSort(arr) {
    let notComplete = true;
    while (notComplete) {
        let swapped = swap(arr);
        arr = swapped[1];
        notComplete = swapped[0];
    }
    return arr;
}

function swap(arr) {
    let didItSwap = false;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            didItSwap = true;
        }
    }

   return [didItSwap, arr]
}


