/**
 5) How will you display
    a) programming er coddogosti
    b) VW
    c) Bangladesh
 */
    let instructor = {
        name: "Jhankar Mahbub",
        entrepreneur: true,
        additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
        favoriteBasketballTeam: "XYZ",
        isYoungest: true,
        hometown: {
        city: "ABC",
        state: "VW",
        },
        countriesLivedIn: ["Bangladesh", "New York"]
        }
        }
        }
    
    
  const output1=  instructor.additionalData.books[1];   
  console.log(output1);
  const output2=   instructor.additionalData.moreDetails.hometown.state;    
  console.log(output2);    
  const output3=   instructor.additionalData.moreDetails.countriesLivedIn[0];    
  console.log(output3);    