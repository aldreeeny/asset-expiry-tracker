const checkVehiclesDataInsurance = () => {

   dataCheck(42,vehiclesSheet,dataIndexVehiclesInsurance,"Insurance",webhooks.vehiclesWebhook);//check 6weeks before
   dataCheck(30,vehiclesSheet,dataIndexVehiclesInsurance,"Insurance",webhooks.vehiclesWebhook); //check a month before
   dataCheck(14,vehiclesSheet,dataIndexVehiclesInsurance,"Insurance",webhooks.vehiclesWebhook); //check 2weeks before

return  
}

const checkVehiclesDataRegistration = () => {

  dataCheck(30,vehiclesSheet,dataIndexVehiclesRegistration,"Registration",webhooks.vehiclesWebhook); //check a month before
  dataCheck(14,vehiclesSheet,dataIndexVehiclesRegistration,"Registration",webhooks.vehiclesWebhook); //check 2weeks before

return
}

const checkVehiclesDataService = () => {

 dataCheck(30,vehiclesSheet,dataIndexVehiclesService,"Service",webhooks.vehiclesWebhook); //check a month before
 dataCheck(14,vehiclesSheet,dataIndexVehiclesService,"Service",webhooks.vehiclesWebhook); //check 2weeks before

return  
}


// Properties

const checkPropetiesDataInsurance = () => {

   dataCheck(42,propertiesSheet,dataIndexPropertiesInsurance,"Insurance",webhooks.propertiesWebhook);//check 6weeks before
   dataCheck(30,propertiesSheet,dataIndexPropertiesInsurance,"Insurance",webhooks.propertiesWebhook); //check a month before
   dataCheck(14,propertiesSheet,dataIndexPropertiesInsurance,"Insurance",webhooks.propertiesWebhook); //check 2weeks before

}


// FORKLIFT LICENSE 	
const checkFORKLIFT_LICENSE = () => {

   dataCheck(42,licensesSheet,dataIndexFORKLIFTLICENSE,"FORKLIFT LICENSE",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataIndexFORKLIFTLICENSE,"FORKLIFT LICENSE",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataIndexFORKLIFTLICENSE,"FORKLIFT LICENSE",webhooks.licensesWebhook); //check 2weeks before

}

// ARC LICENSE 		
const checkARC_LICENSE = () => {

   dataCheck(42,licensesSheet,dataIndexARCLICENSE,"ARC LICENSE",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataIndexARCLICENSE,"ARC LICENSE",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataIndexARCLICENSE,"ARC LICENSEE",webhooks.licensesWebhook); //check 2weeks before

}
// DRIVER'S LICENSE 	
const checkDRIVERS_LICENSE = () => {

   dataCheck(42,licensesSheet,dataIndexDRIVERSLICENSE,"DRIVERS LICENSE",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataIndexDRIVERSLICENSE,"DRIVERS LICENSE",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataIndexDRIVERSLICENSE,"DRIVERS LICENSE",webhooks.licensesWebhook); //check 2weeks before

}
						
// FIRST AID SAFETY TRAINING 			
// PADI 		
// HAMILTON ISLAND CARD			
const checkHAMILTON_ISLAND_CARD	= () => {

   dataCheck(42,licensesSheet,dataHAMILTONISLANDCARD,"HAMILTON ISLAND CARD",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataHAMILTONISLANDCARD,"DRIVERS LICENSE",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataHAMILTONISLANDCARD,"DRIVERS LICENSE",webhooks.licensesWebhook); //check 2weeks before

}

// HVRAS 
const checkHVRAS = () => {
   dataCheck(42,licensesSheet,dataHVRAS,"HVRAS",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataHVRAS,"HVRAS",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataHVRAS,"HVRAS",webhooks.licensesWebhook); //check 2weeks before

}

// Gas License

const checkGAS_LICENSE = () => {
   dataCheck(42,licensesSheet,dataGASLICENSE,"GAS LICENSE",webhooks.licensesWebhook);//check 6weeks before
   dataCheck(30,licensesSheet,dataGASLICENSE,"GAS LICENSE",webhooks.licensesWebhook); //check a month before
   dataCheck(14,licensesSheet,dataGASLICENSE,"GAS LICENSE",webhooks.licensesWebhook); //check 2weeks before

}



