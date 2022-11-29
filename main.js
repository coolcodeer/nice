name_array=[];

function submit(){
    var name_1=document.getElementById("c_1").value ;
    var name_2=document.getElementById("c_2").value ;
    var name_3=document.getElementById("c_3").value ;
    var name_4=document.getElementById("c_4").value ;


    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);

    console.log(name_array);
    
    document.getElementById("display_name").innerHTML=name_array;

    document.getElementById("l").style.display="none";
    
    document.getElementById("k").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}