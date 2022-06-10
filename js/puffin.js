let classifier;
let puffin;

// When the model is loaded
function modelLoaded() {
  console.log('Model loaded');
  classifier.predict(puffin, resultsLoaded);
}

function imageLoaded() {
    console.log('Image loaded');
    image(puffin, 0, 0, width, height);
}

function resultsLoaded(error, data) {
 if (error) {
     console.error(error);
 } else {
     console.log(data);
     let label = data[0].label;
     let confidence = data[0].confidence;
     fill(255);
     textSize(48);
     text(`${label} (${confidence.toFixed(2)}%)`, 10, height - 50);
 }
}

function setup() {
    createCanvas(640, 480);
    background(0);
    puffin = createImg('images/puffin.jpg', 'alt text', imageLoaded);
    puffin.hide();
    // Initialize the Image Classifier method with MobileNet
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
