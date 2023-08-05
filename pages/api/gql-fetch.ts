// import fetch from 'node-fetch';
//
// const gqlFetch = async (query: String, variables: object): Promise<object> => {
//   try {
//     const response = await fetch(`${process.env.GRAPHQL_DEV}/graphql`, {
//       method: 'POST',
//       body:    JSON.stringify({query, variables}),
//       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
//     });
//     return response.json();
//   } catch (e) {
//     console.error(e.getMessage());
//   }
// }
//
// export default gqlFetch;
