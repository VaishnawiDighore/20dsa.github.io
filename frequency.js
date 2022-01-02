function frequency(array,target)
    {
        let count = 0;
        let n= array.length;
        for (let i=0; i<n; i++)
        {
            if (target == array[i])
                count++;
        }
        return count;
    }

let ans= frequency([1,2,2,4,5,5,6,6,7,7,7,8,9,9,10,10,11,12],9);
console.log(ans);