export async function getRelatedWords(query: string) {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?ml=${query}&max=10`,
    );

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching words", error);
  }
}
