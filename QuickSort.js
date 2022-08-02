function quickSort(arr) {

	if (arr.length == 0) return []
	let left = []
	let right = []
	let mid = Math.floor(arr.length / 2)
	let pivot = arr[mid]
	
	for (let i = 0; i < arr.length; i++) {
		if (i != mid) {
			if (arr[i] < pivot) {
				left.push(arr[i])
			} else {
				right.push(arr[i])
			}
		}
	}

	left = quickSort(left)
	right = quickSort(right)
	return left.concat(pivot, right)

}