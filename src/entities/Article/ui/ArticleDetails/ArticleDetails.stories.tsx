import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {
  Article,
  ArticleType,
  ArticleBlockType,
} from "entities/Article/model/types/Article";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleDetails } from "./ArticleDetails";

const meta = {
  title: "shared/ArticleDetails",
  component: ArticleDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

const article: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "What was new at JS in 2022?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticleType.IT],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Title for current block",
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
      title: "Title for current block",
      paragraphs: [
        "The program, which is traditionally called 'Hello, world!', is very simple. It outputs somewhere the phrase 'Hello, world!', or another similar one, by means of a certain language.",
        "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the server platform Node.js . If you haven't written a single line of code in JS so far and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with an extension.js that connect to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the website w3school.com . In particular, let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or in Notepad++), which we will call hello.html , and add the following code to it:",
      ],
    },
  ],
};

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            data: article,
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            data: article,
          },
        }}
      >
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const Error: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            error: "Error",
          },
        }}
      >
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
