    function ConfigureMenuItems() {
        var classname = document.querySelectorAll(".MenuItem");

        for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', function(event) {
                HideMenu();
            });
        }
    }

    function ConfigureShowHideMenuButtons() {
        document.getElementById("ShowMenu").addEventListener("click", function(event){ 
            ShowMenu();
            document.getElementById("MainMenu").focus();
            event.preventDefault();
        });

        document.getElementById("HideMenu").addEventListener("click", function(event){ 
            HideMenu();
            document.getElementById("ShowMenu").focus();                
            event.preventDefault();
        });
    }            

    function HideMenu() {
        console.log("Hide Menu");
        document.getElementById("MenuWrapper").classList.remove("ShowTheMenu");
        document.getElementById("MenuWrapper").classList.add("HideTheMenu");
    }

    function ShowMenu() {
        console.log("Show Menu");
        document.getElementById("MenuWrapper").classList.add("ShowTheMenu");
        document.getElementById("MenuWrapper").classList.remove("HideTheMenu");
    }