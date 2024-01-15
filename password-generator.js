const generator = require("generate-password")
function generaterandompassword() {
    const password = generator.generate({
        length : 10,
        numbers : true,
        Symbol : true,
        uppercase : true,
        Symbol : true
    })
console.log('Generated Password:', password)
}
generaterandompassword()