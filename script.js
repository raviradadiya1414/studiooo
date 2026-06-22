// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });




var elemC = document.querySelector(".contener")
    var fixed = document.querySelector(".main-2")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

var  elem = document.querySelectorAll(".page-3-p1")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-img")
        fixed.style.backgroundImage = `url(${img})`
    })
})

var loder = document.querySelector("#loder")
setTimeout(function(){
    loder.style.top = "-110%"
},6000)

var loginPage = document.querySelector("#login-page")
var loginLink = document.querySelector("#login-link")
var closeLogin = document.querySelector("#close-login")
var loginForm = document.querySelector("#login-form")

if (loginLink && loginPage) {
    loginLink.addEventListener("click", function (e) {
        e.preventDefault()
        loginPage.style.display = "flex"
    })
}

if (closeLogin && loginPage) {
    closeLogin.addEventListener("click", function () {
        loginPage.style.display = "none"
    })
}

if (loginForm && loginPage) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault()
        loginPage.style.display = "none"
        alert("Login submitted")
    })
}

if (loginPage) {
    loginPage.addEventListener("click", function (e) {
        if (e.target === loginPage) {
            loginPage.style.display = "none"
        }
    })
}


// var cont = document.querySelector("#side-2")
// var con = document.querySelectorAll(".side-p1")
// con.forEach(function(m) {
//     m.addEventListener("click",function(){
//         var imga = m.getAttribute("side-p1")
//         cont.style.backgroundImage = `url(${imga})`
//     })
// })

