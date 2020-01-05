// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myFunction(this.responseText)
//     }
// }

// function myFunction(data){
//     console.log(data);
// }

// xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1",true);
// xhttp.send();


let xhttp2 = new XMLHttpRequest();

xhttp2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myFunction(this.responseText)
    }
}

function myFunction(data){
    console.log(data);
}

xhttp2.open("POST", "http://getpost.itgid.info/index2.php",true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send("auth=zhrgB3DxC8LoG7Gcisjc&action=1");