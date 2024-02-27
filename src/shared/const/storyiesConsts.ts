//** Folloving mocks are used for Stories */

import { Article } from "entities/Article";
import {
  ArticleBlockType,
  ArticleType,
} from "entities/Article/model/types/article";

/* eslint-disable max-len */
export const LIST_ITEMS = {
  value: "Custom List",
  items: [
    { content: "first", value: "First" },
    { content: "second", value: "Second" },
    { content: "third", value: "Third" },
  ],
};
export const ARTICLE: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "What's new in JS for 2022?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: { id: "1", username: "admin" },
  type: [ArticleType.IT],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Blog title",
      paragraphs: [
        "The program, which is traditionally called 'Hello, world!', is very simple. It outputs somewhere the phrase 'Hello, world!', or another similar one, by means of a certain language.",
        "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
      ],
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "5",
      type: ArticleBlockType.TEXT,
      title: "Title for blog",
      paragraphs: [
        "The program, which is traditionally called 'Hello, world!', is very simple. She outputs the phrase 'Hello, world!' or another similar phrase by means of a certain language.",
        "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
      ],
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Figure 1 - screenshot of the site",
    },
    {
      id: "3",
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: "7",
      type: ArticleBlockType.TEXT,
      title: "Title for current Blog",
      paragraphs: [
        "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
      ],
    },
    {
      id: "8",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Figure 1 - screenshot of the site",
    },
    {
      id: "9",
      type: ArticleBlockType.TEXT,
      title: "Title for current blog",
      paragraphs: [
        "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
      ],
    },
  ],
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Javascript news",
    subtitle: "What's new in JS for 2022?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: { id: "1", username: "admin" },
    type: [ArticleType.IT],
    blocks: [
      {
        id: "1",
        type: ArticleBlockType.TEXT,
        title: "Blog title",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. It outputs somewhere the phrase 'Hello, world!', or another similar one, by means of a certain language.",
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "4",
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: "5",
        type: ArticleBlockType.TEXT,
        title: "Title for blog",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. She outputs the phrase 'Hello, world!' or another similar phrase by means of a certain language.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "2",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "3",
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
        id: "7",
        type: ArticleBlockType.TEXT,
        title: "Title for current Blog",
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "8",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "9",
        type: ArticleBlockType.TEXT,
        title: "Title for current blog",
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Python news",
    subtitle: "What's new in Python for 2022?",
    img: "https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAAAAA?rs=1&pid=ImgDetMain",
    views: 102,
    createdAt: "27.02.2022",
    user: { id: "1", username: "admin" },
    type: [ArticleType.IT],
    blocks: [
      {
        id: "1",
        type: ArticleBlockType.TEXT,
        title: "Blog title",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. It outputs somewhere the phrase 'Hello, world!', or another similar one, by means of a certain language.",
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "4",
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: "5",
        type: ArticleBlockType.TEXT,
        title: "Title for blog",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. She outputs the phrase 'Hello, world!' or another similar phrase by means of a certain language.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "2",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "3",
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
        id: "7",
        type: ArticleBlockType.TEXT,
        title: "Title for current Blog",
        paragraphs: [
          "Python is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "8",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "9",
        type: ArticleBlockType.TEXT,
        title: "Title for current blog",
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Kotlin news",
    subtitle: "What's new in Kotlin for 2022?",
    img: "https://2.bp.blogspot.com/-4WB1cZOxNU0/WsveVXVJ7WI/AAAAAAAAKso/RyVoLWoPbJ0-FIpXGlnCGCn09m5bAPJcQCLcBGAs/s320/480px-Kotlin-logo.svg.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: { id: "1", username: "admin" },
    type: [ArticleType.IT],
    blocks: [
      {
        id: "1",
        type: ArticleBlockType.TEXT,
        title: "Blog title",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. It outputs somewhere the phrase 'Hello, world!', or another similar one, by means of a certain language.",
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "4",
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: "5",
        type: ArticleBlockType.TEXT,
        title: "Title for blog",
        paragraphs: [
          "The program, which is traditionally called 'Hello, world!', is very simple. She outputs the phrase 'Hello, world!' or another similar phrase by means of a certain language.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "2",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "3",
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
        id: "7",
        type: ArticleBlockType.TEXT,
        title: "Title for current Blog",
        paragraphs: [
          "Kotlin is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
        ],
      },
      {
        id: "8",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Figure 1 - screenshot of the site",
      },
      {
        id: "9",
        type: ArticleBlockType.TEXT,
        title: "Title for current blog",
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        ],
      },
    ],
  },
];
