function disppic(event)
{
    var path=URL.createObjectURL(event.target.files[0]);
    var picture=event;
    var img=document.getElementById('fileupload');
    img.src=path;
    img.style.width="150px";
     
    var reader=new FileReader();
    reader.addEventListener("load",()=>{
         localStorage["picture"]=reader.result;
    })
reader.readAsDataURL(event.target.files[0]);     
}  
function myfun(event)
{
    console.log(event);
    var file_to_read = document.getElementById('details').files[0];
    var reader=new FileReader();
    reader.onload=function(e){
        var detail=e.target.result;
        var intern=JSON.parse(detail);
        console.log(intern);              
        localStorage.setItem('details',JSON.stringify(intern));
    };
    reader.readAsText(file_to_read);
} 

function nextpg()
    {
        location.assign("result.html");
    }
    