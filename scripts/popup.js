function ConfigurePopupDisplayItem(buttonId, sectionToDisplay) {
    var element = document.getElementById(buttonId);
    
    element.addEventListener("click", function(event){ 
    alert(element.getAttribute("data-popup"));
        HidePopupSections();
        //document.getElementById("Popup").style.display="block";           
        document.getElementById(element.getAttribute("data-popup")).style.display="block";    
        document.getElementById(element.getAttribute("data-popup")).focus();       
        event.preventDefault();
        
        
        // Remove classes from all section buttons
        // Add active state to selected section button
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
    document.getElementById("Sections").scrollIntoView();   
    event.preventDefault();
}