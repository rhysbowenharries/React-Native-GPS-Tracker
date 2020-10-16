import axios from "axios";

export default axios.create({
  baseURL: "http://4eb73926bb40.ngrok.io"
});


// in track server, type ngrock http 3000 replace the above baseURL with the one generated.
// "http://[12charCode].ngrok.io"