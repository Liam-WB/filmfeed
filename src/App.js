import React, { Suspense, lazy } from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import NotFound from "./components/NotFound";
import Alert from "./components/Alert"

// LAZY LOAD COMPONENTS
const ContactUsForm = lazy(() => import("./pages/contactus/ContactUsForm"));
const SignUpForm = lazy(() => import("./pages/auth/SignUpForm"));
const SignInForm = lazy(() => import("./pages/auth/SignInForm"));
const PostCreateForm = lazy(() => import("./pages/posts/PostCreateForm"));
const PostPage = lazy(() => import("./pages/posts/PostPage"));
const PostsPage = lazy(() => import("./pages/posts/PostsPage"));
const PostEditForm = lazy(() => import("./pages/posts/PostEditForm"));
const ProfilePage = lazy(() => import("./pages/profiles/ProfilePage"));
const UsernameForm = lazy(() => import("./pages/profiles/UsernameForm"));
const UserPasswordForm = lazy(() => import("./pages/profiles/UserPasswordForm"));
const ProfileEditForm = lazy(() => import("./pages/profiles/ProfileEditForm"));
const MoviePage = lazy(() => import("./pages/movies/MoviePage"));
const MoviesPage = lazy(() => import("./pages/movies/MoviesPage"));

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Alert />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route 
              exact
              path="/"
              render={() => (
                <PostsPage message="No results found. Adjust the search keyword." />
              )} 
            />
            <Route 
              exact
              path="/feed"
              render={() => (
                <PostsPage 
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )} 
            />
            <Route 
              exact
              path="/liked"
              render={() => (
                <PostsPage 
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              )} 
            />
            <Route exact path="/signin" component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/posts/create" component={PostCreateForm} />
            <Route exact path="/posts/:id" component={PostPage} />
            <Route exact path="/posts/:id/edit" component={PostEditForm} />
            <Route exact path="/profiles/:id" component={ProfilePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/movies/:id" component={MoviePage} />
            <Route exact path="/contact" component={ContactUsForm} />
            <Route
              exact
              path="/profiles/:id/edit/username"
              component={UsernameForm}
            />
            <Route
              exact
              path="/profiles/:id/edit/password"
              component={UserPasswordForm}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              component={ProfileEditForm}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense> 
      </Container>
    </div>
  );
}

export default App;