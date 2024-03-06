const lista =[]
const AgregarNumeros=(event)=>{
event.preventDefault()
let numero =document.getElementById("Numeros")
lista.push(numero.valueAsNumber)
numero.value=""
procesarlista()

}
const procesarlista =()=>{
let salida = document.getElementById("salida")
let suma = 0 
lista.map((elemento)=>{suma+=elemento})
let promedio =suma/lista.length
let menor = Math.min(...lista)
let mayor = Math.max(...lista)
salida.innerHTML = `
<tr class="table-danger">
            <td>Suma</td>
            <td>${suma} </td>
        </tr>
        <tr>
            <td>Promedio</td>
            <td>${promedio} </td>
        </tr>
        <tr>
            <td>menor</td>
            <td>${menor} </td>
        </tr>
        <tr>
            <td>mayor</td>
            <td>${mayor} </td>
        </tr>
`
}