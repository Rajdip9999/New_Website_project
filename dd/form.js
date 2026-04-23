let input = document.getElementById('name')
let Num = document.getElementById('num')
let form = document.getElementsByTagName('form')[0]
let formlist = document.getElementsByClassName('formlist')

for(element of formlist){
    console.log(element)
}

form.addEventListener('submit',(e)=>{
    let chek = input.value
    try{
        if(!chek || chek.trim()===''){
            e.preventDefault()
        }
        
    let con = confirm('Are You Sure?')
            if(!con){
                e.preventDefault()
                input.value=''
                Num.value=''
            }

    }

    catch(err){
        console.log(err)
    }
})


// window.addEventListener('keydown',(e)=>{
//     if(e.key ==='a'){
//         let rusure = confirm('Are You Sure?')

//         if(rusure===true){
//         document.body.style.backgroundColor='red'
//         alert('Your Background Change!!!!')
//         }
//     }
// })


