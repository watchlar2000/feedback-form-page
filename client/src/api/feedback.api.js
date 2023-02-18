const URL = "http://localhost:5000/feedback";

const createNewFeedback = async (newFeedback) => {
  console.log(
    `Sent post request with the following data: ${JSON.stringify(newFeedback)}`,
  );
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newFeedback),
  };

  return fetch(URL, requestOptions)
    .then((res) => res.json())
    .then((data) => data);
};

const getAll = () => {
  return fetch(URL).then((res) => res.json());
};

export { getAll, createNewFeedback };
