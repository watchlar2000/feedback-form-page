const createNewFeedback = async (newFeedback) => {
  console.log(
    `Sent post request with the following data: ${JSON.stringify(newFeedback)}`,
  );
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newFeedback),
  };

  fetch("http://localhost:5000/feedback", requestOptions);
};

const getAll = () => {
  return fetch("http://localhost:5000/feedback").then((res) => res.json());
};

export { getAll, createNewFeedback };
