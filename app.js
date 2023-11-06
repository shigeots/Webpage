    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var galleryImage = document.getElementsByClassName("GalleryImage");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function showGalleryImageModal(element) {
        document.getElementById("modalImage").src = element.src;
        modal.style.display = "flex";
    }
    /*
    function myFunction2() {
        //alert( 'Hello, world!' );
        modal.style.display = "block";
    }

    const demoP = document.getElementById('demoP');
    
    demoP?.addEventListener('click', () => {
        myFunction2();
    });*/