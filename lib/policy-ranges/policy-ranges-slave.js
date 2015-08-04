export default {
    fetch: (agencyId) => {
      let url = `http://localhost:43972/PolicyRanges/${agencyId}`;
      return fetch(url).then(response => response.json());
  }
}
