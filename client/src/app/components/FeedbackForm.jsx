import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewFeedback } from "../../api/feedback.api";
import {
  currentFeedbackSentStatusChanged,
  feedbackAdded,
} from "../containers/FeedbackPage/feedbackSlice";
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
  const dispatch = useDispatch();

  const [feedbackData, setFeedbackData] = useState(initFeedbackData);
  const [validation, setValidation] = useState(false);

  const { name, email, message } = feedbackData;

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
      dispatch(feedbackAdded(feedbackData));
      dispatch(currentFeedbackSentStatusChanged(true));
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
