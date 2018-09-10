 $("#TransformNav").click(function () {
            var Menu = $("#SideBar");
            var childNode = document.getElementById("childNode");
            if (Menu.hasClass("show-nav")) {
                setTimeout(function () {
                    Menu.addClass("hide-nav").removeClass("show-nav");
                    childNode.style.display="none";
                }, 100)
            }
            else {
                setTimeout(function (){
                    Menu.addClass("show-nav").removeClass("hide-nav");
                    childNode.style.display = "block";
                }, 100)
            }
        })