let r = 0;
let g = 0;
let b = 0;
let turn = 0;

const change_color = () => {
    if (turn == 0){
        if (r < 255){
            r++;
        }
        else if (g  < 255){
            g++;
        }
        else if (b < 255){
            b++;
        }
        else {
            r = 0;
            g = 0;
            b = 0;
            turn++
        }
    };
    if (turn == 1){
        if (g < 255){
            g++;
        }
        else if (b  < 255){
            b++;
        }
        else if (r < 255){
            r++;
        }
        else {
            r = 0;
            g = 0;
            b = 0;
            turn++
        }
    };
    if (turn == 2){
        if (b < 255){
            b++;
        }
        else if (r  < 255){
            r++;
        }
        else if (g < 255){
            g++;
        }
        else {
            r = 0;
            g = 0;
            b = 0;
            turn = 0
        }
    };

    color = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(color);
    document.getElementById("background").style.backgroundColor = color;

}

