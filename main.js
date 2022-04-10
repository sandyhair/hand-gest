Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach('webcam');
    webcam = document.getElementById("webcam");

function take_snapshot()
  {
    Webcam.snap(function(data_uri)
    {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
  }

console.log('ml5 version:', ml5.version);
ml5 = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RqcpBR4cC/model.json', modelLoaded);

function modelLoaded()
{
  console.log("Model Loaded!");
}

function check()
{
  img = document.getElementById('aptured_image');
  classifier.classify(img, gotResult);
}

function gotResult()
{
  if (error)
  {
    console.error(error)
  }
  else
  {
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    document.getElementById("result_gesture_name2").innerHTML = result[1].label;
    prediction_1 = rersults[0].label
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == Rock_Hands)
    {
      document.getElementById("update_emoji").innerHTML = "&#128075";
    }
    if(results[0].label == Thumbs_Up)
    {
      document.getElementById("update_emoji").innerHTML = "&#129304;";
    }
    if(results[0].label == Hand_Wave)
    {
      document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(results[1].label == Rock_Hands)
    {
      document.getElementById("update_emoji2").innerHTML = "&#128075";
    }
    if(results[1].label == Thumbs_Up)
    {
      document.getElementById("update_emoji2").innerHTML = "&#129304;";
    }
    if(results[1].label == Hand_Wave)
    {
      document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
  }
}

function speak()
{
  var synth = window.speechSynthesis;
  speak_data_1 = "the first prediction is" + prediction_1;
  speak_data_2 = "the second prediction is" + prediction_2;
  var utterThiss = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}