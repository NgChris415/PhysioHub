# Production README

Welcome to PhysioHub, your destination for introductory Home Exercise Programs personally designed by a licensed Physical Therapist (that's me!), with a passion for leveraging technical coding skills to make valuable resources easily accessible to those facing challenges in receiving care. [here](https://65110a46cb64f64b59b9fcff--stately-cocada-011da8.netlify.app/)!
[here](youtube.com)

# Table of Contents
1. [Technologies](#technologies)
2. [Features](#features)
3. [Technical Implementations](#technical-implementations)
4. [Future Features](#future-features)

# Technologies

### Frontend
+ ```React``` - a free and open-source front-end JavaScript library for building user intefaces based on components
+ ```TypeScript``` - main language used in Project
+ ```CSS``` - used for frontend design

# Features
The central focus of this website revolves around interactive buttons that reveal exercise options, along with a comprehensive list of exercises and convenient links to a YouTube playlist for detailed exercise demonstrations.

### Button Interaction

Users are able to create accounts using ```Bcrypt``` to hash their passwords. Passwords aren't saved directly onto the website. Instead, we keep the password digests and use built in Bcrypt methods to check if the credentials are correct. Some of the hard parts of this was definitely error handling as well as 

<img width="600px" height="400px" alt="buttonphoto1" src="https://github.com/NgChris415/PhysioHub/assets/132420552/991c6b85-72b8-4d9f-8502-90e516321933">
<img width="600px" height="400px" alt="buttonphoto2" src="https://github.com/NgChris415/PhysioHub/assets/132420552/ebac3e6d-5415-45bc-9152-c9ad0b5dc7db">


# Technical Implementations

#### Drop-down Menu/Button:
It was an enjoyable experience figuring out how to craft a button that can toggle the visibility of content using the onClick event without relying on external libraries. I acknowledge that learning libraries in the future might lead to smoother transitions and improved user experience, and I'm committed to expanding my skill set to incorporate these valuable tools into my skill repertoire.
```TS
export const ExerciseCard = (props: {
    bodyRegion: string;
    bodyRegionInfo: string;
    exerciseList: string[];
    youtubePlaylist: string;
}) => {
    const [displayInfo, setDisplayInfo] = useState(false);
    const displayInfoButton = () => {
        setDisplayInfo(!displayInfo);
    };

<div className="exercise-program">
                        <h2>Home Exercise Program</h2>
                        <ul className="exercise-list">
                            {props.exerciseList.map((data) => {
                                return <li key={data}>{data}</li>;
                            })}
                        </ul>
                        <a
                            href={props.youtubePlaylist}
                            className="youtube-button"
                        >
                            <FaYoutube color="white" size="30" />
                        </a>
                    </div>
```


#### Creating Templates Components:
Here's an instance of a component for which I've developed a template. This template facilitates the creation of multiple cards with consistency, enhances organization, and enables the concurrent creation, debugging, and improvement of multiple components.
```TS
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

export const ExerciseCard = (props: {
    bodyRegion: string;
    bodyRegionInfo: string;
    exerciseList: string[];
    youtubePlaylist: string;
}) => {
    const [displayInfo, setDisplayInfo] = useState(false);
    const displayInfoButton = () => {
        setDisplayInfo(!displayInfo);
    };

    return (
        <div>
            <div className="exercise-card">
                <h4 className="body-region">{props.bodyRegion}</h4>
                <p className="body-region-info">{props.bodyRegionInfo}</p>
                <button
                    onClick={displayInfoButton}
                    className="drop-down-button"
                >
                    Home Exercise Program
                </button>
                {displayInfo && (
                    <div className="exercise-program">
                        <h2>Home Exercise Program</h2>
                        <ul className="exercise-list">
                            {props.exerciseList.map((data) => {
                                return <li key={data}>{data}</li>;
                            })}
                        </ul>
                        <a
                            href={props.youtubePlaylist}
                            className="youtube-button"
                        >
                            <FaYoutube color="white" size="30" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

```


# Future Features

In the future I'd like to add:
+ Create Individual Pages for body-parts in order to have more detailed information
+ Implement a database in order to allow Login/Sign-up options
+ Build an interactive like/favorite list for users to create



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
