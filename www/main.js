        let button = document.querySelector('.ON')
        button.value ='OFF'        

        button.addEventListener('click', ()=>{
          if (button.value == "OFF"){
            button.value = "ON"
            button.innerHTML = "ON"
          }
          else{
            button.value = "OFF"
            button.innerHTML = "OFF"
          }
          document.documentElement.classList.toggle('dark-mode')
        })
