const add = (operation,...num)=>{

    sum=0
    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(let i=0; i< num.length;i++){
            sum=sum+num[i]
        }
        return sum
    }
}


const subtract = (operation,...num)=>{

    sum=0
    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(let i=0; i< num.length;i++){
            sum=sum-num[i]
        }
        return sum
    }
}

const  multiply = (operation,...num)=>{

    let product=1
    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(let i=0; i< num.length;i++){
            product=product*num[i]
        }
        return  product
    }
}

const divide = (operation,...num)=>{

    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{

        let quoient= num[0]
    
        for(let i= 1; i< num.length;i++){
            if(num[i]==0){
                console.log("Error: cannot divide by 0");
            }
            quoient=quoient/num[i]
        }
        return quoient
    }
}

const ceil = (operation,...num)=>{
    const final ={
        ceil:[]
    }

    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(let i=0;i< num.length;i++){
            final.ceil.push(Math.ceil(num[i]))
        }
        return final
    }
}

const floor = (operation,...num)=>{
    const final ={
        floor:[]
    }

    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(let i=0;i< num.length;i++){
            final.floor.push(Math.floor(num[i]))
        }
        return final
    }
}

const factorial = (operation,...num)=>{

    const final={
        factorial:[]
    }
    if(typeof operation!='string' &&  typeof num!='number'){
        return "Not Possible"
    }
    else{
        for(const number of num){
            let fact=1

            for(let i=2;i<= number;i++){
                fact= fact * i;
            }
            final.factorial.push(fact)
        }
        return final
    }
}


const factoryFun = (operation,...numbers)=>{
    if(typeof operation!='string' &&  typeof num!='number'){
        console.log("Not Possible")

    }
    else{
        switch(operation){
            case 'Add': return add(operation,...numbers) 
            case 'Subtract': return subtract(operation,...numbers) 
            case 'Multiply': return multiply(operation,...numbers)
            case 'Divide': return divide(operation,...numbers)
            case 'Ceil' : return ceil(operation,...numbers)
            case 'Floor': return floor(operation,...numbers)
            case 'Factorial': return factorial(operation,...numbers)
            default : console.log("Invalid choice");
        }
    }
}

// use the factoryFun('operation name', numbers.....) eg:factoryFun('Divide', 1,2,4,9)
//in the input console of browser to get output
                                     //Or
// put console.log(factoryFun('operation name', numbers....) eg:console.log(factoryFun('Add',
/// 1,2,38,9) in the code to see the output in browser console directly



