var leftipt = document.getElementById('lefttoright');
var rightipt = document.getElementById('righttoleft');

var left;
var right;




function pause()
{

    clearInterval(left);
    clearInterval(right);
}




function left2right() 
{
    clearInterval(left);
    clearInterval(right);

    left = setInterval(function() {
        if(leftipt.value.length!==0){

            rightipt.value = rightipt.value + leftipt.value.slice(0, 1);
            leftipt.value = leftipt.value.slice(1, leftipt.value.length);
        }
        else{

            clearInterval(left);

        }

    }, 1000);

}




function right2left()
{
    clearInterval(left);
    clearInterval(right);

    right = setInterval(function() {

            

            if (rightipt.value.length !== 0) {
                leftipt.value = rightipt.value.slice(rightipt.value.length - 1, rightipt.value.length) + leftipt.value;
                rightipt.value = rightipt.value.slice(0, rightipt.value.length - 1);



              }
            else
            {

            clearInterval(right);
            }

     }, 1000);



}

