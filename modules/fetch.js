export async function fetchFallas(URL) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(URL, options);
  return await response.json();
}
