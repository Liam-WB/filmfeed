# Filmfeed frontend | Tests

Return to [README.md](/README.md)

--

Comprehensive testing has been done throughout development to ensure that the project's functions and features work as intended, and without issue.

## Directory of Contents

* Responsiveness Tests
* Code Validation
* Bugs
    * Resolved Bugs
    * Unresolved Bugs
* Manual/features Tests
* Lighthouse Tests
* Peer Tests

### Responsiveness tests

The responsiveness tests were mainly composed of device, viewport, browser and compatability tests. The deployed filmfeed react application has underwent rigorous and frequent testing on multiple devices and screen sizes to ensure its responsiveness and adaptability. Developer Tools were utilized to simulate various screen sizes, enabling thorough examination of how the website behaves across different devices. The frontend was also tested on different web browsers, in tandem with it's backend half to ensure that there were no errors or issues being caused between them.

### Code validation

#### W3C HTML Validation

![W3C HTML](/md_images/Screenshot%202024-05-05%20135951.png)

No errors were found in the deployed URL passed through the W3C validator and some non-major warning messages for trailing slashes were returned.

#### W3C CSS Validation

![W3C CSS](/md_images/Screenshot%202024-05-05%20142013.png)

No errors were found in the deployed URL passed through the W3C validator.

#### ESLint JS Validation

All js pages, components and contexts .js files were linted and returned no errors or major warnings.

### Bugs

#### Resolved Bugs

* Bug where UserRating.js component was not working due to missing movie data. This was fixed by adding useEffect and useLocation to MoviesPage.js and reformatting UserRating.js to read movie data and update movies supplied by useEffect.

#### Unresolved Bugs

* Found a bug where on certain ios devices e.g. iphone 16, pages were not loading as intended. Although the base html would load, user was unable to log in even though they would recieve a success message.

### Features tests

As well as the tests above, the following manual tests were executed to ensure a good user experience.

#### Authentication - Logged Out User

✓ Typing /feed into the browser, user is redirected to homepage.

✓ Typing /liked into the browser, user is redirected to homepage.

✓ Typing /postcreate into the browser, user is redirected to homepage.

✓ Typing /profile/edit into the browser, user is redirected to homepage.

✓ Typing /edit forms into the browser, user is redirected to homepage.

✓ Desktop and tablet users can see an image next to the sign in form

✓ Mobile users can't see an image next to the sign in form

✓ Desktop and tablet users can see an image next to the sign up form

✓ Mobile users can't see an image next to the sign up form

#### Navigation - Logged In User

✓ Clicking the navbar logo loads the home page

✓ User can't see the sign in button in the navbar profile section dropdown menu

✓ User can't see the sign up button in the navbar profile section dropdown menu

✓ The user can see the profile page link in the navbar

✓ The user can see the sign out link in the navbar

✓ Users can see the movies section link in the navbar

✓ Users can see the contact us link in the navbar

✓ Users can see the 'Add Post' button in the navbar

✓ Tablet and mobile users can see the navbar options in a burger menu dropdown

#### Posts Page / Homepage - Logged Out User

✓ Users can view the Popular Profiles component

✓ Users can not view the follow button next to each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view all posts, comments, content, image and movie tags

✓ Users can view the likes and comments count

✓ Clicking on an post image, users are redirected to the selected post detail page

✓ Clicking on a post comments count, users are redirected to the selected post detail page

✓ Clicking on the post owner's avatar, users are redirected to the selected profile page

✓ Users can search for a particular post by typing in the post title, the username of the post owner or the post's movie tag title

#### Posts Page / Homepage - Logged In User

✓ Users can view the Popular Profiles component

✓ Users can view the follow button next to each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Clicking on a popular profile follow button, users can follow or unfollow profile

✓ Users can view all posts, content, images and tags

✓ Users can view the likes and comment count

✓ If the logged in user is the post owner, user can not click the like button

✓ Clicking on the like button, if logged in user is not post owner, like count goes up and down on a toggle

✓ Clicking on a post image, users are redirected to the selected post detail page

✓ Clicking on a post comments count, users are redirected to the selected post detail page

✓ Clicking on a post owner avatar, users are redirected to the selected profile page

#### Movies Page - Logged Out User

✓ Users can search a movie in the searchbar

✓ Users can view a searched movie's details upon submitting their search by clicking the submit button

✓ Users can are not given the option to rate the movie, but can see the current average user rating

#### Movies Page - Logged In User

✓ Users can search a movie in the searchbar

✓ Users can view a searched movie's details upon submitting their search by clicking the submit button

✓ Users are given the option to rate the movie

✓ Users can rate a movie 1 through 5 stars

✓ Upon submitting a user rating, the movie's average rating will be changed accordingly on next page visit/refresh

#### Post Page - Logged Out User

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view details of a single post

✓ Clicking on an post owner's avatar, users are redirected to the selected profile's page

✓ Clicking on the like button, users are advised to login to like a post

✓ Users can view any published comments posted about this event

✓ Users can not see the create comment form

✓ Users can see a post's movie tag

✓ Users can click on a posts movie tag to bring them to the post's detail page

#### Post Page - Logged In User

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile's avatar, users are redirected to the selected profile's page

✓ Users can view the details of a single post

✓ Users can view the likes and comment count

✓ Clicking on a post owner's avatar, users are redirected to the selected profile's page

✓ Clicking on the like button, like count goes up and down on a toggle

✓ If the logged in user is the post owner, user can not click the like button

✓ Users can view any published comment posted below the post

✓ Users can view the create comment form

✓ Users can type into the comment form and submit a comment to the post

✓ On submitting a comment, the comment count increases by 1

✓ If the logged in user is the owner of a published comment, they can see the three dots edit/delete menu next to it

✓ User can edit their own comment via the three dots edit/delete menu

✓ User can delete their own comment via the three dots edit/delete menu

✓ On deleting a comment, the comment count decreases by 1

✓ If the logged in user is the owner of the post, they can see the three dots edit/delete menu next to the created at date

✓ User can edit their own posts via the three dots edit/delete menu

✓ On clicking edit post, user is redirected to the edit post form

✓ User can delete their own posts via the three dots edit/delete menu

✓ On clicking delete post, user is taken to the home page

✓ Users can see a post's movie tag

✓ Users can click on a posts movie tag to bring them to the post's detail page

#### Contact us Page

✓ Users can see the contact us form

✓ Users can fill out the contact form and submit the form

✓ Users will send an email containing their message to the given emailjs templates recipient email

#### Create Post Form Page - Logged In User

✓ Users can view the empty form to create a new post

✓ Users can upload an image into the form

✓ Users can fill out the contact form and submit the form

✓ Users can change an uploaded image

✓ Users can submit the form without an image

✓ Users can't submit the form without a title

✓ Users can't submit the form without filling out the post's text field

✓ Users can link a movie to their post

✓ Upon clicking submit movie, the user is recieved with a browser alert informing them of their selection

✓ Users can submit the form without a movie tag

✓ Users can update their movie selection

#### Edit Post Form Page - Logged In User

✓ Users can view the post form pre-populated with the current existing post details

✓ Users can upload an image into the form

✓ Users can change an uploaded image

✓ Users can submit the form without an image - the image will continue to be the default asset

✓ Users can't submit the form without entering written content for the post

✓ Users can link a movie to their post

✓ Upon clicking submit movie, the user is recieved with a browser alert informing them of their selection

✓ Users can submit the form without a movie tag

✓ Users can update their movie selection

#### Post Feed - Logged In User

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the follow button next to each Popular Profile

✓ Clicking on a popular profile follow button, users can become a follower of the selected profile

✓ Users can view all posts posted by profiles they follow - written content, image and tags

✓ Users can view the likes count

✓ Users can view the comments count

✓ Users can view the post movie tags where selected

✓ Users see a no results found message if they don't follow any profiles, or the profiles they follow haven't created any posts

✓ Clicking on a post image or movie tag, users are redirected to the selected post page

✓ Clicking on the like button, likes count goes up and down on a toggle

✓ If the logged in user is the post owner, user can not click the like button

✓ Clicking on the post comments count, users are redirected to the selected post detail page

✓ Clicking on a post owner's avatar, users are redirected to the selected profile's page

✓ Users can search for a particular post by typing in keywords from the post content, the username of the post owner or the post's movie tag

#### Liked - User Logged In

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile's avatar, users are redirected to the selected profile's page

✓ Users can view the follow button next to each Popular Profile

✓ Clicking on a popular profile's follow button, users can become a follower of the selected profile

✓ Users can view all posts they have liked

✓ Users see a no results found message if they haven't clicked the like button on any posts

✓ Users can view the likes count

✓ Users can view the comments count

✓ Users can view the post movie tags where selected

✓ Clicking on a post image or movie tag, users are redirected to the selected post page

✓ Clicking on the like button, likes count goes up and down on a toggle

✓ Clicking on the post comments count, users are redirected to the selected post detail page

✓ Clicking on a post owner's avatar, users are redirected to the selected profile's page

✓ Users can search for a particular post by typing in keywords from the post content, the username of the post owner or the post's movie tag

#### Profile Page - Logged In User

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the number of posts the profile owner has posted

✓ Users can view the number of followers the profile has

✓ Users can view the number of users the profile is following

✓ Users can view the profile owner's username

✓ Users can view the profile owner's bio

✓ Users can view the profile owner's avatar

✓ Users can view the posts which were posted by the selected profile

✓ Clicking on the post image or movie tag, users are redirected to the selected post's page

✓ Clicking on the like button, like count goes up and down for post on a toggle

✓ If the logged in user is the post owner, user can not click the like button

✓ Clicking on post comments count, users are redirected to the selected post's page

✓ If the user is viewing their own profile page, they can see the three dots edit profile menu next to the profile statistics

✓ Users can edit their own profile page via the three dots edit/delete menu

✓ On clicking edit profile, user is redirected to the edit profile form page

✓ User can edit their own username via the three dots edit profile menu

✓ User can edit their own password via the three dots edit profile menu

#### Edit Profile Page - Logged In User

✓ Users can view the profile form pre-populated with the current profile details

✓ Users can upload an avatar image into the form

✓ Users can change the uploaded image