// apiService.js

export function fetchData(url = "https://pokeapi.co/api/v2/pokemon/") {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}
