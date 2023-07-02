let longestCommonPrefix =  strs => {

        let prefix = ''
        let i = 0

        while (i <= strs.length+1) { 
        //every returns true only if all condtions are met in each element in the array
        const startsWith =strs.every(element => { 
        return element.startsWith(prefix +strs[0][i])
        })
        //check if startWith returned true then we add to the prefix 
        if (startsWith === true) { prefix += strs[0][i] }
        else { break } // break the loop
        i++
    }

    return prefix
}
