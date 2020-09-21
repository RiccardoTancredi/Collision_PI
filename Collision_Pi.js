const timeStep = 100;
// const timeStep = 1;
let digits_of_pi = 3;
let m = 1;
let M = 100**(digits_of_pi-1);
let v_1 = 0;
let V = 5/timeStep;
let size_1 = 50;
let size_2 = 150;
let start_m_x = 350;
let start_m_y = 300;
let start_M_x = 625;
let start_M_y = 250;

let counts = 0;

// let clack;

// function preload() {
//     soundFormats('wav');
//     clack = loadSound('click.wav');
//   }

function setup(){
    background(255);
    createCanvas(800, 400);
    strokeWeight(3);
    stroke(0);
    textSize(50);
    let massa1 = "m = " + m;
    let massa2 = "M = " + M;
    text(massa1, 10, 10, 600, 20);
    text(massa2, 15, 15, 600, 25);
    console.log("Pi = " , round(Math.PI, digits_of_pi-1));
}

function draw(){
    for (let i = 0; i <  timeStep; i++){
        background(0);
        stroke(0);
        strokeWeight(2);
        // Ambient
        rectMode(CORNERS);
        line(0, 325, 600, 325); // Floor
        line(50, 0, 50, 325); // Wall
        fill(0, 125, 255);
        rect(0, 0, 50, 325); // Left Wall
        fill(125);
        rect(50, 325, 800, 0); // Ground

        rectMode(RADIUS);
        fill(255,0,0);
        // First Block
        rect(start_m_x, start_m_y, size_1/2, size_1/2); 
        // Second Block
        fill(255, 0, 0);
        rect(start_M_x, start_M_y, size_2/2, size_2/2)
        // Fisrt Block collision with the wall
        if (start_m_x - size_1/2 > 50 && counts % 2 === 0){
            fill(255,0,0);
            rect(start_m_x, start_m_y, size_1/2, size_1/2); // First Block
        }
        else if (start_m_x - size_1/2 <= 50){
            start_m_x = 50 + size_1/2;
            counts += 1;
            v_1 = - v_1;
            fill(255,0,0);
            rect(start_m_x, start_m_y, size_1/2, size_1/2); // First Block
            // clack.play();
        }

        if ((start_m_x + size_1/2) >= (start_M_x - size_2/2)){
            start_m_x = (start_M_x - size_2/2 - size_1/2); 
            counts += 1;
            let v_1_primo = (2*M*V+v_1*(m-M))/(M+m);
            let V_primo = (2*m*v_1 + V*(M-m))/(M+m);
            v_1 = v_1_primo;
            V = V_primo;
            // clack.play();
            // console.log(v_1, V);
        }

        stroke(255);
        fill(255);
        strokeWeight(3);
        textSize(50);
        let testo = "N° of collisions: " + counts;
        text(testo, 50, 350, 600, height);
        strokeWeight(1);
        let massa1 = "m = " + m;
        let massa2 = "M = " + M;
        text(massa1, 55, 25, 600, 100);
        text(massa2, 55, 75, 600, 100);

        start_m_x -= v_1;
        start_M_x -= V;
    }
    // if (start_m_x + size_1/2 == start_M_x - size_2/2){
    //     console.log(start_m_x);
    // }
}