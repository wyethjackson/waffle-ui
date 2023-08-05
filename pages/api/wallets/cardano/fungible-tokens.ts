// import gqlFetch from "../../gql-fetch";
//
// const fetchCardanoFungibleTokensByAddr = async (publicAddrs: [number]): Promise<object> => {
//   return await gqlFetch(getCardanoFungibleTokensByAddrQuery, {publicAddrs});
// }
//
// const fetchCardanoFungibleTokenTransactionsByAddr = async (publicAddrs: [number]): object => {
//   return await gqlFetch(getCardanoFungibleTokenTransactionsByAddr, {publicAddrs});
// }
//
// const getCardanoFungibleTokensByAddrQuery = `
//   query getCardanoFungibleTokensByAddrQuery($publicAddrs) {
//     cardano(publicAddrs: $publicAddrs) {
//       wallet {
//         fungibleTokens {
//           type
//           name
//           amount
//           price {
//             currency {
//               ada
//               usd
//             }
//           }
//         }
//       }
//     }
//   }
// `;
//
// const getCardanoFungibleTokenTransactionsByAddr = `
//   query getCardanoFungibleTokenTransactionsByAddr($publicAddrs) {
//     cardano(publicAddrs: $publicAddrs) {
//       wallet {
//         fungibleTokens {
//           type
//           name
//           transactions {
//             type
//             amount
//             price {
//               currency {
//                 ada
//                 usd
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//
// `;