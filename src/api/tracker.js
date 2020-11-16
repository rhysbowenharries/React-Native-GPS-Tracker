import axios from "axios";

export default axios.create({
  baseURL: "http://ee7b57064e53.ngrok.io"
});


// in track server, type ngrok http 3000 replace the above baseURL with the one generated.
// "http://[12charCode].ngrok.io"