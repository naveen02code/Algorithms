function insertionSort(input) {
    for (let i = 1; i < input.length; i++) {
        let key = input[i];
        let j = i - 1;
        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j--;
        }
        input[j + 1] = key;
    }
    return input;
}

// test case
console.log(insertionSort([5, 2, 4, 6, 1, 3])); //output=> [ 1, 2, 3, 4, 5, 6 ]
console.log(insertionSort([2, 6, 1, 0, 9, 4, 3, 8, 7])); //output=> [ 0, 1, 2, 3, 4, 6, 7, 8, 9 ]