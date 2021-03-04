Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_quality: 90
    })
    
    camera = document.getElementById('camera');
    
    
    
    console.log("ml5",ml5.version);
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVWsz1pEQ/model.json",modelloded);
    
    function modelloded(){
        console.log("modellodded")
    }Webcam.attach(camera);
    
    function takesnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById('result').innerHTML = "<img id = 'capture_image' src = "+data_uri+">"

            var data = data_uri;
        })
    }

    function predict(){
        img = document.getElementById("capture_image");

        classifier.classify(img,result);
    }
    
    function result(error,results){
        if(error){
            console.log("error!");
        }
        else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
        }
    }
    