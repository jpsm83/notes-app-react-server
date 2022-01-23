### *** My Recipe Library ***


### Personal Notes

That was my last project during my bootcamp back in June. Actualy this is the 2.0 version of that project. After 6 month since I finished my bootcamp, I keept studing and improving my code skills during my free time and now, I decide to refactor this project. Comparing the before and after, I can see that has been a long way and the improvent is fantastic for me. It is a huge personal step and I am pretty happy with the results. Still few bug to solve (see the section 'Bugs' down in this README) and I am working on it.


### Description

A aplication to manage recipes. Filter then by name, cousine or ingredients.Create your account to be able to create, edit and delete your own recepies. Full CRUD using MongoDB as database and PassportJS for account authentication.


### MVP
CRUD for recipes & users.
Signin, login and logout with PassportJS.
Filter by name, cousine or ingredients.

### User Stories

- **404** - See a friendly 404 page when the page that doesn’t exist.
- **500** - see a friendly error page when the server is down.
- **homepage** - Navigate through the homepage and see the list of recipes. 
- **signup** - Create client account with PassportJS.
- **login** - Be able to create, edit and delete your own recipes.
- **logout** - Ensure that your personal account session been closed.
- **create recipe** - Once logedin access a form to create recipes.
- **edit recipe** - Once logedin access a form to edit recipes.
- **edit user** - Once logedin access a form to edit user.
- **my own creations** - See the list of yours own recipes.
- **recipe** - See the detail of an especific recipe.


### Backlog

- Add videos in how to cook.
- Implement cloudinary.
- Add Nodemailer functionalities.
- Optimize filters.
- Add external API.


### Bugs (Working on it)

- Validators are working but doesnt warn you when something is wrong. So far for the CRUD work you have to fill all the fileds.
- I didnt inplement filters by ingredients neither by cousine yet. Filter by name is working fine.


### Client / Frontend

### React Routes (React App)
| Path | page | Permissions | Behavior |
| - | - | - | - |
| / | Home | public <Route> | Navigate through the homepage and see the list of recipes |
| /create-recipe | CreateRecipe | PrivateRoute <Route> | Once logedin access a form to create recipes |
| /edit-recipe/:id | EditRecipe | PrivateRoute <Route> | Once logedin access a form to edit recipes |
| /edit-user/:id | EditUser | PrivateRoute <Route> | Once logedin access a form to edit user |
| /login | Login | AnounRoute <Route> | Be able to create, edit and delete your own recipes |
| /my-own-creations | MyOwnCreations | PrivateRoute <Route> | See the list of yours own recipes |
| /recipe/:id | Recipe | public <Route> | See the detail of an especific recipe |
| /signup | Signup | AnounRoute <Route> | Create client account with PassportJS |


### Components

- Header (Home, Login / Signup / Logout, Search Bar, Link to Code, Home, Create Recipe, My Own Creations, Edit User, Lower nav bar where you can filter recipes by cousine).

- Footer (Webpage copywrite and navigation details).

- Banner (Carrousel with 3 diferent advertizes).

- MyCreationsFeed (Display only recipes created by me).

- RecipeDetail (Show details of an especific recipe).

- RecipeCard (Show a resume of an especific recipe).

- RecipeFeed (Display all the recipes).

- RecipeForm (Form to create or edit recipe).

- Routes (Setup of Anoun and Private routes for navigation).

- Search (Search & filter recipes by name).

- UserForm (Form to create or edit user).

- Validators (Validators used in the forms).

- VerticalMenuBar (Filter recipes by ingredients)


### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.isLoggedin(user)
  - auth.edit(user)
- Recipes Service
  - recipes.create(data)
  - recipes.get()
  - recipe.getOne(id)
  - recipe.updateOne(id)
  - recipe.deleteOne(id)


### Data Structure FrontEnd
```
├── public
|   ├── img
|   |   ├── food-1.webp
|   |   ├── food-2.webp
|   |   ├── food-3.webp
|   |   ├── github.webp
|   |   └── logo.png
|   └── index.html
├── src
|   ├── components
|   |   ├── Banner
|   |   |   └── Banner.js
|   |   ├── Footer
|   |   |   └── Footer.js
|   |   ├── Header
|   |   |   └── Header.js
|   |   ├── MyCreationsFeed
|   |   |   └── MyCreationsFeed.js
|   |   ├── RecipeCard
|   |   |   └── RecipeCard.js
|   |   ├── RecipeDetails
|   |   |   └── RecipeDetails.js
|   |   ├── RecipeForm
|   |   |   └── RecipeForm.js
|   |   ├── RecipesFeed
|   |   |   └── RecipesFeed.js
|   |   ├── Routes
|   |   |   ├── AnounRoute
|   |   |   |   └── AnounRoute.js
|   |   |   └── PrivateRoute
|   |   |       └── PrivateRoute.js
|   |   ├── Search
|   |   |   └── Search.js
|   |   ├── UserForm
|   |   |   └── UserForm.js
|   |   ├── Validators
|   |   |   └── Validators.js
|   |   └── VerticalMenuBar
|   |       └── VerticalMenuBar.js
|   ├── context
|   |   └── auth.context.js
|   ├── pages
|   |   ├── CreateRecipe
|   |   |   └── CreateRecipe.js
|   |   ├── EditRecipe
|   |   |   └── EditRecipe.js
|   |   ├── EditUser
|   |   |   └── EditUser.js
|   |   ├── Home
|   |   |   └── Home.js
|   |   ├── Login
|   |   |   └── Login.js
|   |   ├── MyOwnCreations
|   |   |   └── MyOwnCreations.js
|   |   ├── Recipe
|   |   |   └── Recipe.js
|   |   └── Signup
|   |       └── Signup.js
|   ├── services
|   |   ├── auth.service.js
|   |   └── recipe.service.js
|   ├── App.js
|   ├── index.css
|   ├── index.js
|   └── reportWebVitals.js
├── .env
├── .gitignore
├── craco.config.js
├── package-lock.json
├── package.json
├── README.md
├── seeds.js
└── tailwind.config.js
```

### Server / Backend

### Models

- User model

```javascript
{
  username: { type: String, required: true },
  password: { type: String, required: true, minlength: 5 },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    ],
  },
  photo: {
    type: String,
    default:
      "https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg",
    maxlength: 300,
  },
  myRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
},
```

- Recipe model

```javascript
{
  dishName: { type: String, maxlength: 200, required: true },
  cousine: { type: String, maxlength: 250, required: true },
  type: { type: String, maxlength: 100, required: true },
  image: {
    type: String,
    default:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
  },
  ingredients: { type: String, maxlength: 1000, required: true },
  prepTime: { type: String, required: true },
  preparation: { type: String, maxlength: 2000, required: true },
  howToCook: { type: String, maxlength: 2000, required: true },
  servings: { type: String, required: true },
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
```


### API Endpoints (backend routes)

| HTTP Method | URL | Request Body | Description |
| - | - | - | - |
| POST | /auth/signup  | {username, email, password, photo} |  Checks if fields are not empty and user does not exists, then create user with encrypted password, and store user in session |
| POST | /auth/login | {username, password} | Checks if fields not empty, if user exists, and if password matches, then stores user in session |
| POST | /auth/logout| (empty)| Logs out the user |
| PUT | /auth/edit-user| {username, email, password, photo} | find a user by its id and update with data from fields |
| GET | /auth/isLoggedin | (session) | Checks if there is a user in session |
| GET | /recipes/ | (empty) | Show all recipes|
| GET | /recipes/:id | {isd} | Show specific recipe |
| POST | /recipe/ | {dishName, cousine, type, image, ingredient, prepTime, preparation, howToCook, servings} |  Create and save a new recipe |
| PUT | /recipes/:id| {dishName, cousine, type, image, ingredient, prepTime, preparation, howToCook, servings}| Edit recipe |
| DELETE | /recipes/:id | {id} | Delete recipe |


### Data Structure BackEnd
```
├── configs
|   ├── cloudinary.config.js
|   ├── cors.config.js
|   ├── db.config.css
|   ├── middleware.config.js
|   ├── passport.config.js
|   └── session.config.js
├── models
|   ├── Recipe.model.js
|   └── User.model.js
├── public
|   └── ( Front End Build )
├── routes
|   ├── auth.routes.js
|   └── recipes.routes.js
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```


### Git
* [GitHub] https://github.com/jpsm83/amazon-clone


### Deployed URL
* [Heroku] https://my-recipes-library-app.herokuapp.com/