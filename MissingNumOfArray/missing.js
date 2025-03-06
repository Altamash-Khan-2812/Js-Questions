function findMissingNumber(arr){
    let index = 0;
    let currNum = arr[index];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] - currNum !== 1){
            return arr[i] - 1
        } else{
            index++;
            currNum = arr[index]
        }
    }
}