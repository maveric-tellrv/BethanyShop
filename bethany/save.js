function save()
    {
        localStorage.setItem("applepie",true);
        console.log("inside save function")
        let node = document.getElementById('hidefavorite')
            node.style.visibility = 'visible';
            console.log('inside checkfavorite')
    }
    function remove()
    {
        localStorage.setItem("applepie",false);
        console.log("inside remove function")
       
    }

    window.onload = function() 
    {
        let  favorite = document.getElementById('favorite');
        if(window.localStorage)
        {
            let storage = window.localStorage;
            if (storage.getItem('applepie') == 'true')
            {
                
                favorite.innerHTML = "Aplle is your favorite";
                console.log("saved")
            }
        }
    }

    // function checkfavorite(){
    //     let node
        
    //     if( window.localStorage.getItem('favorite') == 'true'){
    //         node = document.getElementById('hidefavorite')
    //         node.style.visibility = 'visible';
    //         console.log('inside checkfavorite')
    //     }
    // }
    