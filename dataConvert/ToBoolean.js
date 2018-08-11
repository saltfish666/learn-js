if( undefined || null){
} else {
    console.log( 'undefined is false')
    console.log( 'null is false')
}

if( 0 || '' || NaN){
} else {
    console.log( '0 NaN is false')
    console.log( '空字符串 is false')
}

if( {} ){
    console.log( '{} is true') 
}