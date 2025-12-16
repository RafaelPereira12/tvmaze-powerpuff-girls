export const retrieveNumbersFromSearch = (searchString: string) => {
    const retrieveNumbers = searchString.match(/\d+/g);
    if (!retrieveNumbers) return [];
    return retrieveNumbers;
  };