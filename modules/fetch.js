export async function fetchFallas(URL) {
  const response = await fetch(URL);
  return await response.json();
}
