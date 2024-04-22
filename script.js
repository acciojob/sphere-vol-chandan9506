 let form = document.querySelector('#MyForm');

    form.addEventListener("submit",volume_sphere);
        
    function volume_sphere(event) {
    //Write your code here
	 event.preventDefault(); // Prevent form submission

        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius) || radius <= 0) {
             document.getElementById('volume').value = NaN;
               
            }
        const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
        document.getElementById('volume').value = volume;
	} 