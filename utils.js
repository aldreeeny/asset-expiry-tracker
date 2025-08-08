const checkExpiry = (days, data) => {

let expired = [];
  let dateToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
 // Logger.log(dateToday);

  data.forEach(clientdata => {

    let lastIndex = clientdata.length-1;
    //Logger.log(clientdata[lastIndex]);
    date = new Date(clientdata[lastIndex].getFullYear(), clientdata[lastIndex].getMonth(), clientdata[lastIndex].getDate()); //get last value index
      
    
    let timeDifference = Math.abs(dateToday - date);
    // Convert time difference from milliseconds to days
    let dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    // Check if the difference is exactly 3 days

    //Logger.log(dayDifference);
    let daysApartCheck = dayDifference === days;

    let checkbefore = dateToday < date; //check if the date is not before today
    //Logger.log(checkbefore)

    //Logger.log(daysApartCheck);
    if(daysApartCheck == true && checkbefore == true) {

      expired.push(clientdata);
    }
  })

  return expired
}



const dateFormat = (data) => {
  let formated = [];

  data.forEach(clientdata => {
    let lastIndex = clientdata.length-1;

    let date = Date.parse(clientdata[lastIndex]);
    date = new Date(date); 
    clientdata.push(date);
    formated.push(clientdata);

  })
  //Logger.log(formated);
 return formated
}



const toObject = (expired,type) => {
  const result = [];
  Logger.log(type);

    // Loop through each inner array in the 2D array
    expired.forEach(innerArray => {
        // Create a new object for each inner array
        let obj = {
          TYPE : type
        };

        // Assign values to the object properties based on the inner array length
        if (innerArray.length > 0) obj.SHARED_DRIVE_MAIN_FOLDER_TITLE = innerArray[0];
        if (innerArray.length > 1) obj.LINK_TO_ASSET_FOLDER = innerArray[1];
        if (innerArray.length > 2) obj.ADD_FIELD_1 = innerArray[2];
        if (innerArray.length > 3) obj.ADD_FIELD_2 = innerArray[3];
        if (innerArray.length > 4) obj.ADD_FIELD_3 = innerArray[4];
        if (innerArray.length > 5) obj.TYPE = type;
        if (innerArray.length > 6) obj.EXPIRY_DATE = innerArray[5];

        // Push the created object to the result array
        result.push(obj);
    });

    // Return the array of objects
    return result;
}