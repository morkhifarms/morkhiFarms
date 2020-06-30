//Author: Vipul Anand, 20June2020, Simple Attempt for  farmer community to connect with urban customers directly!!
//Have I succeeded or not, these attempts will tell in time, I am sure that overhead cost of app development is brought down for farmers to afford and adopt technology!!

var clickedItem = document.getElementById("order"),
    enTxt,
    dozen,
    oneTray,
    twoTray,
    twoLtrs,
    threeLtrs,
    fourLtrs,
    halfKgGhee,
    oneKgGhee,
    twoKgGhee,
    vegGhiya,
    vegMint,
    vegDhania,
    vegAloo,
    vegOnion,
    vegTomatoes,
    vegMirchi,
    vegBhindi,
    vegKaddu,
    vegGobhi,
    vegBroccoli,
    vegBeans,
    orderItem = document.querySelectorAll(".orderListItem"),
    orderCart = document.getElementById("orderCart"),
    itemsToOrder,
    //Available items, that can be disabled upon unavailability
    itemsAvailable = document.querySelectorAll(".available"),

    //Items that gets added to the order cart
    listDozen = `
    <div id="eggs12" class="orderListItem">
    <div>${itemsAvailable[0].value}</div>
        </div>`,
    listOneTray = `
    <div id="oneTray" class="orderListItem">
    <div>${itemsAvailable[1].value}</div>
        </div>`,
    listTwoTray = `
    <div id="twoTray" class="orderListItem">
    <div>${itemsAvailable[2].value}</div>
        </div>`,
    listTwoLtrs = `
    <div id="twoLtrs" class="orderListItem">
    <div>${itemsAvailable[3].value}</div>
        </div>`,
    listThreeLtrs = `
    <div id="threeLtrs" class="orderListItem">
    <div>${itemsAvailable[4].value}</div>
        </div>`,
    listFourLtrs = `
    <div id="fourLtrs" class="orderListItem">
    <div>${itemsAvailable[5].value}</div>
        </div>`,    
    listHalfKgGhee = `
    <div id="halfKgGhee" class="orderListItem">
    <div>${itemsAvailable[6].value}</div>
        </div>`,    
    listOneKgGhee = `
    <div id="oneKgGhee" class="orderListItem">
    <div>${itemsAvailable[7].value}</div>
        </div>`,    
    listTwoKgGhee = `
    <div id="twoKgGhee" class="orderListItem">
    <div>${itemsAvailable[8].value}</div>
        </div>`,
    listVegGhiya = `
    <div id="vegGhiya" class="orderListItem">
    <div>
        ${itemsAvailable[9].value}</div>
        </div>`,
    listVegMint = `
    <div id="vegMint" class="orderListItem">
    <div>
        ${itemsAvailable[10].value}</div>
        </div>`,
    listVegDhania = `
    <div id="vegDhania" class="orderListItem">
    <div>
        ${itemsAvailable[11].value}</div>
        </div>`,
    listVegAloo = `
    <div id="vegAloo" class="orderListItem">
    <div>
        ${itemsAvailable[12].value}</div>
        </div>`     
    listVegOnion = `
    <div id="vegOnion" class="orderListItem">
    <div>
        ${itemsAvailable[13].value}</div>
        </div>`    
    listVegTomatoes = `
    <div id="vegTomato" class="orderListItem">
    <div>
        ${itemsAvailable[14].value}</div>
        </div>` 
    listVegMirchi = `
    <div id="vegMirchi" class="orderListItem">
    <div>
        ${itemsAvailable[15].value}</div>
        </div>`,
    listVegBhindi = `
        <div id="vegBhindi" class="orderListItem">
        <div>
            ${itemsAvailable[16].value}</div>
            </div>`
    listVegKaddu = `
        <div id="vegKaddu" class="orderListItem">
        <div>
            ${itemsAvailable[17].value}</div>
            </div>`     
    listVegGobhi = `
        <div id="vegGobhi" class="orderListItem">
        <div>
            ${itemsAvailable[18].value}</div>
            </div>`   
    listVegBroccoli = `
        <div id="vegBroccoli" class="orderListItem">
        <div>${itemsAvailable[19].value}</div>
            </div>`    
    listVegBeans = `
        <div id="vegBeans" class="orderListItem">
        <div>${itemsAvailable[20].value}</div>
            </div>`  //stopped using title attribute, I don't know why? 
console.log(itemsAvailable);

itemsAvailable[0].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[0].classList.toggle('added')
    dozen = document.getElementById("eggs12")
    clickedItem.contains(dozen) ? 
    clickedItem.removeChild(dozen) : 
    clickedItem.insertAdjacentHTML('afterBegin', listDozen)
    placeOrder()
})

itemsAvailable[1].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[1].classList.toggle('added')
    oneTray = document.getElementById("oneTray")
    clickedItem.contains(oneTray) ? 
    clickedItem.removeChild(oneTray) : 
    clickedItem.insertAdjacentHTML('afterBegin', listOneTray)
    placeOrder()
})

itemsAvailable[2].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[2].classList.toggle('added')
    twoTray = document.getElementById("twoTray")
    clickedItem.contains(twoTray) ? 
    clickedItem.removeChild(twoTray) : 
    clickedItem.insertAdjacentHTML('afterBegin', listTwoTray)
    placeOrder()
})

itemsAvailable[3].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[3].classList.toggle('added')
    twoLtrs = document.getElementById("twoLtrs")
    clickedItem.contains(twoLtrs) ? 
    clickedItem.removeChild(twoLtrs) : 
    clickedItem.insertAdjacentHTML('afterBegin', listTwoLtrs)
    placeOrder()
})

itemsAvailable[4].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[4].classList.toggle('added')
    threeLtrs = document.getElementById("threeLtrs")
    clickedItem.contains(threeLtrs) ? 
    clickedItem.removeChild(threeLtrs) : 
    clickedItem.insertAdjacentHTML('afterBegin', listThreeLtrs)
    placeOrder()
})

itemsAvailable[5].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[5].classList.toggle('added')
    fourLtrs = document.getElementById("fourLtrs")
    clickedItem.contains(fourLtrs) ? 
    clickedItem.removeChild(fourLtrs) : 
    clickedItem.insertAdjacentHTML('afterBegin', listFourLtrs)
    placeOrder()
})
itemsAvailable[6].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[6].classList.toggle('added')
    halfKgGhee = document.getElementById("halfKgGhee")
    clickedItem.contains(halfKgGhee) ? 
    clickedItem.removeChild(halfKgGhee) : 
    clickedItem.insertAdjacentHTML('afterBegin', listHalfKgGhee)
    placeOrder()
})
itemsAvailable[7].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[7].classList.toggle('added')
    oneKgGhee = document.getElementById("oneKgGhee")
    clickedItem.contains(oneKgGhee) ? 
    clickedItem.removeChild(oneKgGhee) : 
    clickedItem.insertAdjacentHTML('afterBegin', listOneKgGhee)
    placeOrder()
})
itemsAvailable[8].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[8].classList.toggle('added')
    twoKgGhee = document.getElementById("twoKgGhee")
    clickedItem.contains(twoKgGhee) ? 
    clickedItem.removeChild(twoKgGhee) : 
    clickedItem.insertAdjacentHTML('afterBegin', listTwoKgGhee)
    placeOrder()
})
itemsAvailable[9].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[9].classList.toggle('added')
    vegGhiya = document.getElementById("vegGhiya")
    clickedItem.contains(vegGhiya) ? 
    clickedItem.removeChild(vegGhiya) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegGhiya)
    placeOrder()
})

itemsAvailable[10].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[10].classList.toggle('added')
    vegMint = document.getElementById("vegMint")
    clickedItem.contains(vegMint) ? 
    clickedItem.removeChild(vegMint) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegMint)
    placeOrder()
})

itemsAvailable[11].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[11].classList.toggle('added')
    vegDhania = document.getElementById("vegDhania")
    clickedItem.contains(vegDhania) ? 
    clickedItem.removeChild(vegDhania) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegDhania)
    placeOrder()
})

itemsAvailable[12].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[12].classList.toggle('added')
    vegAloo = document.getElementById("vegAloo")
    clickedItem.contains(vegAloo) ? 
    clickedItem.removeChild(vegAloo) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegAloo)
    placeOrder()
})

itemsAvailable[13].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[13].classList.toggle('added')
    vegOnion = document.getElementById("vegOnion")
    clickedItem.contains(vegOnion) ? 
    clickedItem.removeChild(vegOnion) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegOnion)
    placeOrder()
})

itemsAvailable[14].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[14].classList.toggle('added')
    vegTomato = document.getElementById("vegTomato")
    clickedItem.contains(vegTomato) ? 
    clickedItem.removeChild(vegTomato) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegTomatoes)
    placeOrder()
})

itemsAvailable[15].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[15].classList.toggle('added')
    vegMirchi = document.getElementById("vegMirchi")
    clickedItem.contains(vegMirchi) ? 
    clickedItem.removeChild(vegMirchi) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegMirchi)
    placeOrder()  
})
itemsAvailable[16].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[16].classList.toggle('added')
    vegBhindi = document.getElementById("vegBhindi")
    clickedItem.contains(vegBhindi) ? 
    clickedItem.removeChild(vegBhindi) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegBhindi)
    placeOrder()  
})
itemsAvailable[17].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[17].classList.toggle('added')
    vegKaddu = document.getElementById("vegKaddu")
    clickedItem.contains(vegKaddu) ? 
    clickedItem.removeChild(vegKaddu) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegKaddu)
    placeOrder()  
})
itemsAvailable[18].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[18].classList.toggle('added')
    vegGobhi = document.getElementById("vegGobhi")
    clickedItem.contains(vegGobhi) ? 
    clickedItem.removeChild(vegGobhi) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegGobhi)
    placeOrder()  
})
itemsAvailable[19].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[19].classList.toggle('added')
    vegBroccoli = document.getElementById("vegBroccoli")
    clickedItem.contains(vegBroccoli) ? 
    clickedItem.removeChild(vegBroccoli) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegBroccoli)
    placeOrder()  
})
itemsAvailable[20].addEventListener('click', (e) => {
    e.preventDefault()
    orderCart.classList.remove('disabled')
    itemsAvailable[20].classList.toggle('added')
    vegBeans = document.getElementById("vegBeans")
    clickedItem.contains(vegBeans) ? 
    clickedItem.removeChild(vegBeans) : 
    clickedItem.insertAdjacentHTML('afterBegin', listVegBeans)
    placeOrder()  
})

//The Only Function that does the job for placing order and do nothing if empty
//encoding the text on the go from cart and adding it to the anchor tag for whatsapp encoded text message
let placeOrder = () => {
    document.getElementById("orderCart").innerText === "Your Order Appears Here!"?
    document.getElementById("orderCart").innerText ="":null;

    enTxt = encodeURI(clickedItem.innerText)
        document.getElementById("order").contains(document.getElementById("eggs12"))     ||
        document.getElementById("order").contains(document.getElementById("oneTray"))    ||
        document.getElementById("order").contains(document.getElementById("twoTray"))    ||
        document.getElementById("order").contains(document.getElementById("twoLtrs"))    ||
        document.getElementById("order").contains(document.getElementById("threeLtrs"))  ||
        document.getElementById("order").contains(document.getElementById("fourLtrs"))   ||      
        document.getElementById("order").contains(document.getElementById("halfKgGhee")) ||
        document.getElementById("order").contains(document.getElementById("oneKgGhee"))  ||
        document.getElementById("order").contains(document.getElementById("twoKgGhee"))  ||
        document.getElementById("order").contains(document.getElementById("vegGhiya"))   ||
        document.getElementById("order").contains(document.getElementById("vegMint"))    ||
        document.getElementById("order").contains(document.getElementById("vegDhania"))  ||
        document.getElementById("order").contains(document.getElementById("vegAloo"))    ||
        document.getElementById("order").contains(document.getElementById("vegOnion"))   ||
        document.getElementById("order").contains(document.getElementById("vegTomato"))  ||
        document.getElementById("order").contains(document.getElementById("vegMirchi"))  ||
        document.getElementById("order").contains(document.getElementById("vegBhindi"))  ||
        document.getElementById("order").contains(document.getElementById("vegKaddu"))   ||
        document.getElementById("order").contains(document.getElementById("vegGobhi"))   ||
        document.getElementById("order").contains(document.getElementById("vegBroccoli"))||
        document.getElementById("order").contains(document.getElementById("vegBeans"))?
        orderCart.innerHTML = `<a href="https://wa.me/918683000497?text=${enTxt}"><button class="waOrder send-me-the-items"> Kindly Deliver It</button></a>`: orderCart.innerText = "Cart Empty";
//https://wa.me/918683000497

    if (orderCart.innerText === "Cart Empty") {
        orderCart.classList.add("disabled")

    } else return

}

window.addEventListener('userproximity', function(event) {
    if (event.near) {
      // let's power off the screen
      navigator.mozPower.screenEnabled = false;
    } else {
      // Otherwise, let's power on the screen
      navigator.mozPower.screenEnabled = true;
    }
  });
  //document.domain !== "www.morkhifarms.in"?window.close():""

  const ptr = PullToRefresh.init({
    mainElement: 'body',
    onRefresh() {
      window.location.reload();
    }
  });

  