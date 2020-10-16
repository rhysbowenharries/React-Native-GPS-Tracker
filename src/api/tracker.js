import axios from "axios";

export default axios.create({
  baseURL: "http://24e1c9cf4cea.ngrok.io"
});


// in track server, type ngrock http 3000 replace the above baseURL with the one generated.
// "http://[12charCode].ngrok.io"