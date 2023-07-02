haystack = "d", needle = "sad"

var strStr = function (haystack, needle) {
    
    let occurrenceIndex;
    
    haystack = haystack.replace(needle, '1')
    
    for (let i = 0; i < haystack.length; i++) { 
    
        if (haystack[i] === '1') { occurrenceIndex = i }
        
    }
    if (occurrenceIndex>-1) { return occurrenceIndex}
    return -1
};

console.log(strStr(haystack,needle))