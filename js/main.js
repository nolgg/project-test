const button_project = document.querySelector('#go-project')
const button_youtube = document.querySelector('#go-youtube')


button_project.addEventListener('click',function(){
    goto('project.html')
})


button_youtube.addEventListener('click',function(){
    goto('https://www.youtube.com/@nolyub104',true)
})



function goto(where,indc=false) {
    if(indc){
        window.open(where, "_blank");
    }else{
        window.location.assign(where);
    }
    
}

