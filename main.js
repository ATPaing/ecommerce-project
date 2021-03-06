const searchIcon = document.querySelector('.search-bar-image')
const textInput = document.querySelector('.text-input')
const searchBar = document.querySelector('.search-bar')
const topItemList = document.querySelector('.top-items-list')
const topRatingSection = document.querySelector('.top-ratings')
const allItemHolder = document.querySelector('.all-items-holder')
const topRatingMoverRight = document.querySelector('.top-rating-mover-right')
const topRatingMoverLeft = document.querySelector('.top-rating-mover-left')
const logInBtn = document.querySelector('.login')
const cartBtn = document.querySelector('.cart-btn')
const hamburgerBtn = document.querySelector('.hamburger')
const hamburgerPage = document.querySelector('.hamburger-page')
const hamburgerClose = document.querySelector('.hamburger-page__close-btn')

const select = document.querySelector('select')

let allItemInGallery = undefined


const data = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "category": "men's clothing",
        "description":  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "price": 109.95,
        "rating": { "rate": 3.9, "count": 120 }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "category": "men's clothing",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "price": 22.3,
        "rating": { "rate": 4.1, "count": 259 }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "category": "men's clothing",
        "description":  "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "price": 55.99,
        "rating": { "rate": 4.7, "count": 500 }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "category": "men's clothing",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "price": 15.99,
        "rating": { "rate": 2.1, "count": 430 }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "category": "jewelery",
        "description":  "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "price": 695,
        "rating": { "rate": 4.6, "count": 400 }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave",
        "category": "jewelery",
        "description":  "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "price": 168,
        "rating": { "rate": 3.9, "count": 70 }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "category": "jewelery",
        "description":   "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "price": 9.99,
        "rating": { "rate": 3, "count": 400}
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "category": "jewelery",
        "description":  "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "image":  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "price": 10.99,
        "rating": { "rate": 1.9, "count": 100 }
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "category": "electronics",
        "description":  "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user???s hardware configuration and operating system",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "price": 64,
        "rating": { "rate": 3.3, "count": 203 }
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "category": "electronics",
        "description":  "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5??? hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "price": 109,
        "rating": { "rate": 2.9, "count": 470  }
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "category": "electronics",
        "description":  "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "price": 109,
        "rating": { "rate": 4.8, "count": 319 }
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "category": "electronics",
        "description":  "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "price": 114,
        "rating": { "rate": 4.8, "count": 400  }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "category": "electronics",
        "description":  "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "price": 599,
        "rating": { "rate": 2.9, "count": 250 }
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED ",
        "category": "electronics",
        "description":  "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "price": 999.99,
        "rating": { "rate": 2.2, "count": 140 }
    },
    {
        "id": 15,
        "title":  "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "category": "women's clothing",
        "description":  "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "price": 56.99,
        "rating": { "rate": 2.6, "count": 235 }
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "category": "women's clothing",
        "description":  "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "price": 29.95,
        "rating": { "rate":  2.9, "count": 340 }
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "category": "women's clothing",
        "description":  "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "price": 39.99,
        "rating": { "rate": 3.8, "count": 679 }
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "category": "women's clothing",
        "description":  "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "price": 9.85,
        "rating": { "rate": 4.7, "count": 130 }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "category": "women's clothing",
        "description":  "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "price": 7.95,
        "rating": { "rate": 4.5, "count": 146 }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "category": "women's clothing",
        "description":  "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "price": 12.99,
        "rating": { "rate": 3.6, "count": 145 }
    }
]

let translateLeft = 0
let topRatingArr = []


data.forEach( item => {
    if(item.rating.rate > 4){
        topRatingArr.push(item)
    }
}) 

// for top rated items section
const  TopRatingArrAsc = topRatingArr.sort((a,b) => a.rating.rate > b.rating.rate  ? -1 : 1)
TopRatingArrAsc.forEach(TRAA => {

    const img = document.createElement('img')
    img.src = `images/${TRAA.id}.jpg`

    const divRatingItems = document.createElement('a')
    const priceAndRating = document.createElement('div')
    const divTwo = document.createElement('div')
    const divThree = document.createElement('div')
    const pThree = document.createElement('p')  
    const priceTag = document.createElement('p')
    const ratingTag = document.createElement('p')
    const ratingStartImg = document.createElement('img')
    ratingStartImg.src = 'images/star.svg'

    divRatingItems.setAttribute('class','rating-items') 

    divRatingItems.classList.add('all')     
                 
    divTwo.setAttribute('class','top-items')
    divThree.setAttribute('class','item-infos')
    priceAndRating.setAttribute('class','price-and-rating')
    ratingStartImg.setAttribute('class', 'rating-star')
    divTwo.append(img)
    divThree.append(pThree)
    const truncate = (input) => input.length > 15 ? `${input.substring(0, 15)}...` : input;
    pThree.textContent = truncate(TRAA.title)  
    priceTag.textContent = `$ ${TRAA.price}`  
    ratingTag.textContent = TRAA.rating.rate   
    topItemList.append(divRatingItems)

    divRatingItems.append(divTwo)
    divRatingItems.append(divThree)
    priceAndRating.append(priceTag)
    priceAndRating.append(ratingStartImg)
    priceAndRating.append(ratingTag)        
    divRatingItems.append(priceAndRating)
    const rect = topRatingSection.getBoundingClientRect()
    if(window.innerWidth < rect.width){
        topRatingMoverRight.style.display = 'block'
    }

    const id = document.createElement('p')
    id.setAttribute('class', 'id')
    id.textContent = TRAA.id
    divRatingItems.append(id)

})

// for all items section
displayAccordingToSelect()

        
topRatingMoverRight.addEventListener('click', () => {
    const rect = topRatingSection.getBoundingClientRect()
    topRatingMoverLeft.style.display = 'block'
    translateLeft += 230
    topItemList.style.transform = `translateX(-${translateLeft}px)`

    if(translateLeft  > (rect.width - window.innerWidth)){
        topRatingMoverRight.style.display = 'none'
    }
})

topRatingMoverLeft.addEventListener('click', () => {
    topRatingMoverRight.style.display = 'block'
    translateLeft -= 230
    topItemList.style.transform = `translateX(-${translateLeft}px)`
    if( translateLeft === 0 ){
        topRatingMoverLeft.style.display = 'none'
    }
})

searchIcon.addEventListener('click', () => {
    if(window.innerWidth < 460   ){
        hamburgerBtn.style.display = 'none'
    }
    searchBar.classList.toggle('active-search-bar')
    if(
        !searchBar.classList.contains('active-search-bar') && 
         window.innerWidth < 460
    ){

        hamburgerBtn.style.display = 'block'
    }
    
    const padding = searchBar.classList.contains('active-search-bar') ? '0.5em' : '0em'
    textInput.style.paddingInline = padding
})

function displayAccordingToSelect(){

    const option =  select.options[select.selectedIndex].value
 
    data.forEach(d => {
        if(option ===  d.category ){
            const divRatingItems = document.createElement('a')
            const priceAndRating = document.createElement('div')
            const divTwo = document.createElement('div')
            const divThree = document.createElement('div')
            const pThree = document.createElement('p')  
            const priceTag = document.createElement('p')
            const ratingTag = document.createElement('p')
            const ratingStartImg = document.createElement('img')
            const img = document.createElement('img')
            img.src = `images/${d.id}.jpg`

            ratingStartImg.src = 'images/star.svg'

            divRatingItems.setAttribute('class','rating-items')  

            divRatingItems.classList.add('all')               
            divTwo.setAttribute('class','top-items')
            divThree.setAttribute('class','item-infos')
            priceAndRating.setAttribute('class','price-and-rating')
            ratingStartImg.setAttribute('class', 'rating-star')
            divTwo.append(img)
            divThree.append(pThree)
            const truncate = (input) => input.length > 15 ? `${input.substring(0, 15)}...` : input;
            pThree.textContent = truncate(d.title)  
            priceTag.textContent = `$ ${d.price}`  
            ratingTag.textContent = d.rating.rate   
            allItemHolder.append(divRatingItems)
            divRatingItems.append(divTwo)
            divRatingItems.append(divThree)
            priceAndRating.append(priceTag)
            priceAndRating.append(ratingStartImg)
            priceAndRating.append(ratingTag)        
            divRatingItems.append(priceAndRating)


            const id = document.createElement('p')
            id.setAttribute('class', 'id')
            id.textContent = d.id
            divRatingItems.append(id)
        }  
    })

    allItemInGallery = document.querySelectorAll('.all-items-holder > a')
    allItemInGallery.forEach(AIIG => {
        AIIG.addEventListener('click',() => {
            const idValue = AIIG.lastChild.textContent
            AIIG.href = `view-product.html?${idValue}`
        })
    })
}

select.addEventListener('change', () => {
    allItemHolder.innerHTML = ``
    displayAccordingToSelect()
})

const allTopRatedItems = document.querySelectorAll('.top-items-list > a')

allTopRatedItems.forEach(ATRI => {
    ATRI.addEventListener('click',() => {
        const idValue = ATRI.lastChild.textContent
        ATRI.href = `view-product.html?${idValue}`
    })
})

hamburgerBtn.addEventListener('click',() => {
    hamburgerPage.classList.add('hamburger-page-active')
})
hamburgerClose.addEventListener('click',() => {
    hamburgerPage.classList.remove('hamburger-page-active')
})

window.addEventListener('resize', () => {
    if(window.innerWidth < 680   ){
        logInBtn.style.display = 'none'
        cartBtn.style.display = 'none'
        hamburgerBtn.style.display = 'block'
    }else if(  window.innerWidth > 680 ){
        logInBtn.style.display = 'block'
        cartBtn.style.display = 'block'
        hamburgerBtn.style.display = 'none'
    }
})






