# Instructions 💡

Clone the repository and install dependencies

```bash
https://github.com/Puthpiseth/frontend-technical-test
cd frontend-technical-test

# Using npm or yarn
yarn install or npm install

```

# How to start the project 🚀

```bash

### Server side
yarn start-server

or

npm run start-server

### Client side
yarn dev

or

npm run dev
```

Client side is running on http://localhost:3000
Server side is running on https://localhost:3005

# Live App 📽

![caption](src/assets/Live-App.gif)

#### Server Error 500 page

![caption](src/assets/500.gif)

#### 404 Page

![caption](src/assets/404.gif)

# State Management 🕸

I chose [Modern Redux with Redux Toolkit](https://redux.js.org/usage/usage-with-typescript) for the app's state management. I normally used [MobX]. To be honest, I have never used Redux before. I did it for this particular exercise. In terms of configuration and usage, I have found out that Modern Redux with Toolkit is quite simpler than MobX.

# How to test the app ? 🛠

You probably wonder which test, unit or integration or End-to-End tests, for my app. Well, based on my research, I decided to use [Cypress](https://docs.cypress.io/guides/overview/why-cypress) which is one of the best test automation tools out there. It is fast, reliable and easy to set up. I am amazed with real-time test reloading in browser so that I can see how users interact with the application.

- Live Automation Test with Cypress

![caption](src/assets/Live-Test.gif)

# Conclusion

This test is quite challenging for me. I spent a fews days to learn [Nextjs](https://nextjs.org/docs), [Redux](https://redux.js.org/usage/usage-with-typescript) and [Cypress](https://docs.cypress.io/guides/overview/why-cypress) to be able to do this test. In total, I spent more than twenty hours for this test. As a result, I have made a lot of progress and I am ready 100% to join Leboncoin team.

# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
