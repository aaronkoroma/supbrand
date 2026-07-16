        let menu = document.getElementById('menu');
        menu.addEventListener('click', function myFunction(){
            let change = document.getElementById('menu-bar')
            if(change.style.display === "none"){
                change.style.display = "block";
            }
            else{
                change.style.display = "none";
            }
        });