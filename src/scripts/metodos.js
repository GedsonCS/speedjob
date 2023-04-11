// Map

const arrayMap = [62,4,98,48,21,73,85,57];

const metadeArraymap = arrayMap.map((element) =>{
    return element / 2
})

console.log(metadeArraymap)

function semMap(arrayMap){
    const arraysemMap = []

    for (let i = 0 ; i < arrayMap.length; i++){
        let calc = (arrayMap[i] / 2)

        arraysemMap.push(calc)
    }
return arraysemMap
}

console.log(semMap(arrayMap))

// Filter

const arrayFilter = [-100,17,-23,84,-95,9,-35,-62,-52,81,-88,30,-69,-83,79,10,16,95,38,-24]

const FilterPositivo = arrayFilter.filter((element) => {
    return element > 0
})

console.log(FilterPositivo)

function semFilter(arrayFilter){
    const arraySemFilter = []

    for(let i = 0; i < arrayFilter.length; i++){
        if(arrayFilter[i] > 0){
            arraySemFilter.push(arrayFilter[i])
        }
    }
return arraySemFilter
}

console.log(semFilter(arrayFilter))

//Reduce

const arrayReduce = [1,33,14,7,2]

const multiplicaanterior = arrayReduce.reduce((anterior, posterior) => {
    return anterior * posterior
})

console.log(multiplicaanterior)

function semReduce(array){
    let resultado = 1

    for(let i = 0; i < array.length; i++){
        resultado *= array[i]
    }

    return resultado
}

console.log(semReduce(arrayReduce))

//Find

const arrayFind = [-80,-50,16,21,-91]

const verificaPrimeiroPositivo = arrayFind.find((element) => {
    return element > 0
})

console.log(verificaPrimeiroPositivo)

function semFind(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            return array[i]
        }
    }
}

console.log(semFind(arrayFind))

//Includes

const arrayIncludes = ["arroz", 3, "feijão", -59,]

console.log(arrayIncludes.includes("arroz"))
console.log(arrayIncludes.includes("Batata"))

function semIncludes(parametro){
    let resultado = false

    for(let i = 0; i < arrayIncludes.length; i++){
        if(parametro === arrayIncludes[i]){
            resultado = true
        }
    }
return resultado
}

console.log(semIncludes("arroz"))
console.log(semIncludes("Batata"))

//IndexOf

const arrayIndexOf = ["limao","goiaba","melao","agua","limao","abobora","laranja"]

console.log(arrayIndexOf.indexOf("limao", 2))
console.log(arrayIndexOf.indexOf("limao"))
console.log(arrayIndexOf.indexOf("abacate"))

function semIndexOf(string, numero){
    let resultado = -1

    for(let i = numero; i < arrayIndexOf.length; i++){
        if(arrayIndexOf[i] === string){
            resultado = i
            return resultado
        }
    }
return resultado
}

console.log(semIndexOf("limao", 2))
console.log(semIndexOf("limao", 0))
console.log(semIndexOf("abacate", 0))