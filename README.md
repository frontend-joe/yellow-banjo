# VueJS Developer Test

In this test you'll find a simple pre-prepared VueJS SPA that allows for the
(limited) browsing of Unsplash using the [Unsplash API](https://api.unsplash.com).

Your goal is to add a few simple features to this app using best practices.

To use the Unsplash API you will need to register for a **FREE** developer account
at <https://unsplash.com/developers>. You **do not** need to submit your
Unsplash API credentials upon completion.

## Project setup
The first step is to [register a demo application on Unsplash](https://unsplash.com/oauth/applications/new).
Once you have done this make a note of the **Access Key** they provided you. This
is your **Access Key** when talking to the Unsplash API.

Next install the application just like any other VueJS SPA using:

```
npm install
```

Once this is done you're ready to start working on the new features.

To launch the app with hot-reload during development you can use:

```
npm run serve
```

### Initial launch / Access Key
When opening the app for the first time you should be redirected from the
apps homepage to its authentication page, where you will be asked to provide
your Unsplash **Access Key**. This is to provide the app with the required
details to perform public actions against the Unsplash API.

To complete this test you will only need to perform public actions against the
API. At no point should anything more than the **Access Key** be required to
get data from the API, and you are not expected to set any data using the API.

## Missing features / Project tasks
As mentioned your task is to implement some new features into the application
using whichever methods you deem most suitable. You are encouraged to add any
additional NPM packages that make this easier / quicker for you. However, for
each package you add, we request you add a note to the bottom of this `README.md`
file explaining what the package is for, and why you selected it.

*An example of this exists at the end of the file already.*

### Feature 1: Favourites
The first of the missing features from the application is the ability to mark
photos as liked. To complete this feature you need to add the following
functionality.

* Ability to toggle the **like** state of any photo
* Add a single view which allows for the viewing of all currently **liked**
  photos by the user.
* Ensure **liked** photos are indicated to the user in any view which shows them.

**Important:** This feature should only be implemented locally within the application
and should not require Unsplash user authentication to work.

#### User Stories
* As a user I want to be able to mark photos I like.
* As a user I want to be able to see all the photos I like together in one place.
* As a user I want to know if I've liked a photo already no matter where I see it.
* As a user I want to be able to undo marking a photo as liked.

### Feature 2: Search
The second missing feature from the application is the ability to search Unsplash
for photos by keyword. To complete this feature you need to add the following
functionality.

* Add a single view which allows for searching the Unsplash API for photos based
  on user input.
* Ensure **liked** photos are indicated to the user should they appear in the
  search results.

#### User Stories
* As a user I want to be able to search for photos using simple search terms
  (e.g. baking, cakes, desserts, cloudy sky)

### Feature 3: User Interface
If you have launched the app already, you may at this point have noticed the
complete lack of styling within the application. As such using the application
is not overly user-friendly. Your task is to add any styles (and other user
interface components) to make the app easy to use on both mobile, and desktop
devices alike.

This can be achieved either with completely custom (S)CSS, or by the inclusion
of a front-end library such as [Bootstrap](https://getbootstrap.com/),
[Foundation](https://foundation.zurb.com/sites/getting-started.html), 
[Bulma](https://bulma.io/), etc...

Either option is of equal merit. The important part of this "feature" is the
general usability of the app, not the code used to achieve it. That said the 
code should still be readable and easy to understand.

### Bonus: Pagination
Currently, the application only ever displays the first page of results from the
Unsplash API, however this could be expanded to include pagination on relevant
views within the application.

#### User Stories
* As a user I want to be able to see all the possible search results
* As a user I want to be able to see more than just the first 10 recommended 
  photos on the homepage
* As a user I want to be able to explore all the photos by a photographer

## Included Packages
### VueRouter
[Vue Router](https://router.vuejs.org/) is the official router for Vue.js . It
deeply integrates with Vue.js core to make building Single Page Applications with
Vue.js a breeze. As such this package was chosen to provide the core routing
capabilities of the SPA.

### Axios
[Axios](https://github.com/axios/axios) is a Promise based HTTP client for the
browser and node.js which simplifies the process of talking to remote services
such as the Unsplash API. It is one of the most popular libraries for use with
VueJS for consuming APIs and as such is the library of choice in this app.
