export default async function fetchLink(url: string) {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
    method: "GET",
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(JSON.stringify(err));
  }

  return response.json();
}
