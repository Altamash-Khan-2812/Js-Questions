function areAnagrams(str, anagram){
    let strObj = obj(str);
    let anagramObj = obj(anagram);

    let keysOfString = Object.keys(strObj).sort();
    let valuesOfString = Object.values(strObj).sort();
    let keysOfAnagramObj = Object.keys(anagramObj).sort();
    let valuesOfAnagramObj = Object.values(anagramObj).sort();

    if(keysOfString.length !== keysOfAnagramObj.length || valuesOfAnagramObj.length !== valuesOfString.length){
      return false;
    } else{
      for(let i = 0; i < keysOfString.length; i++){
        if(keysOfString[i] !== keysOfAnagramObj[i] || valuesOfAnagramObj[i] !== valuesOfString[i]){
          return false
        }
      }
    }

    return true
}

console.log(areAnagrams('ayan', 'naya'));


function obj(str){
    let arr = str.split('');
    let object = {};
    
    for (let i = 0; i < arr.length; i++){
        if(object[arr[i]]){
            object[arr[i]] += 1
        }else{
            object[arr[i]] = 1;
        }
        
    }
    return object
}

      