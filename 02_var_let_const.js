{
    // var is use for global declaration, can change and accessible from anywhare in code
    var a = "Jay"
    
    // let is use for in-block declaration, can change and accessible only in that block
    let b = "Joshi"

    // const only declare and initalize only one time in code, can't be changed, accessible only in this block
    const c = "Audichya Jalawadi Brahmin"

    console.log(a,b + "\n" + c)
}

// throws an error b,c is not defined
// console.log(a,b,c)