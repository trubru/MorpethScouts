InitialTabSetup();     

function InitialTabSetup() {
    HideAllTabsBoxes();
    ConfigureTabEvents();
    SetInitialTabState();
}

function ConfigureTabEvents() { 
    var tabs = document.querySelectorAll(".Tabs");
    for (var i = 0; i < tabs.length; i++) {
        ConfigureTab(tabs[i].id);
    }      
}

function ConfigureTab(buttonId) {
    var element = document.getElementById(buttonId);
    element.addEventListener("click", function(event){ 
    HideAllTabsBoxes();
    RemoveActiveTabStatus();       
    document.getElementById(element.getAttribute("data-popup")).style.display="block";    
    document.getElementById(element.getAttribute("data-popup")).focus();   
    element.classList.add("Active");    
    event.preventDefault();
    });    
}

function HideAllTabsBoxes() {
    var tabsInfo = document.querySelectorAll(".TabInfo");
    for (var i = 0; i < tabsInfo.length; i++) {
        tabsInfo[i].style.display = "none";
    }   
}

function RemoveActiveTabStatus() {
    var tabsInfo = document.querySelectorAll(".Tabs");
    for (var i = 0; i < tabsInfo.length; i++) {
        tabsInfo[i].classList.remove("Active");
    }   
}

function SetInitialTabState() {
    var e = document.querySelector(".TabInfo.DefaultTab");
    if (e != null)
    {
        e.style.display="block";       
    }


    var e = document.querySelector(".Tabs.DefaultTab");
    if (e != null)
    {
        e.classList.add("Active");
    }
}