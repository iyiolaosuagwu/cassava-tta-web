Welcome to cassava 

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Env file

you need to create a .env.local file in th root directory, you can find an.
#### example.env.local in it you can find the live base url to add to your newly created .env.local file (BASE_URL)

## Deploy Link

Live link: [https://cassava-tta-web.vercel.app/](https://cassava-tta-web.vercel.app/)

## Additional Informations

### Redux
would have been a better tool to use on a large scale application and also redux-persist to persist global data across the entire application
### UI Library
this webapp uses tailwin css as a UI kit to build components and the entire application
### User Flow
#### 1. when a user tries to open the live url the user lands on the registration which is the landing page of the application.

#### 2. user can see the list of information that needs to be filled (email, username, password, confirm password)

#### 3. if user doesnt fill all the required fields the sign up button will be disabled to ensure all fields are filled before making a request to sign up

#### 4. password and confirm password needs to match before user can proceed, and error message will be displayed to the user on such occurance 

#### 5. when all the fields are filled, by clicking the sig up button a request is amde to the backend to validate and save data

#### 6. if user already exist in the database and error message is showned to the user else the user will see an success message letting them know their account has been created successfully, then user will be redirected to the login screen.

#### 7. user has to fill the input feilds (email, password), if fields are empty the sign in button will be disabled.

#### 8. when a user tries to sign in with a fake or incorrect credential and error message is displayed to the user.

#### 9. on successful sign in user is redirected to the home screen were user can see their informations (username and email), also a logout button to log user out, clear localstorage and redirect user to the login page.

#### 10. on the login / register screen we have validation check to restrict users from being able to access the logon and register screen if the user is logged in / authenticated