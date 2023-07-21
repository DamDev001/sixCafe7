const lunch = [
  {
    foodName: "Six7 Fried-Rice",
    price: "₦6000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/584c38f9-1712-4840-b86c-2bd2091bc78a.jpg",
    priceInNumber: 6000
  },
  {
    foodName: "Six7 Party Jollof",
    price: "₦3000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/60636885-1bc5-45c0-b03e-426d097eacdd.jpg",
    priceInNumber: 300000
  },
  {
    foodName: "Six7 Spaghetti",
    price: "₦2000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/37898bab-c4f5-4a31-8fda-c1e26dcb4f26.jpg",
    priceInNumber: 200000
  },
  {
    foodName: "Basmati Jollof",
    price: "₦2000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/ee7b74a8-11cb-433a-9d7c-a03105ddfbc2.jpg",
    priceInNumber:200000
  },
  {
    foodName: "Six7 Special Jollof(combo)",
    price: "₦3000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/acddc32e-8120-4487-bba8-8a8dd27ed65d.jpg",
    priceInNumber: 300000
  },
  {
    foodName: "Six7 Spaghetti",
    price: "₦2000",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/IMG_6955.PNG",
    priceInNumber: 200000
  },
  {
    foodName: "Six7 Special",
    price: "₦1500",
    shortNote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi facilis eos qui, nemo ducimus quos deserunt blanditiis! Officiis laboriosam ut iste aperiam magni sint eaque libero unde harum sit!",
    image: "asset/images/menu-images/c1681859-001c-4831-98a8-caa081310903.jpg",
    priceInNumber: 150000
  }
]

const lunchContainer = document.querySelector("#lunch")
document.querySelector(".close-popup").addEventListener("click", () => {
  document.querySelector(".popUp-menu").style.display = "none"
  document.querySelector("body").style.overflow = "auto"
})

for (let i = 0; i < lunch.length; i++) {
  const element = lunch[i];
  console.log(element.foodName)

  const food = document.createElement('div')
  food.classList = "food"
  lunchContainer.appendChild(food)

  food.addEventListener("click", () => {
    document.querySelector(".popUp-menu").style.display = "flex"
    document.querySelector("body").style.overflow = "hidden"

    const foodImage = document.querySelector(".foodImage-order img");
    foodImage.src = element.image;

    const foodOrderName = document.querySelector(".foodOrderName")
    const orderDetail = document.querySelector(".orderDetail")
    const foodPrice = document.querySelector(".price")
    const payButton = document.querySelector(".pay button")
    foodOrderName.innerHTML = element.foodName
    orderDetail.innerHTML = element.shortNote
    foodPrice.textContent = element.price;
    payButton.innerHTML = `Pay ${element.price}`

    payButton.addEventListener("click", () => {
      function payWithPaystack() {

        var handler = PaystackPop.setup({
          key: 'pk_test_04294b9789b3b803b81eee8d3ea1e8fd7b709cfc', //put your public key here
          email: 'customer@email.com', //put your customer's email here
          amount: element.priceInNumber, //amount the customer is supposed to pay
          metadata: {
            custom_fields: [
              {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678" //customer's mobile number
              }
            ]
          },
          callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", { reference: response.reference }, function (status) {
              if (status == "success")
                //successful transaction
                alert('Transaction was successful');
              else
                //transaction failed
                alert(response);
            });
          },
          onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
          }
        });
        handler.openIframe(); //open the paystack's payment modal
      }
      payWithPaystack();
    })
  })

  const image = document.createElement("div");
  image.classList = "img-food"
  food.appendChild(image)

  const img = document.createElement('img');
  img.src = element.image
  image.appendChild(img)

  const foodName = document.createElement("div");
  foodName.classList = "image-content-details";
  food.appendChild(foodName)

  const h4 = document.createElement("h4");
  h4.textContent = element.foodName;
  foodName.appendChild(h4)

  const foodprice = document.createElement("div");
  foodprice.classList = "price-time";
  food.appendChild(foodprice)

  const price = document.createElement("div");
  price.classList = "price"
  price.textContent = element.price;
  foodprice.appendChild(price)

  const order = document.createElement("button");
  order.textContent = "Order Now"
  food.appendChild(order)

}


const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");

toggle.addEventListener("click", () => {
  document.querySelector(".navbar-container").classList.add("activeNav")
})

close.addEventListener("click", () => {
  document.querySelector(".navbar-container").classList.remove("activeNav")
})


//  MENU
const menuLinks = document.getElementsByClassName("menu-link")
const menucContent = document.getElementsByClassName("menu-content")

function openMenu(menuOpen) {
  for (const links of menuLinks) {
    links.classList.remove("active-list")
  }
  for (const content of menucContent) {
    content.classList.remove("active-menu")
  }

  event.currentTarget.classList.add("active-list")
  document.getElementById(menuOpen).classList.add("active-menu")
}
