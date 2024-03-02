module.exports = (temp, product)=>{
    let output =temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output =output.replace(/{%IMAGE%}/g, product.image)
    output =output.replace(/{%PRICE%}/g, product.price)
    output =output.replace(/{%FORM%}/g, product.form)
    output =output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output =output.replace(/{%QUANTITY%}/g, product.quantity)
    output =output.replace(/{%DESCRIPTION%}/g, product.description)
    output =output.replace(/{%ID%}/g, product.id)
   
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    
    return output;
   }