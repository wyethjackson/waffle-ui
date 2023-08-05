// import gqlFetch from "../../gql-fetch";
//
// const fetchCardanoNonFungibleTokensByAddr = async (publicAddrs: [number]): Promise<object> => {
//   return await gqlFetch(getCardanoNonFungibleTokensByAddrQuery, {publicAddras});
// }
//
// const getCardanoNonFungibleTokensByAddrQuery = `
//   query getCardanoNonFungibleTokensByAddrQuery($publicAddrs) {
//     cardano(publicAddrs: $publicAddr) {
//       wallets {
//         nonFungibleAssets {
//           assetGroup {
//             type
//             name
//             price {
//               floor {
//                 currency {
//                   ada
//                 }
//               }
//               average {
//                 currency {
//                   ada
//                 }
//               }
//             }
//             items {
//               id
//               name
//               mintNumber
//             }
//           }
//         }
//       }
//     }
//   }
// `;
//
//
//
// `