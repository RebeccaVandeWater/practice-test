const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

let currentYear=2023
let jsReleaseYear=1995

console.log("the current age of javascript is", currentYear-jsReleaseYear)

console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

function caseDetails(){
  
  for(let i=0;i<cases.length;i++){

  let book=cases[i]

    // console.log(book.title, book.releaseYear)

    if(book.releaseYear===1903){
      console.log(book.title, book.releaseYear)
    }

  }

}

function everyNum(){

  console.log("Starting")
    for(i=0; i<=100; i++){
  
      if(i%10===0){
        console.log(i);
      }
  
      if(i===50){
        console.log("Halfway");
      }
  
    }
  
  console.log("Finished")
  
  }

function oldEnough(){

  let jsAge = 100

  if(jsAge>=ageToVote){
    console.log("JavaScript is old enough to vote.");
  } else{
    console.log("JavaScript is not old enough to vote.");
  }

}






