import { useEffect, useState } from "react";
import { createNewFeedback, getAll } from "../../api/feedback.api";
import { Button } from "./Button";
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

  const { name, email, message } = feedbackData;

  useEffect(() => {
    async function fetchFeedbackList() {
      try {
        const data = await getAll();
        console.log(data);
      } catch {
        console.log(
          "Seems like server is not running. Please go to readme file and follow the instructions to set up and run the server.",
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
    createNewFeedback(feedbackData);
    setFeedbackData(initFeedbackData);
  };

  return (
    <FeedbackFormGroup>
      <FeedbackInput
        type="text"
        name="name"
        value={name}
        onChange={handleForm}
        placeholder="Your name*"
      />
      <FeedbackInput
        type="email"
        name="email"
        value={email}
        onChange={handleForm}
        placeholder="Your email*"
      />
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
