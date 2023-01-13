let teacherForms = document.getElementsByClassName("teacher-contract")
for (let teacherForm of teacherForms) {
   teacherForm.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let price = teacherForm.price.value
    let hours = teacherForm.hours.value
    let total = price * hours

    //alert(total)
    alert("O valor total das aulas é de R$" + total)



   }) 
}