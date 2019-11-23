import axios from "axios";

export var getConvAll = function() {
  return axios({ url: "http://localhost:8080/conv/all", method: "get" });
};

export var postConv = function(body) {
  return axios.post(
    "http://localhost:8080/conv",
    { ...body },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export var putConvById = function(id, body) {
  return axios({
    url: "/conv/" + encodeURIComponent(id) + "",
    method: "put",
    data: body,
    responseType: "json"
  });
};

export var deleteConvById = function(id) {
  return axios({
    url: "/conv/" + encodeURIComponent(id) + "",
    method: "delete"
  });
};
