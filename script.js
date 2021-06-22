const SUPABASE_KEY = 'https://ctnqdjwsxpftdyxxzuhm.supabase.co/rest/v1/Animal';
const SUPABASE_URL = 'https://ctnqdjwsxpftdyxxzuhm.supabase.co/rest/v1/Animal?select=*';
const SUPABASE_URL_POST = 'https://ctnqdjwsxpftdyxxzuhm.supabase.co/rest/v1/Animal';


function loadPokemon() {
    var animal = document.getElementById('animal');

    var opts = {
        method: 'GET', // POST PUT DELETE OPTIONS PATCH
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTAxNzMyOCwiZXhwIjoxOTM0NTkzMzI4fQ.1j2T6libjDRqFy3mQITntccwYs8kZDkYgFC51MTVWPU',
        } // JWT-Token, Authentifizierung
        // body:{}
    };

    fetch(SUPABASE_URL, opts)
    .then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (body) {
        console.log(body);
        for(var i = 0; i<body.length; i++) {
            //animal.innerHTML = animal.appendChild(body[i].Name);
            
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(body[i].Name);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            animal.appendChild(node);                                  // Append <li> to <ul> with id="myList"
        }
    });
}

function postMonkey() {
    const options = {
        method: 'POST',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTAxNzMyOCwiZXhwIjoxOTM0NTkzMzI4fQ.1j2T6libjDRqFy3mQITntccwYs8kZDkYgFC51MTVWPU',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name: document.getElementById('test').value} ),
    }


    fetch(SUPABASE_URL_POST, options)
    .then
    (function (response) 
        {
            console.log(response);
            //return response.json();
            //1. refresh
            //or 2. hinzufügen von response json das was man wieder bekommt bei der showlist
        }
    )

    .then
    (function (body) 
        {
            console.log(body);
        }
    );

}