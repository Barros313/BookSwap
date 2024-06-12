const publishBackButton = document.getElementById('publish-back-button');
const imageContainer = document.getElementById('image-container');
const addImageButton = document.getElementById('add-image-button');
/* const selectImageButton = document.getElementById('select-image-button'); */

publishBackButton.addEventListener("click", () => {
    window.location.href = "home.html";
});
/*
selectImageButton.addEventListener('click', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const preview  = document.getElementById('image-preview');
        const image = new Image();

        image.src = reader.result;
        preview.innerHTML = '';
        preview.appendChild
    };

});
*/

async function captureImage() {
    try {
        /* const stream = await navigator.mediaDevices.getUserMedia( { video: true } ); */
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: { exact: "environment" } }
        });
        const videoElement = document.createElement('video');
        imageContainer.appendChild(videoElement);
        videoElement.srcObject = stream;
        videoElement.play();

        const canvasElement = document.createElement('canvas');
        const context = canvasElement.getContext('2d');
        videoElement.addEventListener("loadedmetadata", () => {
            canvasElement.width = videoElement.videoWidth;
            canvasElement.height = videoElement.videoHeight;

        });

        videoElement.addEventListener('click', () => {
            context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
            const capturedImage = canvasElement.toDataURL('image/jpeg');
            displayImagePreview(capturedImage);
            stream.getTracks().forEach(track => track.stop());
            imageContainer.removeChild(videoElement);
        });
    } catch (error) {
        console.error('Error accessing camera: ', error);
    }
}

function displayImagePreview(imageDataUrl) {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.src = imageDataUrl;
    imagePreview.style.display = 'block';
}

addImageButton.addEventListener("click", captureImage);
