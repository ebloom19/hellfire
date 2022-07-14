<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ebloom19/hellfire">
    <img src="https://image-cdn.neatoshop.com/styleimg/134656/none/white/default/524447-20;1654086793y.jpg" alt="Hellfire Club" width="140" height="140"/>
  </a>

<h3 align="center">Hellfire D&D Spell-Caster Website</h3>

  <p align="center">
    This project is a simple DnD5 spell search engine, that provides all the necessary info about the +300 spells in the Dungeons & Dragons game. This webpage calls upon the DnD5 API to obtain a list of spells and the finer details associated with them. The design of this webpage is heavily inspired by the widely popular Netflix series Stranger Things, in the series the Hellfire Club is the name of the local high school Dungeons and Dragons club. This website uses React Redux for state management to implement a favorite spell list. In the redux store there is a simple function that saves and retrieves the state to local storage, to enable the user to refresh or close the site and come back to the same list. 
  </p>
  
      <br />
    <a href="https://github.com/ebloom19/hellfire"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://hellfire-dnd.herokuapp.com/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/ebloom19/hellfire/issues">Report Bug</a>
    ·
    <a href="https://github.com/ebloom19/hellfire/issues">Request Feature</a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Hellfire_DnD Screen Shot][product-screenshot]](https://hellfire-dnd.herokuapp.com/)
&ensp;
[![Hellfire_DnD Screen Shot Mobile][product-screenshot-mobile]](https://hellfire-dnd.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Redux][Redux]][Redux-url]
* [![React-Router][React-Router]][React-Router-url]
* [![SASS][SASS]][SASS-url]
* [![Yarn][Yarn]][Yarn-url]
* [![Babel][Babel]][Babel-url]
* [![Heroku][Heroku]][Heroku-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites

* Install [node and npm](https://nodejs.org/en/download/)
  ```sh
  npm install npm@latest -g
  ```
* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ebloom19/hellfire.git
   ```
2. Install yarn packages
   ```sh
   yarn
   ```
3. Run yarn start - will serve to http://localhost:3000
   ```sh
   yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This website can be used by avid DnD fans who are looking at a quick simple and easy solution to searching for DnD5 spells. The ability to save your favorites to a list and come back to the site on the same site to view your favorites.

### Mobile App 
(Mobile browser to save site as an app on the home screen)

#### iPad or iPhone
1. Launch “Safari” app.  This does not work from the “Chrome” app.
2. Open the [website](https://hellfire-dnd.herokuapp.com)
3. Tap the icon featuring a right-pointing arrow coming out of a box along the top of the Safari window to open a drop-down menu.
4. Tap “Add to Home Screen.” The Add to Home dialog box will appear, with the icon that will be used for this website on the left side of the dialog box.
5. Enter the name for the shortcut using the on-screen keyboard and tap “Add.” Safari will close automatically and you will be taken to where the icon is located on your iPad’s desktop.

#### Android
1. Launch “Chrome” app.
2. Open the [website](https://hellfire-dnd.herokuapp.com)
3. Tap the menu icon (3 dots in upper right-hand corner) and tap Add to homescreen.
4. You’ll be able to enter a name for the shortcut and then Chrome will add it to your home screen.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Responsive Design
- [ ] Tooltip More info
- [ ] Favorite List - Redux
    - [ ] Redux state -> localStorage

See the [open issues](https://github.com/ebloom19/hellfire/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ethan Bloom - ebloom19@gmail.com

Project Link: [https://github.com/ebloom19/hellfire](https://github.com/ebloom19/hellfire)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ebloom19/hellfire.svg?style=for-the-badge
[contributors-url]: https://github.com/ebloom19/hellfire/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ebloom19/hellfire.svg?style=for-the-badge
[forks-url]: https://github.com/ebloom19/hellfire/network/members
[stars-shield]: https://img.shields.io/github/stars/ebloom19/hellfire.svg?style=for-the-badge
[stars-url]: https://github.com/ebloom19/hellfire/stargazers
[issues-shield]: https://img.shields.io/github/issues/ebloom19/hellfire.svg?style=for-the-badge
[issues-url]: https://github.com/ebloom19/hellfire/issues
[license-shield]: https://img.shields.io/github/license/ebloom19/hellfire.svg?style=for-the-badge
[license-url]: https://github.com/ebloom19/hellfire/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ethanbloom
[product-screenshot]: https://live.staticflickr.com/65535/52207725123_801017b0eb_k.jpg
[product-screenshot-mobile]: https://live.staticflickr.com/65535/52207703696_79f2238886.jpg
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Yarn]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[Yarn-url]: https://yarnpkg.com/
[Babel]: https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black
[Babel-url]: https://babeljs.io/
[React-Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/
[Heroku]: https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://www.heroku.com
