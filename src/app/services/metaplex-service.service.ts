import { Injectable } from '@angular/core';
import { Metaplex } from "@metaplex-foundation/js";
import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js';

// const { metadata: { Metadata } } = programs;

@Injectable({
  providedIn: 'root'
})
export class MetaplexServiceService {
  connection = new Connection(clusterApiUrl("mainnet-beta"));
  metaplex = new Metaplex(this.connection);
  constructor() { }
  
  fetchSingleNFT(mintAddress: string) {
    return new Promise<any>( async (resolve, reject) => {
      try {
        const solAddress = new PublicKey(mintAddress);
        // const mint = new PublicKey("zLjKDLGSL2m8NVXXu5TGfQEm6SAYMFy7pJvbfAKzTq3");
        // const nft = await metaplex.nfts().findByMint(new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL"));
        const nft = await this.metaplex.nfts().findByMint(solAddress);
        // console.log(`NFT NAME: ${nft.data.data.name}`);
        // console.log(`NFT SYMBOL: ${nft.data.data.symbol}`);
        // console.log(`NFT IMAGE URL: ${nft.data.data.uri}`);
        resolve(nft);   
      } catch (error) {
        reject(error);
      }
    })
  }

// fetchAllNFTsForOwner(ownerAddress: string) {
//   return new Promise<any>(async (resolve, reject) => {
//     try {
//         const solAddress = new PublicKey(ownerAddress);
//         // const ownedNfts = await metaplex.nfts().findAllByOwner(metaplex.identity().publicKey);
//         const ownedNfts = await this.metaplex.nfts().findAllByOwner(solAddress);
//         resolve(ownedNfts);   
//     } catch (error) {
//         reject(error);
//     }
//   })
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
}
