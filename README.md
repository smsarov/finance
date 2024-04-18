I wanted to make this project like an all-in-one, but I decided not to continue developing it since any further major advancements would require too much time spent on backend features while my main goal was to do frontend.

Technologies used:
  - NextJS (app router, server actions, server components)
  - React
  - Typescript
  - Tailwind CSS

  (There is no server folder in this repo, probably will push it sometime later)
  - express
  - Socket.io
  - Supabase DB (uses PostgreSQL under the hood)

The interface is fully adapted for mobile devises, supports dark and light themes. 

The idea of the project was to make a stock market simulator. I wanted to implement binary options as well as traditional buy-cheap-sell-expensive intruments with real time data changing displayed in Chart.
I managed to create all main features of frontend although I know there are some places which can be written in a better way.
While making this project, I found out that it lacks truly intresting problems to be solved on frontend and there are a lot of them on backend.

Some things seemed a bit weird to me. I feel like fetching data inside setInterval in a client component is kinda against the nature of NextJS. I planned to host it all on Vercel, but it turned out that I can't do it if I impliment my own custom server which I needed for sockets. Nevertheless, there is a conclusive integration with database performed by server actions only.


P.S. HOCs folder is not inside /src by an accident, i know this is bad :)

<img width="1426" alt="image" src="https://github.com/smsarov/finance/assets/47943520/f8281638-b276-4335-89b6-e23a8650b233">

<img width="1432" alt="image" src="https://github.com/smsarov/finance/assets/47943520/40e8e5e7-c42e-4dbe-8f14-f0b4006a6742">
