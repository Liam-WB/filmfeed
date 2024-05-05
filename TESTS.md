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

