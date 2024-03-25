# Filmfeed

"Filmfeed" is a movie enthuasiast's take on a social media website, made for all types of users who are interested in sharing their experience and journey. Whether you're a casual watcher or a critic, filmfeed is tailor-made to welcome all, new-face or old to create connections and meet like-minded watchers!

This README.md is for the project frontend. For more information on the project backend, please visit [this link](https://github.com/Liam-WB/filmfeed-api).

--

The filmfeed interactive frontend is designed to give users a digitally hassle free and relatively simple yet effective user experience by keeping their journey to their intended actions short and sweet, whilst not taking their attention away from the big picture. Everything from asset performance to colour palet have been made with UX in mind. Unregistered users will be greeted with a hub-like-homepage connecting different movie enthusiasts, or people that just want to connect, from around the world, keeping up to date with the latest watches or simply joining in conversations. Unregistered users will find the usual social media features: Sign in/ Sign up pages, posts with the latest movie likes, dislikes, conversations, most popular movies and profiles and their pages as well as search functionality for finding more specific comments, posts or profiles. For those looking to get involved, signed in users will be given access to their own profile/identity as well as a tailor made experience for them to start their own conversations, topics or join other conversations. Users will also be able to like/unlike others posts and follow/unfollow others, therefore updating their own likes/dislikes and feeds.

Live Website [link](https://filmfeed-bcb30b221337.herokuapp.com/).

![Responsive](/md_images/image.png)

## Directory of contents

* User Experience Design (UX)
    * Strategy
        * Project Objective
        * Agile project management
        * User stories
    * Structure
        * Project structure
        * Features
        * Future features    
    * Skeleton
        * Wireframes
    * Surface
        * Design
* Technologies
* Testing
* Deployment
* Credits
--
## User Experience Design (UX)

### Strategy
--

#### Project Objective

The overall desired outcome of this project is to create and develop a content sharing, hub-like web application open to a wide demographic, ranging from casual modern day media consumers to professional movie critics. With this in mind, the site is made to provoke and inspire conversations on movie related topics, whilst consuming backend API data which is where all of the user's data will be stored, to boost performance as well as secure their sensitive information. To reach this outcome, the user is provided with view, created, edit, delete functionality, all with a twist of movie implementation, to provide the user with the best possible UX. The content is placed logically throughout the website, so that users can find what they need, without issue, and so that they can manage their own data as intended. With this in mind, these features are intended to allow users to interact with one another, hassle free and with all the above objectives considered.

#### Agile project management

This project was designed, developed and manages with agile methodologies in mind to provide the developer with an efficient and effective development process. This was done by delivering small features to the project step by step, allowing for easier project management, organisation and allowing each component to be given the detail and attention that is required. I started by creating a kanban board, developed in github projects and used this as the main project management, and organisation to help visualise the project priorities, limit in progress, and maximise the work flow/efficiency to make the frontend development process simpler. The user stories were colour coded with green, yellow, purple, red to categorise functions depending on priority and work progress.

I began by creating epics, divided into 3 sections. First I created the workspace epic, which would essentially house all of the projects task. After this I began developing desired user stories that would fit into the other 2 epics: Frontend resources, or backend API resources. I then began adding all of the frontend resources first as these were the desired outcome I was looking to give, and therefore the most valuable to consider during the project inception. Next, I turned my attention to developer user stories: What I as a developer was looking to achieve with these user stories in mind, and how I wanted to store these components. As mentioned above, after doing this the tasks were then colour coded and the projects planning became more fleshed out as I continued to develop components, step by step.

Filmfeed kanban board [link](https://github.com/users/Liam-WB/projects/8/views/1)

![Kanban](md_images/Screenshot%202024-03-24%20200746.png)

### Epics

* Set up a workspace

User stories were categorised into the 2 following milestones:

* Frontend resources
* Backend/API resources

### Developer User Stories

* As a developer I can create the navbar and footer with their respective features so that I can navigate different pages on the website and locate any import information/links
* As a developer I can create a log in, log out, sign up form so that users can create, switch, or leave their accounts on the website
* As a developer I can create a profile page so that users can access and edit their profile information/content
* As a developer I can create a post form page so that users can create, edit and update their own posts
* As a developer I can create a post detail page so that view a specifc post and its details
* As a developer I can create the homepage so that users can interact with the available functions and content on the homepage
* As a developer I can create the movies/TV shows app/feature so that they can be stored in my drf api and movies/TV shows can be associated with other app features e.g. profiles, posts
* As a developer I can create the search feature so that specific object id's can be located via object name, and stored in my drf api
* As a developer I can create the filter feature so that objects within the drf api can be located and categorised depending on their specific attributes
* As a developer I can create the comment like feature so that comment likes can be stored in my drf api
* As a developer I can create the comment reply feature so that comment replies can be stored in my drf api
* As a developer I can sign in, out and up so that I can switch to a different desired account
* As a developer I can create simple account and (admin) superuser accounts, as well as permission lock simple accounts so that developers can access permission locked features and users willl be able to view the site as intended
* As a developer I can create the comments app so that comments can be stored in my drf api
* As a developer I can create the followers app so that followers can be stored in my drf api
* As a developer I can create the likes app so that likes can be stored in my drf api
* As a developer I can create the posts app so that my posts can be stored in my drf api
* As a developer I can create the profiles app so that profiles can be stored in my drf api
* As a developer I can create a frontend folder containing a react project so that I can develop a frontend application to execute backend logic
* As a developer I can set up a django project so that I can create the apps/code components
* As a developer I can create a movie page so that users can find movies and their related information
* As a developer I can create data validation alerts so that users know if their submitted data is valid

#### User stories

* As a user I can see a list of recommended/relevant profiles/posts and movies so that my feed contains relevant content/movies/information
* As a user I can view a paginated list of posts (ordered from most recent) so that I can view relevant content on my feed (ordered from most recent)
* As a user I can access a post content form so that I can edit, update or create a post
* As a user I can delete my account so that my information is removed from the database
* As a user I can access respective profile create/signin,out/update forms so that I can create, leave, edit and update my profile
* As a user I can search and filter content so that I can recieve categorised/specific results based on my search
* As a user I can log in and out or create an account as intended so that I can access logged in features and exit my profile
* As a user I can view posts so that I can view site content/post details
* As a user I can view others' comments so that I can see conversations associated with the related post
* As a logged in user I can create, edit or update and delete posts so that I can change my profile's released content and post details
* As a logged in user I can like a post so that the user knows their post has been viewed and I liked the content
* As a logged in user I can comment on a post so that users can interact with the post and conversate about the content
* As a logged in user I can reply to a comment so that the comment turns into a discussion/conversation
* As a logged in user I can like a comment so that I can interact with a user and indicate I enjoyed their comment
* As a logged in user I can update my profile so that others can view my profile information
* As a logged in user I can link movies to my post so that I can show others what movie I am watching

#### Target Audience

* People looking for a social media site
* People looking to discuss their faviroute movies
* People looking to discuss a recently watched movie
* People looking to join in a conversation
* People looking to start a converstation
* People looking for something new
* People starting a new hobby
* Critics looking to write in depth analysis/ reviews

#### Unregistered User

* Simple, UX orientated, attention grabbing website naviagation for easy yet fulfilling exploration and user involvment.
* Aesthetic, immersive UX orientated visuals showcasing the different components, functions and features the site has to offer.
* Informative content structured to provide users with an overview of posts, profiles, movies as well as other social media related, categorised information.
* User friendly forms and error validation.
* A simple and easy to access sign up process.

#### Registered user

* A seamless login system and process, with secure, personalised user data.
* Browsing different content such as posts and their conversations, specific movies, user profiles.
* Access to a tailor made dashboard and navigation bar, made to easily format all components and their data in a logical order, allowing users who know their way around the site to easily access previously accessed features.
* Ability to modify their own data securely.

#### Admin user

* Secure and seperate login portal, for admin and superuser accounts to access all/ specific site data easily.
* Access to an admin dashboard, for admin users to see all site data and easily manage their content.
* CRUD functionality - Admin is able to add / remove data easily, and related data cascades in relation to the data's relationship declared in the backend.
* Confirmations for data management, incase of an error being made.

### Structure
--

#### Project structure

On the filmfeed site, authentication, display, feature access and page access are shown in 2 seperate views. For a logged out user, you are met with a less tailored dashboard, however some of the features offered to signed in users are still offered e.g. the ability to view posts, movies etc. The states of these components change if the user is classed as logged in, which an unregistered user will have the option to easily access via the navbar links.

When logged out, the navbar shows the Homepage icon, sign in and sign up pages as well as the movies page, allowing logged out users to still explore and discover what the site has to offer.

When a user is logged in, they are given more features. Their navbar is updated for a more tailored experience. This includes the "feed", "liked" and "profile" pages as well as the option to sign out. Logged in users are given the opportunity to create and manage their own data: Manage profile content, posts, comments, likes, follows, linked movies.

#### Features

##### Navigation

The nav bar is made to give the user a hassle free and simple navigation experience. With this in mind, it was developed using simplicity, and aesthetics as the foundations. For tablets and mobile devices the menu will adapt to a hamburger toggle menu, allowing for a more compact version of the same, simple component. The icons will adapt according to the authentication level, as mentioned above.

![NavBar1](md_images/Screenshot%202024-03-25%20085456.png)

![NavBar2](md_images/Screenshot%202024-03-25%20085510.png)

![NavBar3](md_images/Screenshot%202024-03-25%20085527.png)

![NavBar4](md_images/Screenshot%202024-03-25%20085534.png)

![NavBar5](/md_images/image%20copy.png)

##### Authentication

For unregistered user, the sign up link can be used to create a user account. I have used the standard dj-rest/auth/registration signup process for this.

![SignUp](/md_images/Screenshot%202024-03-25%20144431.png)

If a user has an account already, they can click the sign in link on the navbar to be brought to the sign in page.

![SignIn](/md_images/Screenshot%202024-03-25%20144418.png)

On the other hand, already signed in users are presented with the sign out link to sign out.

##### Posts page (Homepage)

There are 4 components located throughout the homepage:
* Popular Profile component
* Posts list component
* Search bar component
* Copyright component

##### Popular profiles component

The popular profiles component is made to appear across the right of all pages on large screens and at the top of all pages on smaller screens. This component uses a filter to order all site users by followers count from highest to lowest. The top ten profiles are displayed on larger screens, and the top 4 on smaller screens.

![PPComp](/md_images/Screenshot%202024-03-25%20150541.png)

If the user's' logged in, they can see the profile avatar and the username, and if the user is logged in, they will also see a button allowing them to follow or unfollow the profile. Each profile avatar can also be clicked on to view the full profile page of that user.

![PPCompMobile](/md_images/Screenshot%202024-03-25%20151122.png)

##### Post

The post list displays posts created by users that are requested from the backend API and ordered by the most recent using the "created_at" field in the API. They are ordered in a descending order.

![PostList](/md_images/Screenshot%202024-03-25%20151707.png)

Each posts displays the user who created it, the written content, the created at information, image and comment, like tags. The posts component also has an in built pop-out function for displaying movie information, which will display on mouce hover. By clicking on the comment tag or image the user is forwarded to the post's individual page.

##### Search bar

If the user is looking for a specific item within the database, it'll be returned according to the input from the user. The user can use the search bar to search for comments, profiles, movies, post names or content.

![PostList](/md_images/Screenshot%202024-03-25%20085456.png)

##### Movies page

The movies page is simply a tool for users to search a movie, and have it return the movie data. As explained in the backend README file, the method for fetching the Open Movie DataBase data in this page is all done via the frontend, as the data is readonly and does not need to be stored. The page consists of a very simple search bar and search button for users to input a movie they're trying to look up. The search query will then make a request to the OMDB API and return the movie with the closest title to the search query, or it'll return an error saying the movie was not found. Upon successfully fetching a movie, a secondary component is displayed holding all the movie data for the user to read through.

![MoviesPage1](/md_images/Screenshot%202024-03-25%20153111.png)

![MoviesPage2](/md_images/Screenshot%202024-03-25%20153155.png)

##### Feed page

The feed page contains a similar layout to the homepage. The main difference is that the posts list has been filtered to only return posts created by users the logged in user is following.

![FeedPage](/md_images/Screenshot%202024-03-25%20153320.png)
(There are currently no posts displayed as during the screenshot being taken the website did not contain posts from any users apart from the logged in user.)

##### Liked page

The liked page contains a similar layout to the homepage and feed page. The main difference is that the posts list has been filtered to only return liked posts created by the logged in user.

![LikedPage](/md_images/Screenshot%202024-03-25%20153329.png)
(There are currently no posts displayed as during the screenshot being taken the website did not contain posts from any users apart from the logged in user.)

##### Create a post

If a user is logged in, they're given the option to add a post in the navbar. The icon is to the left side, next to the logo, and upon clicking will redirect the user to the create post form. The form contains the media upload link to upload images. Upon leaving this blank, a default image will be uploaded. The title and content tags are both user input form fields for the user to fill in. The content field can be left blank whereas the title is required. The post page also contains a movie link feature to link a movie the user wants to link to the post for others to see. Just as before this is done by fetching the data from the OMDB API, however in this case the data is stored to the post data upon form submission. The movie selection form allows the user to put in a search query and submit upon completion. The user will receive a confirmation alert to inform them of the movie they've picked. This can be changed upon repeating this process. Upon changing the image, the form will confirm the image by showing a preview in the media upload section.

![CAPForm](/md_images/Screenshot%202024-03-25%20154225.png)

![CAPForm2](/md_images/Screenshot%202024-03-25%20154317.png)

##### Post page

The post page is designed to display posts in more detail as opposed to the post list view, made for a bunch of posts to catch the user's attention. The post page is equipped with the same post data as listed in the post list. Aditionally it contains a post settings dropdown icon for user's post data management (if the logged in user owns the post), and the likes and comments count below. Below the post is the comment creation form (if the user is logged in) and the previous post comments. The post comments are listed in order of most recent, just as the post list is. If there are no comments yet in the post comment section, a message saying so will be displayed. As mentioned before, the side bar components, the popular profiles and copyright components will stay displayed.

![PostPage](/md_images/Screenshot%202024-03-25%20154945.png)

##### Comments

Each post page contains a button prompting users to leave comments for that post. The comment form has one field, the comment's content. The field is required for leaving a comment, so the user will receive an error upon leaving it blank. When a comment's published the count visibly increases. For comment owners, if they're specifically in that comment section they'll see a dropdown icon for editing their currently published comment, just as post owners will see one on each of their post's page. This dropdown will also give the option to delete the comment, similarly to the post's dropdown menu.

![Comment](/md_images/Screenshot%202024-03-25%20155725.png)

##### Dropdown menu (Edit post form)

As mentioned before the dropdown menu gives user two options:
* Edit data
* Delete data

Upon selecting to delete data, their data will be erased from the database, cascading any related and attached information and the user will be redirected to the homepage if the deleted data is a post. Upon editing data, as mentioned above for comments, the user will have a pre-populated create form pop up so they can edit their comment, however for posts the user is redirected to the post edit form: A pre populated form with the exact same layout as the create a post form that can be updated and resubmitted, changing post data.

![Dropdown](/md_images/Screenshot%202024-03-25%20155046.png)

![EditPost](/md_images/Screenshot%202024-03-25%20155120.png)

##### Post likes

Likes as briefly shown in the post page have a count updated depending on how many users have liked that individual post. If the logged in user enters their own post page, they won't be able to like it. When liking a post, the site will confirm by turning the icon (formerly grey outline) to a solid red heart icon.

![Like](/md_images/image%20copy%202.png)

##### Profile page

Throughout the site, you'll see profile avatars located on components e.g. navbar, popular profiles, posts. Each of these can be clicked on to visit the avatar owner's profile. Here you can see their profile data: Posts, following and follower counts, and their bio. When a user signs up for the first time, a profile is automatically created with their username in turn creating their default profile page. The information that automatically is updated is the follower/following count and posts count. Profile owners that enter their own profile page are met with an extra dropdown menu to manage their profile data, just like with posts and comments. This dropdown contains options to edit their username, password or content (bio and picture). Upon clicking one of these options the user is redirected to the correspondant form which upon submission will update their data.