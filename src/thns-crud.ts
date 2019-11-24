import axios from "axios";

var endpoint = "";

type ConvID = number;

export interface ConvRequest {
  convId: ConvID;
  input: string;
  output: string;
  valid: boolean;
  err: string;
}

export const setEndpoint = (argEndpoint: string) => {
  endpoint = argEndpoint;
};

export const newConvRequest = (): ConvRequest => {
  return {
    convId: 0,
    input: "",
    output: "",
    valid: false,
    err: ""
  };
};

export const getConvAll = () => {
  return axios({ url: endpoint + "/conv/all", method: "get" });
};

export const postConv = (body: ConvRequest) => {
  return axios.post(
    endpoint + "/conv",
    { ...body },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const putConvById = (id: ConvID, body: ConvRequest) => {
  body.convId = id;
  return axios({
    url: endpoint + "/conv/" + encodeURIComponent(id) + "",
    method: "put",
    data: body,
    responseType: "json"
  });
};

export const deleteConvById = (id: ConvID) => {
  return axios({
    url: endpoint + "/conv/" + encodeURIComponent(id) + "",
    method: "delete"
  });
};
