fetch("http://localhost:3000/Rooms")
.then(res => res.json())
.then(roomdata => foreachroom(roomdata))

fetch("http://localhost:3000/Customers")
.then(res => res.json())
.then(customerdata => foreachcustomer(customerdata))

function foreachroom(roomdata){
    let roomlist = document.querySelector("ul")
    let one = []
    let two = []
    let three = []
    for (let i = 0; i < roomdata.length; i++ ){
        
        if (roomdata[i].type == "One bedroom"){
            one.push(i)  
        }
        if (roomdata[i].type == "Two bedroom"){
            two.push(i)  
        }
        if (roomdata[i].type == "Three bedroom"){
            three.push(i)  
        }
    }
    let li = document.createElement("li")
        li.innerText = `${one.length} One bedroom`
        roomlist.appendChild(li)
    let li2 = document.createElement("li")
        li2.innerText = `${two.length} Two bedroom`
        roomlist.appendChild(li2)
    let li3 = document.createElement("li")
        li3.innerText = `${three.length} Three bedroom`
        roomlist.appendChild(li3)


    for(let i = 0 ;i < 5 ; i++){
        let roomNumber = document.querySelectorAll(".text h3")
        roomNumber[i].innerText = roomdata[i].id
        let roomImage = document.querySelectorAll(".image img")
        roomImage[i].src = roomdata[i].image
        let roomDescription = document.querySelectorAll(".text p")
        roomDescription[i].innerHTML = roomdata[i].description
        let roomStatus = document.querySelectorAll(".text h4")
        roomStatus[i].innerText = `Status: ${roomdata[i].status}`
    }


    let list = document.querySelectorAll("li")
    let oneBedroom = []
    for(let i = 0 ;i < 5 ; i++){
        oneBedroom.push( roomdata[i])
     }
    // console.log(oneBedroom);
    let twoBedroom = []
    for(let i = 5 ;i < 10 ; i++){
        twoBedroom.push( roomdata[i])
     }
    // console.log(twoBedroom);
    let threeBedroom = []
    for(let i = 10 ;i < 15 ; i++){
        threeBedroom.push( roomdata[i])
     }
    // console.log(threeBedroom);
    // let allRooms = [oneBedroom,twoBedroom,threeBedroom]
    
    list[0].addEventListener("click",function(){
        
            for(let i = 0 ;i < 5 ; i++){
                
                let roomNumber = document.querySelectorAll(".text h3")
                roomNumber[i].innerText = oneBedroom[i].id
                let roomImage = document.querySelectorAll(".image img")
                roomImage[i].src = oneBedroom[i].image
                let roomDescription = document.querySelectorAll(".text p")
                roomDescription[i].innerHTML = oneBedroom[i].description
                let roomStatus = document.querySelectorAll(".text h4")
                roomStatus[i].innerText = `Status: ${oneBedroom[i].status}`
            }
                
    })
    list[1].addEventListener("click",function(){
        
            for(let i = 0 ;i < 5 ; i++){
                
                let roomNumber = document.querySelectorAll(".text h3")
                roomNumber[i].innerText = twoBedroom[i].id
                let roomImage = document.querySelectorAll(".image img")
                roomImage[i].src = twoBedroom[i].image
                let roomDescription = document.querySelectorAll(".text p")
                roomDescription[i].innerHTML = twoBedroom[i].description
                let roomStatus = document.querySelectorAll(".text h4")
                roomStatus[i].innerText = `Status: ${twoBedroom[i].status}`
            }
                  
    })
    list[2].addEventListener("click",function(){
        
            for(let i = 0 ;i < 5 ; i++){
                
                let roomNumber = document.querySelectorAll(".text h3")
                roomNumber[i].innerText = threeBedroom[i].id
                let roomImage = document.querySelectorAll(".image img")
                roomImage[i].src = threeBedroom[i].image
                let roomDescription = document.querySelectorAll(".text p")
                roomDescription[i].innerHTML = threeBedroom[i].description
                let roomStatus = document.querySelectorAll(".text h4")
                roomStatus[i].innerText = `Status: ${threeBedroom[i].status}`
            }
              
    })
    
}



const form =document.querySelector("#checkInForm")


form.addEventListener("submit",(e) =>{
    e.preventDefault();
    let fname = document.querySelector("#first_name").value
    let sname = document.querySelector("#second_name").value
    let id = document.querySelector("#id").value
    let rnumber = document.querySelector("#room_no").value
    let data = {
        firstname:fname,
        secondname:sname,
        id_no:id,
        room_number:rnumber
    }
    
    
    fetch("http://localhost:3000/Customers",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
})
let Customers=[]
function foreachcustomer(customerdata){
    Customers.push(customerdata)
    
}
// console.log(Customers);
const form2 = document.querySelector("#checkOutForm")
let data3 = []
form2.addEventListener("submit",(e) =>{
    e.preventDefault();
    let fname2 = document.querySelector("#first_name2").value
    let sname2 = document.querySelector("#second_name2").value
    let id2 = document.querySelector("#id2").value
    let rnumber2 = document.querySelector("#room_no2").value
    let data2 = {
        firstname:fname2,
        secondname:sname2,
        id_no:id2,
        room_number:rnumber2
    }
    data3.push(data2)
    let id4 = []
    for(let i = 0 ; i < Customers[0].length; i++){
        if(data2.id_no == Customers[0][i].id_no){
            id4.push(Customers[0][i].id)   
        }
    }
    
    let url = `http://localhost:3000/Customers/${id4}`
    let option ={
        method:"DELETE"
    } 
    fetch(url,option)
    
    
    
    
})


