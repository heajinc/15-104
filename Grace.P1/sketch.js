//Grace Cha
//Section C (Tuesdays 1:30)
//heajinc@andrew.cmu.edu
//Self Portrait 

function setup() {
    createCanvas(600,600);
    background(170,216,176);
}

function draw() {
    // Hair Top Part
    noStroke();
    fill(255,111,105);
    ellipse(315,245,284,264);
    // rightsidehair
    ellipse(374,275,192,264);
    // leftside
    ellipse(238,368,292,282);
    push();
    translate(162,300);
    rotate(-42);
    ellipse(0,0,186,82);
    pop();

    push();
    fill(170,216,176);
    translate(244,446);
    rotate(13);
    ellipse(0,0,224,125);
    pop();
    
    // head shape
    noStroke();
    fill(255,238,173);
    ellipse(315,274,234,234);
    
    // right ear
    ellipse(436,273,33,55);
    // left ear
    // left eyebrow
    push();
    translate(193,295);
    rotate(40);
    ellipse(0,0,42,49);
    pop();

    stroke(255,111,105);
    strokeWeight(8);
    line(322,219,343,199);
    line(343,199,370,204);
    // right eyebrow
    line(214,237,230,226);
    line(230,226,244,230);
    // bangs
    noStroke();
    fill(255,111,105);
    push();
    translate(276,171);
    rotate(110);
    ellipse(0,0,202,118);
    pop();
    // eyes shape
    stroke(124,171,129);
    strokeWeight(3);
    fill(255,238,173);
    ellipse(262,273,54,68); // left eye
    ellipse(364,256,54,68); // right eye
    
    // pupil
    noStroke();
    fill(124,171,129);
    ellipse(244,271,17,40);
    ellipse(346,255,17,40);
    noStroke();
    fill(124,171,129,90);
    // Rotate the nose ellipse.
    push();
    translate(317,308);
    rotate(12);
    ellipse(0,0,22,16);
    pop();
    
    // mouth
    stroke(255,111,105);
    strokeWeight(5);
    line(274,346,301,350);
    line(344,342,374,327);
    fill(255,111,105);
    // Lips
    push();
    translate(322,347);
    rotate(62.7);
    ellipse(0,0,59,17);
    pop();
    
    // MOVE THE EYES
    if (mouseIsPressed) { // watch the eyes move
        // mask the original pupil
        noStroke(); // deletes the original pupil
        fill(255,238,173);
        ellipse(244,271,17,40);
        ellipse(346,255,17,40);
        
        // eye stroke
        stroke(124,171,129);
        strokeWeight(3);
        fill(255,238,173);
        ellipse(262,273,54,68); // left eye
        ellipse(364,256,54,68); // right eye
        noStroke();
        fill(124,171,129);
        ellipse(279,270,17,40);
        ellipse(382,252,17,40);
    } 
}