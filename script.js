 let form = document.querySelector('#MyForm');

    form.addEventListener("submit",volume_sphere);
        
    function volume_sphere(event) {
    //Write your code here
	 event.preventDefault(); // Prevent form submission

        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius) || radius <= 0) {
            alert('Please enter a valid positive number for the radius.');
                return;
            }
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('volume').value = volume.tofixed(4);
	} 