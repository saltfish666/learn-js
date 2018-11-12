# 数组

- Array.prototype.slice ( start, end )
The slice method takes two arguments, start and end, and returns an array containing the elements of the array from element start up to, but not including, element end (or through the end of the array if end is undefined). If start is negative, it is treated as length+start where length is the length of the array. If end is negative, it is treated as length+end where length is the length of the array.

- Array.prototype.splice ( start, deleteCount, ...items )
When the splice method is called with two or more arguments start, deleteCount and zero or more items, the deleteCount elements of the array starting at integer index start are replaced by the arguments items. An Array object containing the deleted elements (if any) is returned.