function ConfigurePopupDisplayItem(buttonId, sectionToDisplay) {
    var element = document.getElementById(buttonId);
    
    element.addEventListener("click", function(event){ 
        HidePopupSections();
        document.getElementById("Popup").style.display="block";           
        document.getElementById(element.getAttribute("data-popup")).style.display="block";    
        document.getElementById("Popup").focus();       
        event.preventDefault();
    });    
}

function HidePopupSections() {
    var popups = document.querySelectorAll(".PopupSection");

    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}

function HidePopup(){    
    HidePopupSections();
    document.getElementById("Popup").style.display="none"; 
    document.getElementById("Sections").scrollIntoView();   
    event.preventDefault();
}