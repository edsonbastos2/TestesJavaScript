function area(a,b){
    const area = a * b
    if(area > 20){
        console.log(`Valor acima do padrão ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area(2,3))
console.log(area(5,5))