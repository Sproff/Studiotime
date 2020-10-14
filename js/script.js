 /*=================== MOBILE NAVIGATION BAR =====================*/
$("[data-trigger]").on("click", function(){
    let trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

let searchBtn = document.querySelector('.iconSvg');
        let close = document.querySelector('.close');
    
        // Eventlisner
    
        // Show button event
        searchBtn.addEventListener('click', (e) => {
          e.preventDefault()
          let search = document.querySelector('.search');
          search.classList.add('show');
        });
    
        // Close Button event
    
        close.addEventListener('click', (e) => {
          e.preventDefault()
          let search = document.querySelector('.search');
          search.classList.remove('show');
        });
