let classifier;
let videoCapture;
let label = '';
let confidence = '';

function modelLoaded() {
    console.log('Model loaded');
    classifier.predict(resultsLoaded);
}

function resultsLoaded(error, data) {
    if (error) {
        console.error(error);
    } else {
        label = data[0].label;
        confidence = data[0].confidence;
        classifier.predict(resultsLoaded);
    }
}

function setup() {
    createCanvas(640, 550);
    frameRate(6);
    background(255);
    fill(0);
    textSize(32);
    videoCapture = createCapture(VIDEO);
    videoCapture.hide();
    // Initialize the Image Classifier method with MobileNet
    classifier = ml5.imageClassifier('MobileNet', videoCapture, modelLoaded);
}

function draw () {
    background(255);
    image(videoCapture, 0, 0);
    text(label, 10, height - 20);
    // createP(`${label}`);
}