// $( ".change" ).on("click", function() {
//     if( $( "body" ).hasClass( "dark" )) {
//         $( "body" ).removeClass( "dark" );
//         $( ".change" ).text( "OFF" );
//     } else {
//         $( "body" ).addClass( "dark" );
//         $( ".change" ).text( "ON" );
//     }
// });

// $( ".change" ).on("click", function() {
//     if( $( "header" ).hasClass( "dark" )) {
//         $( "header" ).removeClass( "dark" );
//         $( ".change" ).text( "OFF" );
//     } else {
//         $( "header" ).addClass( "dark" );
//         $( ".change" ).text( "ON" );
//     }
// });

        // function myFunction() {
        // var element = document.getElementById('header');
        // element.classList.toggle("lightmode");
        // }


        let button = document.querySelector('.btn')

        button.addEventListener('click', ()=>{
          document.documentElement.classList.toggle('dark-mode')
        })
