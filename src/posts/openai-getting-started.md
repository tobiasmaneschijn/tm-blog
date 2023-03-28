---
title: "Feastly.ai: Developing a GPT powered app using Next.js"
subtitle: "A look into how I used OpenAI's API to create a Next.js app that generates recipes."
date: "2023-03-27"
author: "Tobias Maneschijn"
image: "/images/hero-image.webp"
---

<img src="/images/hero-image.webp" alt="Hello World!" width="100%" />
## Introduction
Embarking on an exciting quest to build cutting-edge apps for my portfolio, I couldn't help but be drawn to the world of artificial intelligence and large language models that have taken 2023 by storm. After securing access to the powerful OpenAI API, I knew it was time to put it to the test.

The idea that emerged was Feastly.ai - a nifty recipe generator app that harnesses the power of OpenAI's API to conjure up mouth-watering recipes from the ingredients you have lying around at home. Sure, there might be similar apps out there, but creating my own version offered the perfect opportunity to dive deep into the OpenAI API and hone my skills with the trendy Next.js framework.

The star of the show, OpenAI's GPT model, turned out to be the ideal partner in crime for this project. It effortlessly enabled me to tailor prompts based on user-selected ingredients, transforming them into drool-worthy recipes. So, buckle up and join me as I walk you through the thrilling development process, the challenges encountered, and the creative solutions that brought Feastly.ai to life.

## Background

### The Magic of Next.js: A Game-Changer for Web App Development

Enter Next.js, the rising star of the web app development world. This versatile and developer-friendly React framework has been turning heads and winning hearts, and it's not hard to see why. With features like server-side rendering, static site generation, and automatic code splitting, Next.js empowers developers to build high-performance, SEO-friendly web apps with ease. As if that wasn't enough, it also boasts a vast ecosystem of plugins and tools to simplify and streamline the development process.

### OpenAI's API: Unleashing the Power of Language Models

Now, let's talk about the real powerhouse behind Feastly.ai - the OpenAI API. This marvel of AI technology grants developers access to OpenAI's cutting-edge language models like the renowned GPT series. By integrating the API into web applications, we can perform a wide array of tasks, from writing human-like text and answering questions to creating summaries and translating languages. It's the perfect tool to fuel the recipe generation magic in Feastly.ai.

### Craving a Solution: Why the World Needs Recipe Generators

Picture this: it's been a long day, and you're staring into your fridge, wondering what culinary masterpiece you can whip up with the random assortment of ingredients you have on hand. This is where Feastly.ai swoops in to save the day. In a world where food waste is a pressing issue and time is always scarce, there's a growing need for personalized solutions that help us make the most of the ingredients we already have. A recipe generator like Feastly.ai not only promotes creativity in the kitchen but also encourages more sustainable cooking habits. It's a win-win for foodies and the planet alike.

## The Development Adventure: Bringing Feastly.ai to Life

### Setting the Stage: The Next.js Development Environment

Crafting the perfect environment for Feastly.ai was a walk in the park, thanks to Next.js' top-notch documentation. Following the official Next.js tutorial, I set up a new project and installed the essential dependencies. My go-to packages included:

- axios: for smooth API calls
- openai: the key to integrating OpenAI's API
- tailwindcss: styling the app with flair

With the foundations laid, I was ready to build Feastly.ai from the ground up.

### OpenAI API Integration: The Heartbeat of Feastly.ai

First things first, I created a new OpenAI account and generated a shiny API key. Safely tucked away in a .env file, the key was accessible via the **process.env** object.

Next, I carved out an API route in the api directory of my Next app to manage the API calls. This route facilitated communication with the OpenAI API, resulting in a JSON object packed with the freshly generated recipe.

Connecting to the OpenAI API was a breeze, thanks to a single function call from the openai package:

```typescript
return await openai.createCompletion({
  model: "text-davinci-003",
  prompt: prompt,
  temperature: 0.4,
  max_tokens: 4096 / 2,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: ["{}"],
});
```

My API route took on the following form (I've trimmed the error handling code for simplicity's sake):

```typescript
export async function POST(request: Request) {
  const req = (await request.json()) as RequestType;
  const recipe = await imagineRecipe(req.ingredients);
  return new Response(JSON.stringify(recipe));
}
```

With the OpenAI API snugly integrated, Feastly.ai was ready to dazzle users with its recipe-generating prowess.

### A Feast for the Eyes: Crafting the User Interface

With the GPT integration firmly in place, it was time to whip up a delightful user interface. Naturally, I turned to Tailwind CSS, a trusty ally I've come to know and love. While I won't delve too deeply into this part of the process, allow me to give you a glimpse of the ingredient prompt I cooked up for Feastly.ai. Though there's still plenty of work ahead to polish the design and add more features, I'm rather pleased with the outcome thus far.

<img src="/images/openai-1.png" alt="input" width="100%" />

As of this blog post's publication date, the recipe page sports a minimalistic design with ample room for improvement. Rest assured, I'll be refining it in the coming weeks, and you might just spot an update on this post showcasing the fresh new look.

<img src="/images/openai-2.png" alt="input" width="100%" />

## Navigating the Roadblocks: Challenges and Solutions

### Mastering the Art of Recipe Generation

While GPT-3.5 conjures up generally impressive recipes, it can falter when faced with obscure or whimsical ingredients. Some resulting suggestions might be inedible, dangerous, or downright absurd. As a responsible developer, I cannot stress enough the importance of ensuring the safety and viability of each recipe. Currently, I'm exploring ways to validate user-input ingredients, guaranteeing both their safety and the palatability of the resulting recipes.

### Tackling Incomplete or Incorrect Ingredient Inputs

Surprisingly, GPT excels at handling incomplete or incorrect inputs, even flexing its multilingual muscles to translate non-English terms. This resilience lends itself well to the recipe generation process, making the app more adaptable and user-friendly.

### Scaling for Success: Accommodating a Growing User Base

To ensure Feastly.ai can gracefully handle an influx of users and requests, I've enlisted the help of Vercel as a hosting provider. Its scalable architecture ensures the app can grow without breaking a sweat. Furthermore, I've integrated Cloudflare to shield the app from DDoS attacks and other malicious activities, guaranteeing a secure and reliable experience for users and my wallet.

## The Road Ahead: Enhancing Feastly.ai

As exciting as the current incarnation of Feastly.ai may be, there's always room for growth and improvement. In the spirit of continuous development, here are some areas I plan to focus on and future features to implement:

1.  **Autocomplete and Suggestions for Ingredients:** To streamline the user experience, I'll be adding an autocomplete feature that offers ingredient suggestions based on user input. This enhancement will make it easier for users to input ingredients and explore new recipe possibilities.

2. **Filtering and Sorting Options for Recipes:** To provide users with greater control over their recipe search results, I'll be introducing filtering and sorting options. This will allow users to fine-tune their results based on criteria like cooking time, cuisine type, and more.

3.  **User Accounts and Saved Recipes:** Personalization is key to an engaging app experience. I plan to introduce user accounts, enabling users to save their favorite recipes for easy access and keep track of their culinary adventures.

4.  **Expanded Recipe Generation Options:** To cater to a broader range of tastes and preferences, I'll be incorporating additional options for recipe generation, such as specifying the desired cuisine or adhering to specific dietary requirements.

5.  **Caching Generated Recipes to Reduce API Calls:** In a bid to optimize performance and minimize API calls, I'll implement caching for generated recipes. This will allow Feastly.ai to serve up previously generated recipes more efficiently while keeping API usage in check.

By addressing these areas and implementing new features, Feastly.ai will continue to evolve, providing users with an ever-improving recipe generation experience.

## Wrapping It Up: Feastly.ai's Culinary Journey

In conclusion, Feastly.ai was developed with the intention of utilizing OpenAI's API and Next.js to create a handy recipe generator. By combining the capabilities of these technologies, Feastly.ai aims to make it easier for users to find suitable recipes based on the ingredients they have available.

Throughout the development process, integrating OpenAI's API played a significant role in the app's functionality, transforming user-provided ingredients into appealing recipes. This seamless integration has allowed Feastly.ai to offer a convenient and fun way for users to approach cooking, minimize food waste, and spark creativity in the kitchen.

Why not give Feastly.ai a try and see what it can do for you? Explore its features and let it help you create delicious meals from the ingredients you already have. You never know—you might just stumble upon a new favorite dish. Happy cooking!

[Try out Feastly.ai!](https://feastly-ai.com/)
