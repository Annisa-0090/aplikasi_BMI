input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
   
  
    if (height > 0 && weight > 0) {
      var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      var result = '';
      var ket ='';
  
      if (bmi < 18.5) {
        result = 'Underweight ';
        ket ='Tetaplah positif dan cintai dirimu sendiri.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Overweight';
        ket ='Kamu berhak merasa baik dan sehat.';
      } else {
        result = 'Obese';
        ket ='Jadilah dirimu sendiri, tanpa mempedulikan pandangan orang lain tentang penampilanmu. SEMANGAT!!!';
      }
  
      document.getElementById('result').innerHTML = `BMI: ${bmi} - ${result} <br> ${ket}`;
    } else {
      document.getElementById('result').innerHTML = 'Please enter valid height and weight values.';
    }
  }