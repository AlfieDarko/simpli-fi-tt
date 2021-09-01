# Technical Test Project URL:

https://simpli-fi-tt.vercel.app/ (DEMO)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run storybook:

```bash
npm run storybook
# or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

To run tests:

```bash
npm run test
# or
yarn test
```

# Tech Test For Simpli.Fi

In this techtest, I was given the task to create a simple button with 3 states (Primary, Secondary and Danger).
The buttons were to be different colours and to change appearance on user interaction.

# Tech Used

- Next.JS ( Quick simple setup and quick deployment on vercel)
- Styled Components ( Makes working with component theming really easy)
- Storybook ( Makes it easy to show non frontend devs components and allows for a playground experience for user testing)
- React Testing Library
- Vercel

## Small Changes

I renamed the property 'type' as required in the tech test to 'status' because it's not a good idea to create a component has properties that overwrite the original HTML property, (Button has one called type).

I think the term 'variant' would have been a better option too.

## What I liked?

I enjoyed doing the button styling. Playing around with the different colour schemes was fun. The colours abit pastelised but stay true to the usual UX sensibilities of button colours.

## What I didnt like

- The focus CSS style. I think I could have made it more overt for a better a11y user experience. It's not bad though.

## What I would have implemented with more time

- Deployed the Storybook environment on vercel
- Snapshot testing in the CI
- Added Husky for pre commit linting.
- Maybe some storybook addons but it would probably been abit overkill for this task.
- Maybe a separate styling for when the button is disabled. I kept it simple by having it where clicking a disabled button doesnt go all the way down and added a 'not-allowed' cursor.
  I think I could have made it more apparent stylewise. Perhaps gray out the button? I also would have probably used framer motion to add a little button shake effect if the user tried to press a disabled button.
