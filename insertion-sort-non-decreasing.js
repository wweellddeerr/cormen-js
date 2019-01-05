const A = [10, 2, 3, 9, 1, 13, 5, 4, 22, 14, 17, 11];

let i, j, key

for(j = 1; j < A.length; j++) {
    key = A[j]

    i = j - 1

    while(i >= 0 && key > A[i]) {
        A[i + 1] = A[i]
        i = i -1    
    }

    A[i + 1] = key
}

console.log(A)