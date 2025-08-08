//sheet directory range
const vehiclesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("VEHICLES ").getRange("A10:T").getValues();
const propertiesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROPERTIES").getRange("A2:AW").getValues();
const licensesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LICENSES").getRange("A7:AK").getValues();

const sheetIndexVehicles = {
    VEHICLE_TYPE: 0,
    SHARED_DRIVE_MAIN_FOLDER_TITLE: 1,
    REGO: 2,
    DESCRIPTION_ON_REGO_STATUS_CHECK: 3,
    YEAR: 4,
    VIN_CHASSIS: 5,
    CUSTOMER_REFERENCE: 6,
    REGISTRATION_RENEWAL_DATE: 7,
    EXPENSE_ACCOUNT: 8,
    FREQUENCY_OF_REGO_RENEWAL: 9,
    COST_OF_REGO: 10,
    INSURANCE_POLICY: 11,
    COST_OF_INSURANCE: 12,
    INSURER: 13,
    INSURANCE_DATE_RENEWAL: 14,
    SERVICE_RENEWAL_DATE: 15,
    SERVICE_COMPANY: 16,
    SERVICE_CHARGE: 17,
    LINK_TO_ASSET_FOLDER_URL: 18,
    ALSO_KNOWN_AS: 19,
    NOTES_COMMENTS: 20,
    AUTHORISED_PERSON: 21
};

const sheetIndexProperties = {
    PROPERTY_ADDRESS: 0,//Trigger
    OWNER: 1,//Trigger
    DETAILS: 2,
    INSURANCE_COMPANY: 3,//Trigger
    INSURANCE_POLICY: 4,//Trigger
    POLICY_COST: 5,
    RENEWAL_DATE_ANNUAL: 6, //Trigger 
    PAID_BY: 7,
    LINK_TO_ASSET_FOLDER_URL: 8,
    WATER_PROVIDER: 9,
    CUSTOMER_REFERENCE_NOTICE: 10,
    WATER_COST: 11,
    WATER_PAID_BY: 12,
    WATER_PAYMENT_FREQUENCY: 13,
    ELECTRICITY_PROVIDER: 14,
    ELECTRICITY_ACCOUNT: 15,
    NATIONAL_METER_IDENTIFIER_NMI: 16,
    ELECTRICITY_COST: 17,
    ELECTRICITY_PAID_BY: 18,
    ELECTRICITY_PAYMENT_FREQUENCY: 19,
    GAS_PROVIDER: 20,
    GAS_ACCOUNT: 21,
    GAS_COST: 22,
    GAS_PAID_BY: 23,
    GAS_PAYMENT_FREQUENCY: 24,
    INTERNET_PROVIDER: 25,
    INTERNET_ACCOUNT: 26,
    INTERNET_COST: 27,
    INTERNET_PAID_BY: 28,
    RATES: 29,
    RATES_ACCOUNT_NOTICE: 30,
    RATES_COST: 31,
    RATES_PAID_BY: 32,
    RATES_PAYMENT_FREQUENCY: 33,
    PHONES: 34,
    PHONES_ACCOUNT: 35,
    PHONES_COST: 36,
    PHONES_PAID_BY: 37,
    MAINTENANCE: 38,
    MAINTENANCE_ACCOUNT: 39,
    MAINTENANCE_COST: 40,
    MAINTENANCE_PAID_BY: 41,
    EMPTY_1: 42,
    EMPTY_2: 43,
    EMPTY_3: 44,
    INSURANCE_BROKER_INFORMATION: 45,
    NOTES: 46,
    LINK_TO_FILE: 47,
    VALUATIONS_OF_REPLACEMENT: 48
};

const sheetIndexLicenses = {
  Name: 0,
  LICENSE_NUMBER: 1,
  ISSUE_DATE: 2,
  EXPIRY_DATE: 3, // Forklift License
  CLASSES: 4,
  DATE_OF_BIRTH: 5,
  LICENSE_NUMBER_2: 6,
  EXPIRY_DATE_2: 7, //ARC LICENSE 		
  COST_OF_RENEWAL: 8,
  LICENSE_NUMBER_3: 9,
  CLASS: 10,
  TYPE: 11,
  CARD_NUMBER: 12,
  CONDITION: 13,
  RMDL: 14,
  PWCL: 15,
  EXPIRY_DATE_3: 16, // DRIVER'S LICENSE
  ISSUE_DATE_2: 17,
  RTO_NUMBER: 18,
  ATTAINMENT: 19,
  CERTIFICATE_NO: 20,
  DIVER_NO: 21,
  CERT_DATE: 22,
  INSTRUCTOR_NO: 23,
  ID_NO: 24,
  STATUS: 25,
  BUSINESS: 26,
  EXPIRY_DATE_4: 27, //HAMILTON ISLAND CARD			
  CRN: 28,
  EXPIRY_DATE_5: 29, // HVRAS 
  DOB_2: 30,
  LICENSE_NUMBER_4: 31,
  TYPE_2: 32,
  EXPIRY_6: 33, // Gas License
  SPACE1: 34,
  SPACE2: 35,
  LINK_TO_DRIVE: 36,
};
		



const dataIndexVehiclesRegistration = [sheetIndexVehicles.SHARED_DRIVE_MAIN_FOLDER_TITLE,sheetIndexVehicles.LINK_TO_ASSET_FOLDER_URL,"","","",sheetIndexVehicles.REGISTRATION_RENEWAL_DATE]; //Registration Renuwal Date
//[SHARED DRIVE MAIN FOLDER TITLE, LINK TO ASSET FOLDER, "", TYPE, EGISTRATION RENEWAL DATE, {FORMATED_DATE}]

const dataIndexVehiclesInsurance = [sheetIndexVehicles.SHARED_DRIVE_MAIN_FOLDER_TITLE,sheetIndexVehicles.LINK_TO_ASSET_FOLDER_URL,sheetIndexVehicles.INSURANCE_POLICY,"","",sheetIndexVehicles.INSURANCE_DATE_RENEWAL]; //Insurance Renuwal Date
//[SHARED DRIVE MAIN FOLDER TITLE, LINK TO ASSET FOLDER, ADD FIELD (INSURANCE POLICY), TYPE, INSURANCE DATE RENEWAL, {FORMATED_DATE}]

const dataIndexVehiclesService = [sheetIndexVehicles.SHARED_DRIVE_MAIN_FOLDER_TITLE,sheetIndexVehicles.LINK_TO_ASSET_FOLDER_URL,sheetIndexVehicles.SERVICE_COMPANY,"","",sheetIndexVehicles.SERVICE_RENEWAL_DATE]; //Service Renuwal Date
//[SHARED DRIVE MAIN FOLDER TITLE, LINK TO ASSET FOLDER, "ADD FIELD (SERVICE COMPANY)", TYPE, EGISTRATION RENEWAL DATE, {FORMATED_DATE}]


const dataIndexPropertiesInsurance = [sheetIndexProperties.PROPERTY_ADDRESS,sheetIndexProperties.LINK_TO_ASSET_FOLDER_URL,sheetIndexProperties.OWNER,sheetIndexProperties.INSURANCE_COMPANY,sheetIndexProperties.INSURANCE_POLICY,sheetIndexProperties.RENEWAL_DATE_ANNUAL];

const dataIndexFORKLIFTLICENSE = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"Fork Lift License", sheetIndexLicenses.EXPIRY_DATE];

const dataIndexARCLICENSE = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"ARC LICENSE", sheetIndexLicenses.EXPIRY_DATE_2];

const dataIndexDRIVERSLICENSE = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"DRIVERS LICENSE", sheetIndexLicenses.EXPIRY_DATE_3];

const dataHAMILTONISLANDCARD = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"HAMILTON ISLAND CARD", sheetIndexLicenses.EXPIRY_DATE_4];

const dataHVRAS = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"HVRAS", sheetIndexLicenses.EXPIRY_DATE_5];

const dataGASLICENSE = [sheetIndexLicenses.LINK_TO_DRIVE,sheetIndexLicenses.Name,"GAS LICENSE", sheetIndexLicenses.EXPIRY_6];

const currentDate = new Date();

// Configuration - Replace with your own webhook URLs
const webhooks = {
  vehiclesWebhook : "YOUR_VEHICLES_WEBHOOK_URL_HERE",
  propertiesWebhook : "YOUR_PROPERTIES_WEBHOOK_URL_HERE",
  licensesWebhook : "YOUR_LICENSES_WEBHOOK_URL_HERE"
}










