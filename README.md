# JC Blog App
#### By _**Josh Hortt**_
version: 23/10/2022

## Jc Blog App | [Live Link](https://jahc.vercel.app/)

## Description
_This application is a simple Blogging Website_<br/>
_It was built for a myself but especially developed for Writers in general_<br/>
_With featured and recent posts, categories. full markdown articles,_<br/>
_author information, comments, and much more, this fully responsive_<br/>
_#HeadlessCMS. And what's best of all is that any client or content_<br/>
_writer can manage the blog from a dedicated Content Management System_<br/>
_without touchin the code. Built with the newest technologies such_<br/>
_as React JS, #NextJS, Tailwind CSS, #GraphQL, and GraphCMS._ 

## Technologies Used
* JavaScript
* React.js
* Next.js
* Tailwind CSS-3
* [GraphQL CMS](https://app.graphcms.com)

For creating `Model's` & their corresponding `Data Field's` go to https://app.graphcms.com

## 4 Different DB Model's & their data fields
|No| DB Models  | Schema or Data fields into Model         |
|--|------------|------------------------------------------|
| 1| `category` | 1. name <br/> 2. slug                    |
| 2| `comment`  | 1. name <br/> 2. email <br/> 3. comment  |
| 3| `author`   | 1. name <br/> 2. bio <br/> 3. photo      |
| 4| `post`     | 1. title <br/> 2. slug <br/> 3. excerpt <br/> 4. content <br/> 5. featured post <br/> 6. featured image <br/> 7. author - `OneToMany` <br/> 8. category - `ManyToMany` <br/> 9. comment - `ManyToOne` |

<br/>

# Yarn or NPM | Needful Dependencies | 
|No| Package Installs               | Usage of                                                      |
|--|--------------------------------|---------------------------------------------------------------|
| 1| yarn add `sass`                | A pure JavaScript implementation of Sass                      |
| 2| yarn add `moment`              | Parse, validate, manipulate, & display dates                  |
| 3| yarn add `graphql`             | A Query Language & Runtime which can target any service       |
| 4| yarn add `graphql-request`     | Minimal GraphQL client supporting Node & browsers for scripts |
| 5| yarn add `tailwindcss`         | A utility-first CSS framework for building custom UI          |
| 6| yarn add `autoprefixer`        | Parse CSS & add vendor prefixes to CSS rules                  |
| 7| yarn add `postcss`             | Tool for transforming styles with JS plugins                  |
| 8| yarn add `html-react-parser`   | HTML to React parser.                                         |
| 9| yarn add `react-multi-carousel`| Production-ready, fully customizable React carousel component |

<br/>

# Learning context by building this project:
|No| Context learn by doing this project...                    | 
|--|-----------------------------------------------------------|
| 1| Dynamic Routing                                           | 
| 2| File Base Routing                                         | 
| 3| Folder Structure                                          | 
| 4| Layout Architecture                                       | 
| 5| Tailwind CSS + SASS                                       | 
| 7| Data fetching from `GraphQL`                              | 
| 8| `GraphQL Query` writing pattern                           | 
| 9| `GraphQL Query` with function ( `parameter` ) writing pattern  | 
|10| TailwindCSS class applying - based on `if/else` condition      | 
|11| get`Static`Paths() ==> `SSG` ( statically `pre-render all the paths` )         | 
|12| get`Static`Props() ==> `SSG` ( `pre-render` fetching data at `build time` )    | 
|13| 1 `<Component/>` call from 2 different place - `without` props + `with` props  | 


<br/>

## GraphQL Query Called by `<Component/>`'s...
|No| `<Component/>` List   | Location                     |  GraphQL Query Function   |
|--|-----------------------|------------------------------|---------------------------|
| 1| index.js              | getStatic`Props()`           | getPosts( )               | 
| 2| /post/`[slug]`.js     | getStatic Props({`params`})  | getPostDetails(`slug`)    |
| 3| /post/`[slug]`.js     | getStatic`Paths()`           | getPosts( )               | 
| 4| /category/`[slug]`.js | getStatic Props({`params`})  | getCategoryPost(`slug`)   | 
| 5| /category/`[slug]`.js | getStatic`Paths()`           | getCategories( )          | 
| 6| Header                | `useEffect`                  | getCategories( )          | 
| 7| Categories            | `useEffect`                  | getCategories( )          | 
| 8| AdjacentPosts         | `useEffect`                  | getAdjacentPosts(`createdAt`, `slug`) | 
| 9| FeaturedPosts         | `useEffect`                  | getFeaturedPosts( )       | 
|10| Comments              | `useEffect`                  | getComments(`slug`)       | 
|11| PostWidget            | `useEffect`                  | getSimilarPosts(`slug`, `categories`) + getRecentPosts( ) |

<br/>

## File Structure...
```
🟨
    jc-blog-app
    |
    ├── components
    |   ├── Author.jsx
    |   ├── AdjacentPostCard.jsx
    |   ├── Categories.jsx
    |   ├── Comments.jsx
    |   |── CommentsForm.jsx
    |   |── FeaturedPostCard.jsx
    |   ├── Footer.jsx
    |   ├── Header.jsx
    |   ├── Author.jsx
    |   |── index.js
    |   ├── Layout.jsx
    |   ├── Loader.jsx
    |   ├── PostCard.jsx
    |   ├── PostDetail.jsx
    |   └── PostWidget.jsx
    |
    ├── pages
    |   ├── post                 |🟨| BackEnd |🟨|
    |   |   └── [slug].js       
    |   |
    |   ├── category             |🟨| BackEnd |🟨|
    |   |   └── [slug].js
    |   |
    |   └── api                  |🟨| BackEnd |🟨|
    |       └── comments.js
    |       └── hello.ts   
    |
    ├── sections                 |🔶| Headless GraphCMS
    |   └── AdjacentPosts.jsx
    |   └── FeaturedPosts.jsx
    |   └── index.js
    |
    ├── services                 |🔶| Headless GraphCMS
    |   └── index.js
    |
    └── styles
        └── globals.css
🟨
```

## User Specifications
  - User can read any post and reply directly by writing a comment.
  - User can Save their name and email in this browser for the next time the user comments.

## Setup/Installation Requirements
_Clone repository in a shell using the command_:<br/>
`git clone https://github.com/Joshhortt/jc-blog-app`

## Known Bugs
_Due to time constraints the site may not scale perfectly on every device._

## Support and contact details
_If you have any questions or find any issues with this web-application, get in touch_.<br/>
_My email is: joshhortt@yahoo.com_

### License
_**MIT License** Copyright (c) 2022 Josh Hortt_

# Project Demo 
<img src='https://i.ibb.co/Ph86Gh7/jc-blog-Full.png' />