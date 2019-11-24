import { useState, useContext } from "react";
import * as crud from "../thns-crud";
import { ConfContext } from "../contexts";

const useConverter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const conf = useContext(ConfContext);

  const updateConvert = async (input: string) => {
    crud.setEndpoint(conf.endpoint);
    setInput(input);
    const req = crud.newConvRequest();
    req.input = input;
    const res = await crud.postConv(req);
    setIsValid(res.data.valid);
    setMessage(res.data.valid ? "ok" : "ng:" + res.data.err);
    setOutput(res.data.output);
  };

  return { input, output, message, isValid, updateConvert };
};

export default useConverter;
