// question 1
// Write a JavaScript function to check whether an `input` is an array or not
const isArray =(input)=>{
    console.log(Array.isArray(input));
}

isArray('w3resource');
isArray([1, 2, 4, 0]);

// question 2 Write a JavaScript function to clone an array

const cloneArray =(input)=>{
    newArry=[...input];
    console.log(newArry);
}
cloneArray([1,2,3,4])
//3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const first=(input,index)=>{
    if(input==null){
        return 0;
    }
    if(index==null){
        return input[0];
    }
    else return  input.slice(0,n);
}


//4 Write a simple JavaScript program to join all elements of the following array into a string.

const to_String=(input)=>{
    return input.toString();
}

console.log(to_String([1,2,3,4,5]));

// 5 Write a JavaScript program to find the most frequent item of an array

const getMode=(input)=>{
    var mode = 1;
    var m = 0;
    var item;
    for (var i=0; i<input.length; i++)
    {
            for (var j=i; j<input.length; j++)
            {
                    if (input[i] == input[j])
                     m++;
                    if (mode<m)
                    {
                        mode=m; 
                      item = input[i];
                    }
            }
            m=0;
    }
    console.log(`${item} and frequency is ${mode}`);
}

 getMode([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
