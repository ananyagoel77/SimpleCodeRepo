/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTcollection=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, token_id, title, description, date) {
const nft={
   "name":name,
   "token_id":token_id,
   "title":title,
   "description":description,
   "creation_date":date
};
NFTcollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let a=0; a<NFTcollection.length;a++){
      console.log("Name: ", NFTcollection[a].name);
      console.log("Token_id: ", NFTcollection[a].token_id);
      console.log("Title: ", NFTcollection[a].title);
      console.log("Description: ", NFTcollection[a].description);
      console.log("Creation date: ", NFTcollection[a].creation_date);
      console.log("\n\n\n" );
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFTs  Minted do Far: ", NFTcollection.length);
}

// call your functions below this line
mintNFT("Ananya Goel",257089, "Sunset Serenity", "Digital Art work","20/4/22");
mintNFT("Rishab",2728089, "Pokemon card", "Game","2/8/22");
mintNFT("Aastha ",157289,"Dragon game", "online game","2/1/20");
listNFTs();
getTotalSupply();
