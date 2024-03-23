const min = document.getElementById('min')
const max = document.getElementById('max')
const btn = document.querySelector('button')

// função com o botão
function generateNumber(a, b) {

    a = Math.ceil(min.value)
    b = Math.floor(max.value)
    console.log(a, b)

    const result = (Math.floor(Math.random() * (b - a + 1) + a))

    alert(result)
}

btn.addEventListener('click', generateNumber)

// função com a tecla enter
document.addEventListener('keypress', function(e){
    if(e.which == 13){
        let a = Math.ceil(min.value)
        let b = Math.floor(max.value)
        console.log(a, b)
    
        const result = (Math.floor(Math.random() * (b - a + 1) + a))
    
        alert(result)
    }
 }, false);