let yellowImage='utils/yello umbrella.png'
let pinkImage='utils/Pink umbrella.png'
let blueImage='utils/Blue umbrella.png'

let imgBox=document.getElementById("image_box")
let img=document.createElement("img")
let loadingIcon = document.getElementById('loading_icon');
let smallLoadingIcon=document.getElementById('small_loading_icon');
let uploadIcon=document.getElementById('upload_icon');

img.src=blueImage

   function changeColor(color) {

        let lightcolor="white"
        let buttonBackground=''
        imgBox.style.display="none"
        loadingIcon.style.display="flex"
        smallLoadingIcon.style.display="block"
        uploadIcon.style.display="none"
         if(color=='maroom'){
            lightcolor='rgb(238, 171, 171)'
             buttonBackground='rgb(204, 16, 16)' 
        }
         if(color=='orange'){
            lightcolor='rgb(245, 199, 148)'
            buttonBackground='rgb(253, 124, 3)'
         }
         if(color=='yellow'){
            lightcolor="rgb(248, 248, 225)"
            buttonBackground='rgb(240, 197, 8)'
            img.src=yellowImage
            loaderColor='rgb(240, 197, 8)'
         }
         if(color=='navy'){
            lightcolor='rgb(151, 152, 233)'
            buttonBackground='rgb(10, 5, 80)' 
        }
         if(color=='skyblue'){
            lightcolor='rgb(205, 230, 248)'
            img.src=blueImage
         }
         if(color=='silver'){
            lightcolor='rgb(220, 223, 223)'
            buttonBackground='rgb(10, 5, 80)' 
        }
         if(color=='pink'){
             lightcolor='rgb(247, 220, 229)'
             buttonBackground='rgb(238, 55, 116)'
             img.src=pinkImage

         }
         if(color=='grey'){
            lightcolor='rgb(97, 100, 100)'
            buttonBackground='rgb(10, 5, 80)'
         }
        setTimeout(function(){
            imgBox.style.display="flex"
            loadingIcon.style.display="none"
            smallLoadingIcon.style.display="none"
            uploadIcon.style.display="block"
        },500)

         document.getElementById('add_button').style.backgroundColor=buttonBackground
         document.querySelector('#loading_icon>svg').style.fill=buttonBackground
        document.body.style.backgroundColor = lightcolor;
      }



img.setAttribute("id","umbrella")
imgBox.append(img)

// inserting file which having logo
function addLogo() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file && file.type.includes('image/png')) {
        const reader = new FileReader();

        reader.addEventListener('loadstart', function() {
            loadingIcon.style.display = 'flex';
            imgBox.style.display='none'
            smallLoadingIcon.style.display="block"
            uploadIcon.style.display="none"

          });
        reader.addEventListener('load', function() {
            setTimeout(function() {
            imgBox.style.display='flex'

          const imageSrc = reader.result;
          const imageElement = document.createElement('img');
          imageElement.src = imageSrc;
          imageElement.setAttribute('id','logoImage');
          imgBox.insertBefore(imageElement, imgBox.firstChild);
          loadingIcon.style.display = 'none';    
          smallLoadingIcon.style.display="none"
          uploadIcon.style.display="block"
    },500);
    document.getElementById('button_text').textContent=file.name

     })
        reader.readAsDataURL(file);
      } else {
        console.log('Please select a PNG image file.');
      }
    });
      
    fileInput.click();

  }