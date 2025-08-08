# Asset & License Expiry Tracking Automation

A Google Apps Script solution that automatically monitors and tracks expiry dates for vehicles, properties, and licenses, sending notifications via webhooks when items are approaching their renewal dates.

## Features

- **Multi-Asset Tracking**: Monitors vehicles, properties, and various license types
- **Automated Notifications**: Sends webhook notifications at 6 weeks, 1 month, and 2 weeks before expiry
- **Flexible Configuration**: Easy to customize tracking periods and notification schedules
- **Comprehensive Data Management**: Handles complex data structures with multiple fields
- **Webhook Integration**: Integrates with external systems via Zapier or other webhook services

## Supported Asset Types

### Vehicles
- Registration renewal dates
- Insurance renewal dates
- Service renewal dates

### Properties
- Insurance renewal dates
- Utility provider information
- Maintenance schedules

### Licenses
- Forklift licenses
- ARC licenses
- Driver's licenses
- Hamilton Island cards
- HVRAS certifications
- Gas licenses

## Prerequisites

- Google Apps Script project
- Google Sheets with structured data
- Webhook service (Zapier, etc.) for notifications
- Google Drive for asset folder organization

## Setup Instructions

### 1. Google Apps Script Project Setup

1. Create a new Google Apps Script project
2. Copy all the JavaScript files into your project:
   - `const.js` - Configuration and data structure definitions
   - `Triggers.js` - Trigger functions for different asset types
   - `utils.js` - Utility functions for date checking and data formatting
   - `check.js` - Core checking logic
   - `webhook.js` - Webhook notification functions

3. Update the webhook URLs in `const.js`:
   ```javascript
   const webhooks = {
     vehiclesWebhook : "YOUR_VEHICLES_WEBHOOK_URL_HERE",
     propertiesWebhook : "YOUR_PROPERTIES_WEBHOOK_URL_HERE",
     licensesWebhook : "YOUR_LICENSES_WEBHOOK_URL_HERE"
   }
   ```

### 2. Google Sheets Setup

Create three sheets in your Google Spreadsheet:

#### Vehicles Sheet ("VEHICLES")
- Range: A10:T
- Columns include: Vehicle type, registration, insurance, service dates, etc.

#### Properties Sheet ("PROPERTIES")
- Range: A2:AW
- Columns include: Property address, insurance, utilities, maintenance, etc.

#### Licenses Sheet ("LICENSES")
- Range: A7:AK
- Columns include: License numbers, expiry dates, types, etc.

### 3. Webhook Configuration

Set up webhook endpoints for each asset type:
- **Vehicles**: For vehicle-related notifications
- **Properties**: For property-related notifications
- **Licenses**: For license-related notifications

### 4. Trigger Setup

Set up time-based triggers in Google Apps Script:
- `checkVehiclesDataInsurance()` - Check vehicle insurance
- `checkVehiclesDataRegistration()` - Check vehicle registration
- `checkVehiclesDataService()` - Check vehicle service
- `checkPropetiesDataInsurance()` - Check property insurance
- `checkFORKLIFT_LICENSE()` - Check forklift licenses
- `checkARC_LICENSE()` - Check ARC licenses
- `checkDRIVERS_LICENSE()` - Check driver's licenses
- `checkHAMILTON_ISLAND_CARD()` - Check Hamilton Island cards
- `checkHVRAS()` - Check HVRAS certifications
- `checkGAS_LICENSE()` - Check gas licenses

## Configuration Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `vehiclesWebhook` | Webhook for vehicle notifications | `https://hooks.zapier.com/hooks/catch/...` |
| `propertiesWebhook` | Webhook for property notifications | `https://hooks.zapier.com/hooks/catch/...` |
| `licensesWebhook` | Webhook for license notifications | `https://hooks.zapier.com/hooks/catch/...` |

## Data Structure

### Vehicle Data Index
- Vehicle type, registration, insurance, service information
- Links to asset folders
- Cost and renewal frequency data

### Property Data Index
- Property address, owner, insurance details
- Utility providers and costs
- Maintenance and rates information

### License Data Index
- License numbers and types
- Issue and expiry dates
- Certification details

## Usage

### Automatic Monitoring

The script automatically checks expiry dates and sends notifications:
- **6 weeks before expiry**: Early warning
- **1 month before expiry**: Standard reminder
- **2 weeks before expiry**: Urgent reminder

### Webhook Notifications

When items are approaching expiry, the script sends structured data to webhooks:
```json
{
  "TYPE": "Insurance",
  "SHARED_DRIVE_MAIN_FOLDER_TITLE": "Asset Name",
  "LINK_TO_ASSET_FOLDER": "https://drive.google.com/...",
  "ADD_FIELD_1": "Policy Number",
  "EXPIRY_DATE": "2024-01-15"
}
```

### Manual Testing

Use the `test()` function in `const.js` to test data retrieval and processing.

## Functions Overview

### Core Functions
- `dataCheck()`: Main checking function for expiry dates
- `getImpData()`: Extracts important data from sheets
- `checkExpiry()`: Checks if items are expiring within specified days
- `dateFormat()`: Formats dates for processing
- `toObject()`: Converts data to structured objects
- `webhook()`: Sends notifications via webhooks

### Trigger Functions
- Vehicle-related: `checkVehiclesDataInsurance()`, `checkVehiclesDataRegistration()`, `checkVehiclesDataService()`
- Property-related: `checkPropetiesDataInsurance()`
- License-related: `checkFORKLIFT_LICENSE()`, `checkARC_LICENSE()`, `checkDRIVERS_LICENSE()`, etc.

## Customization

### Adding New Asset Types

1. Define data structure in `const.js`
2. Create data index array
3. Add trigger function in `Triggers.js`
4. Set up webhook endpoint

### Modifying Notification Periods

Change the day parameters in trigger functions:
```javascript
dataCheck(42, data, dataIndex, "Type", webhook); // 6 weeks
dataCheck(30, data, dataIndex, "Type", webhook); // 1 month
dataCheck(14, data, dataIndex, "Type", webhook); // 2 weeks
```

## Security Considerations

- **Webhook URLs**: Never commit webhook URLs to version control
- **Script Permissions**: Ensure appropriate Google Apps Script permissions
- **Data Access**: Review and restrict access to sensitive asset information
- **Webhook Security**: Implement proper authentication for webhook endpoints

## Error Handling

The script includes error handling for:
- Missing or invalid data
- Date parsing errors
- Webhook delivery failures
- Sheet access issues

## Dependencies

- Google Apps Script runtime V8
- Google Sheets API
- Google Drive API
- Webhook service (Zapier, etc.)
