import { useEffect, useState } from "react";
import { createNewFeedback, getAll } from "../../api/feedback.api";
import { Button } from "./Button";
import { ErrorMsg } from "./FeedbackFormErrorMsg";
import { FeedbackFormGroup } from "./FeedbackFormGroup";
import { FeedbackInput } from "./FeedbackInput";
import { FeedbackTextarea } from "./FeedbackTextarea";

const initFeedbackData = {
  name: "",
  email: "",
  message: "",
};

export const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState(initFeedbackData);
  const [validation, setValidation] = useState(false);

  const { name, email, message } = feedbackData;

  useEffect(() => {
    async function fetchFeedbackList() {
      try {
        const data = await getAll();
        console.log(data);
      } catch {
        console.log(
          "Ooops. Seems like server is not running. Please go to readme file and follow the instructions to set up the server and run it locally.",
        );
      }
    }

    fetchFeedbackList();
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const isValid = validateInput(feedbackData);
    setValidation(true);

    if (isValid) {
      setValidation(false);
      createNewFeedback(feedbackData);
      setFeedbackData(initFeedbackData);
    }
  };

  const validateInput = (toValidate) => {
    const inputValues = Object.values(toValidate);
    const isThereEmptyElements = inputValues.findIndex(
      (val) => val.trim() === "",
    );

    return isThereEmptyElements === -1 ? true : false;
  };

  return (
    <FeedbackFormGroup>
      {validation && name === "" && (
        <ErrorMsg msg="Name is required"></ErrorMsg>
      )}
      <FeedbackInput
        type="text"
        name="name"
        value={name}
        onChange={handleForm}
        placeholder="Your name*"
      />
      {validation && email === "" && (
        <ErrorMsg msg="Email is required"></ErrorMsg>
      )}
      <FeedbackInput
        type="email"
        name="email"
        value={email}
        onChange={handleForm}
        placeholder="Your email*"
      />
      {validation && message === "" && (
        <ErrorMsg msg="We are looking forward to hearing from you"></ErrorMsg>
      )}
      <FeedbackTextarea
        type="text"
        name="message"
        value={message}
        onChange={handleForm}
        placeholder="Your message*"
      />
      <Button onClick={submit} radius="50%" marginTop="12px">
        Send message
      </Button>
    </FeedbackFormGroup>
  );
};
