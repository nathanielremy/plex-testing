import { Component, OnInit } from '@angular/core';
import { MetaplexServiceService } from 'src/app/services/metaplex-service.service';
// import { callMe } from '../../../assets/js/plex.mjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaplexService: MetaplexServiceService) {
  }

  async ngOnInit() {
  //   this.metaplexService.fetchAllNFTsForOwner("FDKxh64rM9hmujPVDJYUMPR2dMQ3L6Hrhdcwme8VtpbM").then((nfts) => {
  //     console.log(`This account owns ${nfts.length} NFTs`)
  //     for (let nft of nfts) {
  //         nft.metadataTask.run().then((metadata: any) => {
  //             console.log(`METADATA: ${metadata.name}`)
  //             console.log(`METADATA: ${metadata.image}`)
  //         }).catch((error: any) => {
  //             console.log(`METADATA ERRROR: ${error}`)
  //         })
  //     }
  // }).catch((err) => {
  //     console.log(`Failed with error: ${err}`);
  // });
    // callMe();
    // const { metadata: { Metadata }} = programs;
    // C4EBmchpFrrZWj7RjknQ9HEkez36U71Ng9z9BUwCh43h
    // try {
    //   const fetchedMetadata = await Metadata.load(this.connection, 'Gx2nT7tyRP8KcNLyR1xjGsQ7vd2aPhr8BrdLsDXPcGcD');
    //   console.log(`FETCHED METADATA: ${fetchedMetadata}`);
    // } catch (err) {
    //   console.log(`Error fetching NFT data: ${err}`);
    // }
  }

  fetchNFT() {
    this.metaplexService.fetchSingleNFT("Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ").then((resp) => {
      console.log(`SUCCESS: ${resp}`)
    }).catch((err) => {
      console.log(`ERROR ${err}`);
    })
  }

}
