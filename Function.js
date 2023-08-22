const add = (...num) => {

    sum = 0
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    return sum


}


const subtract = (...num) => {

    sum = 0
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }
    for (let i = 0; i < num.length; i++) {
        sum = sum - num[i]
    }
    return sum

}


const multiply = (...num) => {

    let product = 1
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }

    for (let i = 0; i < num.length; i++) {
        product = product * num[i]
    }
    return product

}

const divide = (...num) => {

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }

    let quoient = num[0]

    for (let i = 1; i < num.length; i++) {
        if (num[i] == 0) {
            console.log("Error: cannot divide by 0");
        }
        quoient = quoient / num[i]
    }
    return quoient

}

const ceil = (...num) => {
    const final = {
        ceil: []
    }

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }
    for (let i = 0; i < num.length; i++) {
        final.ceil.push(Math.ceil(num[i]))
    }
    return final

}

const floor = (...num) => {
    const final = {
        floor: []
    }

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }

    for (let i = 0; i < num.length; i++) {
        final.floor.push(Math.floor(num[i]))
    }
    return final

}

const factorial = (...num) => {

    const final = {
        factorial: []
    }
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] != 'number') {
            return 'Not Possible'
        }
    }

    for (const number of num) {
        let fact = 1

        for (let i = 2; i <= number; i++) {
            fact = fact * i;
        }
        final.factorial.push(fact)
    }
    return final

}

function invalidChoice(){
    console.log("Invalid Choice")
}


const factoryFun = (operation) => {

    switch (operation) {
        case 'Add': return add
        case 'Subtract': return subtract
        case 'Multiply': return multiply
        case 'Divide': return divide
        case 'Ceil': return ceil
        case 'Floor': return floor
        case 'Factorial': return factorial
        default: return invalidChoice()
    }

}




