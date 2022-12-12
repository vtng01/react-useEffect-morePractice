import { useEffect, useState } from "react";
function Message({ size, featherCount }) {
  const [message, setMessage] = useState();
  const [sizeClass, setSizeClass] = useState("");

  useEffect(() => {
    console.log("Message", size);
    let cname = "";
    switch (size) {
      case "m":
        cname = "medium";
        break;
      case "l":
        cname = "large";
        break;
      case "xl":
        cname = "xlarge";
        break;
      default:
        cname = "small";
        break;
    }
    setSizeClass(cname);
  }, [size]);

  useEffect(() => {
    if (featherCount == 0) {
      setMessage("Your bird is bald... everywhere!");
    } else if (featherCount >= 10) {
      setMessage("You're a hairy, bird!");
    } else {
      setMessage("Still a growing bird!");
    }
  }, [featherCount]);

  return <div className={`message ${sizeClass}`}>{message}</div>;
}

export default Message;
