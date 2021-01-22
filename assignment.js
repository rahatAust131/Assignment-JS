// https://github.com/rahatAust131/Assignment-JS

// Function-1 : A Function To convert a distance of km into m
function kilometerToMeter(distance) {
  if (distance < 0) {
    //log an error message if input < 0
    console.log(
      "Unexpected Value (For Function-1)! Distance can not be negative"
    );
  }

  // main procedure
  else {
    return distance * 1000; //1km = 1000m
  }
}

// Function-2 : A Function To calculate budget
function budgetCalculator(watchCount, mobileCount, laptopCount) {
  // log an error message if input is a negative value
  if (watchCount < 0 || mobileCount < 0 || laptopCount < 0) {
    console.log(
      "Unexpected Value (For Function-2)! Please Enter a valid Input"
    );
  }

  // main procedure
  else {
    watchCount *= 50; //per watch 50$
    mobileCount *= 100; //per mobile 100$
    laptopCount *= 500; //per laptop 500$
    var totalBudget = watchCount + mobileCount + laptopCount;
    return totalBudget;
  }
}

// Function-3 : A Function To calculate the cost of staying at hotel
function hotelCost(daysOfStaying) {
  // log an error message if input is a negative value
  if (daysOfStaying < 0) {
    console.log(
      "Invalid input (For Function-3)! Please Enter a valid (positive) Amount"
    );
  }

  //main procedure
  else {
    var totalCost = 0;

    //if the night to stay at the hotel is smaller than or equal to 10 days
    if (daysOfStaying <= 10) {
      totalCost = daysOfStaying * 100;
    }
    //if the night to stay at the hotel is smaller than or equal to 20 days
    else if (daysOfStaying <= 20) {
      //first 10 days cost = 10 * 100 = 1000
      //remaining days (after 10 days) = daysOfStaying - 10
      totalCost = 1000 + (daysOfStaying - 10) * 80;
    }
    //if the night to stay at the hotel is larger than 20 days
    else if (daysOfStaying > 20) {
      //first 20 days cost = (10 * 100) + (10 * 80) = 1800
      //remaining days (after 20 days) = daysOfStaying - 20
      totalCost = 1800 + (daysOfStaying - 20) * 50;
    }
    return totalCost;
  }
}

// Function-4 : A Function To measure the largest name among friends
function megaFriend(friendNames) {
  //if the array is null, log an error message
  if (friendNames == "") {
    console.log("Null Array! or Invalid Input (For Function-4)!");
  }

  //main procedure
  else {
    // initializing the maxLen as the length of the 1st name of the array
    var maxLen = friendNames[0].length;

    // initialization of variable (to store the index of the largest name)
    var maxStrIndex = 0;

    // loop for iterating the array
    for (var i = 0; i < friendNames.length; i++) {
      if (friendNames[i].length > maxLen) {
        maxLen = friendNames[i].length;
        maxStrIndex = i; //storing the index of the largest name
      }
    }
    return friendNames[maxStrIndex];
  }
}
