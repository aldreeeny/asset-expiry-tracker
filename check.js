//days, data
const dataCheck = (days,data,dataIndex,type,webhookurl) => {

  data = getImpData(data,dataIndex); 
      //Logger.log(data);
  data = dateFormat(data); 
      //Logger.log(data);
  let expired = checkExpiry(days,data);

    if(expired.length != 0){
        expired = toObject(expired,type);
        //send to webhook . . . .
        webhook(expired,webhookurl)
    }
}


const getImpData = (data,dataIndex) => {
    let newArray = data.map(subArray => 
    dataIndex.map(index => subArray[index])
  );
  //Logger.log(newArray);
return newArray
}

