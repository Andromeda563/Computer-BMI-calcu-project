let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const hayt = parseInt(document.getElementById('hayt').value);
    const weyt = parseInt(document.getElementById('weyt').value);
    const result = document.getElementById('final');
    let hayt_status=false, weyt_status=false;

    if(hayt === '' || isNaN(hayt) || (hayt <= 0)){
        document.getElementById('invalid_hayt').innerHTML = 'Provide a valid height';
    }else{
        document.getElementById('invalid_hayt').innerHTML = '';
        hayt_status=true;
    }

    if(weyt === '' || isNaN(weyt) || (weyt <= 0)){
        document.getElementById('invalid_weyt').innerHTML = 'Provide a valid weight';
    }else{
        document.getElementById('invalid_weyt').innerHTML = '';
        weyt_status=true;
    }

    if(hayt_status && weyt_status){
        const bmi = (weyt / ((hayt*hayt)/10000)).toFixed(2);

        if(bmi < 18.4){
            result.innerHTML = 'Not healthy-too thin : ' + bmi;
        }else if(bmi >= 18.5 && bmi < 25){
            result.innerHTML = 'Healthy-keep it up : ' + bmi;
        }else if(bmi >= 25 && bmi < 30){
            result.innerHTML = 'Overweight-unhealthy : ' + bmi;
        }else if(bmi >30){
            result.innerHTML = 'too unhealthy-dangerous : ' + bmi;
        }

    }else{
        alert('Invalid Values');
        result.innerHTML = '';
    }
});