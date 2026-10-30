// <!-- <!DOCTYPE html>
// <html>
//     <title>Fetch Data</title></head>
//     <body>
//         <div id="output">Loading</div>
// <script> -->
async function fetchdata(){
    // const output = document.getElementById('output');
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('http error: ' + response.status);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    }
    catch(error){
        console.log('error:',error.message);
    }
}
fetchdata();
{/* <!-- </script>
</body>
</html> --> */}