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
  const [loading, setLoading] = useState(false);
  const { name, email, message } = feedbackData;

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const isValid = validateInput(feedbackData);
    setValidation(true);

    if (isValid) {
      setValidation(false);
      setLoading(true);
      try {
        const res = await createNewFeedback(feedbackData);
        if (res.error) throw new Error(res.message);
        dispatch(feedbackAdded(feedbackData));
        dispatch(currentFeedbackSentStatusChanged(true));
        setFeedbackData(initFeedbackData);
        setLoading(false);
      } catch (e) {
        alert(
          `Seems like server is not running. \n\nPlease go to readme file, follow the instructions to set up the server locally and run it on your machine, and try one more time to send the feedback. \n\nNOTE that after pressing OK the input fields will be reset.`,
        );
        setFeedbackData(initFeedbackData);
        setLoading(false);
      }
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
      {validation && name === "" && <ErrorMsg msg="Name required"></ErrorMsg>}
      <FeedbackInput
        type="text"
        name="name"
        value={name}
        onChange={handleForm}
        placeholder="Your name*"
      />
      {validation && email === "" && <ErrorMsg msg="Email required"></ErrorMsg>}
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
      <Button onClick={submit} disabled={loading} radius="50%" marginTop="12px">
        Send message
      </Button>
    </FeedbackFormGroup>
  );
};
