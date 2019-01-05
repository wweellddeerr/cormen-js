

/**
 * Não precisa ser o (único) max_subarray existente.
 * Precisa ser um (algum) max_subarray possível.
 * Esse é o mais barato de encontrar, pois cresce linearmente.
 */
const find_max_crossing_subarray = (A, low, mid, high) => {
  let left_sum = Number.NEGATIVE_INFINITY
  let sum = 0

  let max_left, max_right

  for (let i = mid; i >= low; i--) {
    sum = sum + A[i]

    if(sum > left_sum)  {
      left_sum = sum
      max_left = i
    }
  }

  let right_sum = Number.NEGATIVE_INFINITY
  sum = 0

  for(let j = mid + 1; j <= high; j++) {
      sum = sum + A[j]
      if(sum > right_sum) {
          right_sum = sum
          max_right = j
      }
  }

  return { max_left, max_right, sum: (left_sum + right_sum)}
}

const find_max_subarray = (A, low, high) => {

  if(high === low) {
    return { low, high, sum: A[low] }
  }

  let mid = Math.floor((low + high) / 2)
  let max_left_subarray = find_max_subarray(A, low, mid)
  let max_right_subarray = find_max_subarray(A, mid + 1, high)
  let max_crossing_subarray = find_max_crossing_subarray(A, low, mid, high)

  if(max_left_subarray.sum >= max_right_subarray.sum && max_left_subarray.sum >= max_crossing_subarray.sum) {
    return max_left_subarray
  }

  if(max_right_subarray.sum >= max_crossing_subarray.sum) {
      return max_right_subarray
  }

  return max_crossing_subarray

}

let A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]

console.log(find_max_subarray(A, 0, A.length -1))