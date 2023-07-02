const swiper = new Swiper('.sample-slider', {
  // loop: true,
  slidesPerView: 2,      
  // autoplay: {
  //     delay: 1,
  // },
}) 
 let allAccount = JSON.parse(localStorage.getItem("Details"))
 console.log(allAccount);

  let cartItems =JSON.parse(localStorage.getItem("cartItems"))
  let account = JSON.parse(localStorage.getItem("Details"))     

  // let userItem =  cartItems.filter((item, index, array)=> item.email == account.Email)

 //  console.log(user);
   
  //  for (let index = 0; index < cartItems.length; index++) {
  //    counter.innerHTML = cartItems.length
  //   }
     
  // counter.innerText=JSON.parse(localStorage.getItem("cartItems")).length
function savetoLocal(myImg, price, productName,beforePrice){
  let map = {
    myImg, price, productName, beforePrice
  }
  localStorage.setItem("saveItems", JSON.stringify(map))
  console.log(map);
  window.location.href ="addToCart.html"
}
function savetoLocals(myImg, price, productName,beforePrice){
  let map = {
    myImg, price, productName, beforePrice
  }
  localStorage.setItem("saveItems", JSON.stringify(map))
  console.log(map);
  // window.location.href ="nAccount.html"
  window.location.href ="addToCart.html"
}
display.innerHTML =`
<p>${allAccount.FirtName}</p>
`
let userItem =  cartItems.filter((item, index, array)=> item.email == account.Email)
for (let index = 0; index < userItem.length; index++) {
  // counter.innerHTML = userItem.length
  showCart.innerHTML = userItem.length

}
