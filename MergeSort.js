function merge(arr1,arr2){
	let result = []
  while(arr1.length && arr2.length){
    if(arr1[0] > arr2[0]){
      result.push(arr2.shift())
    }else{
      result.push(arr1.shift())
    }
  }
	return result.concat(arr1,arr2)
}


function mergeSort(arr){
	if(arr.length == 1) return arr
  	let mid = Math.floor(arr.length/2)
	let arrL = arr.splice(0,mid)
	let arrR = arr
	let mL = mergeS(arrL)
	let mR = mergeS(arrR)
	return merge(mL,mR)
}
