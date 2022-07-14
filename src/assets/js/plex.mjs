// import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
// import { Metaplex } from '@metaplex-foundation/js';

// const connection = new Connection(clusterApiUrl("mainnet-beta"));
// const metaplex = new Metaplex(connection);

// var button = document.getElementsByClassName('button');
// button[0].addEventListener("click", async (_) => {
//     console.log("HELOOOOO");
    // const mint = new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL");
    // const nft = await metaplex.nfts().findByMint(new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL"));
    // const nft = await metaplex.nfts().findByMint(mint);
    // console.log(`NFT: ${nft}`);
// })

// export async function fetchSingleNFT(mintAddress) {
//     return new Promise(async function(resolve, reject) {
//         try {
//             const solAddress = new PublicKey(mintAddress);
//             // const mint = new PublicKey("zLjKDLGSL2m8NVXXu5TGfQEm6SAYMFy7pJvbfAKzTq3");
//             // const nft = await metaplex.nfts().findByMint(new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL"));
//             const nft = await metaplex.nfts().findByMint(solAddress);
//             console.log(`NFT NAME: ${nft.metadata.name}`);
//             console.log(`NFT SYMBOL: ${nft.metadata.symbol}`);
//             console.log(`NFT IMAGE URL: ${nft.metadata.image}`);
//             resolve(nft);   
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

// export async function fetchAllNFTsForOwner(ownerAddress) {
//     return new Promise(async function(resolve, reject) {
//         try {
//             const solAddress = new PublicKey(ownerAddress);
//             // const ownedNfts = await metaplex.nfts().findAllByOwner(metaplex.identity().publicKey);
//             const ownedNfts = await metaplex.nfts().findAllByOwner(ownerAddress);
//             resolve(ownedNfts);   
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

// const mintAddress = "CP3qXQxZQELXGecNV1J1BAVHW1VDaMpqjjBynCUHLJXo"
// fetchSingleNFT(mintAddress).then((nftList) => {
//     console.log(`SUCCESS: ${nftList}`);
// }).catch((err) => {
//     console.log(`FAIL: ${err}`);
// });

// fetchAllNFTsForOwner("FDKxh64rM9hmujPVDJYUMPR2dMQ3L6Hrhdcwme8VtpbM").then((nfts) => {
//     console.log(`This account owns ${nfts.length} NFTs`)
//     for (let nft of nfts) {
//         nft.metadataTask.run().then((metadata) => {
//             console.log(`METADATA: ${metadata.name}`)
//             console.log(`METADATA: ${metadata.image}`)
//         }).catch((error) => {
//             console.log(`METADATA ERRROR: ${error}`)
//         })
//     }
// }).catch((err) => {
//     console.log(`Failed with error: ${err}`);
// });
