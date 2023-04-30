# Gplaces NodeJS

## This app showcase how to get Google places data after a Google Places Autocomplete search

1. Autocomplete Search
2. Website link
3. Ratings in stars
4. Google place photos with pagination


## How to use 
You  search for a place using keywords and then places data would be displayed once an option is selected.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Install dependencies: `npm install` or `yarn`
3. Create a Google Places API key and add GPLACE_API_KEY to .env file in frontend and backend

## Creating Google Places API key

1. Create a Google Cloud Platform Account: To use the Google Places API, you need to have a Google Cloud Platform account. You can create an account by visiting the following link: https://console.cloud.google.com/freetrial.

2. Create a new project: After creating a Google Cloud Platform account, create a new project. You can create a new project by clicking on the “Select a project” dropdown in the top navigation bar and clicking on the “New project” button.

3. Enable the Places API: To use the Places API, you need to enable it for your project. You can do this by going to the Google Cloud Console and navigating to the “APIs & Services” section. Click on “Enable APIs and Services” and search for “Places API”. Then, click on “Enable” to enable the API.

4. Create API Key: After enabling the Places API, create an API key to access it. To create an API key, go to the Google Cloud Console and navigate to the “APIs & Services” section. Click on “Credentials” and then click on “Create credentials” and select “API key”. Follow the prompts to create your API key.

5. Restrict the API Key: It is recommended to restrict the usage of the API key for security reasons. You can restrict the usage of the API key by going to the “Credentials” section in the Google Cloud Console and selecting your API key. Under the “Key restriction” section, you can select which APIs the key is allowed to access, and restrict the key usage to specific IP addresses or referrer URLs.

6. Use the API key: Once you have your API key, you can use it to make requests to the Google Places API. You will need to include the API key as a parameter in your requests to authenticate your requests. For example, to get details about a place, you can make a request to the following URL, replacing “YOUR_API_KEY” with your actual API key:

```
https://maps.googleapis.com/maps/api/place/details/json?placeid=PLACE_ID&key=YOUR_API_KEY
``` 

I hope this helps!

## Usage

1. Start the development server: `npm start` or `yarn start` (with concurrently, you just need to run from root directory).
2. Open the web browser and navigate to http://localhost:3000

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Screenshots

![AutocompleteSearch](https://github.com/zackenichi/Gplaces-NodeJS/blob/main/Screenshots/Screen%20Shot%202023-05-01%20at%2012.21.02%20am.png)

![PlaceDetails](https://github.com/zackenichi/Gplaces-NodeJS/blob/main/Screenshots/Screen%20Shot%202023-05-01%20at%2012.21.05%20am.png)



## License

[MIT](https://choosealicense.com/licenses/mit/)
