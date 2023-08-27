// https://script.google.com/macros/s/AKfycbx21yVPtcGsQZEc1S3uboGfO6v3s1qxmHDi_lSRbHXZQxmA5BdLAGkQWSCtgbtmpJI/exec

// AKfycbx21yVPtcGsQZEc1S3uboGfO6v3s1qxmHDi_lSRbHXZQxmA5BdLAGkQWSCtgbtmpJI


const data = ["Value1", "Value2", "Value3"]; // Example data to write

document.getElementById('Write_to_google').addEventListener('click', () => {
  fetch('https://script.google.com/macros/s/AKfycby2ZfCPuQ4r6TGDLNhWsuW0_qgZ0up5I1Y5or-9p5U05O_gaofuzZ2-JMlaGBkbEMIZ/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data written successfully:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});