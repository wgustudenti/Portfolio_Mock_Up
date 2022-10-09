function openFirstProject(){
    window.open("firstProject.html");
}

function toggleMobileNav(){
    let mobileNav = document.getElementById("mobile-nav-list");
    let mobileNavOpened = document.getElementById("mobile-nav-opened");
    let mobileNavClosed = document.getElementById("mobile-nav-closed")
    if(mobileNav.style.visibility == "hidden"){
        mobileNav.style.visibility = "visible";
        mobileNavOpened.style.display = "initial";
        mobileNavClosed.style.display = "none";
    }
    else{
        mobileNav.style.visibility = "hidden";
        mobileNavClosed.style.display = "initial";
        mobileNavOpened.style.display = "none";
    }
    document.querySelector("p").classList.toggle(".toggled-nav")
}