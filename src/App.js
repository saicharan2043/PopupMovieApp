import PrimeVideo from './components/PrimeVideo'

import './App.css'

const moviesList = [
  {
    id: '61227099e13958e58d31e74c',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
    categoryId: 'ACTION',
  },
  {
    id: '612271842cad3c2dfcb82481',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
    categoryId: 'COMEDY',
  },
  {
    id: '6122709941329807a4e17b39',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    categoryId: 'ACTION',
  },
  {
    id: '61227184c889cff17f05900b',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/the-intern-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
    categoryId: 'COMEDY',
  },
  {
    id: '612271846f711783024f2bfa',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
    categoryId: 'COMEDY',
  },
  {
    id: '612271141bf93653809cdccb',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
    categoryId: 'ACTION',
  },
  {
    id: '61227184c7ac22c8258938c5',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/yes-man-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=dDh1l3qVNoY',
    categoryId: 'COMEDY',
  },
  {
    id: '61227184ae30e00e3ce542c8',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s',
    categoryId: 'COMEDY',
  },
  {
    id: '6122718418ae122e517c3ada',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=fo9EhcwQXcM',
    categoryId: 'COMEDY',
  },
  {
    id: '61227099ce46ed88e7f00c19',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=odM92ap8_c0',
    categoryId: 'ACTION',
  },
  {
    id: '612271848b2be0f2f769d24a',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=lMAj8tyThw0',
    categoryId: 'COMEDY',
  },
  {
    id: '61227184882da0a972890152',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=3-7jehmURuM',
    categoryId: 'COMEDY',
  },
  {
    id: '6122709931ad5e69f5125806',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/gamer-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=P2g94xQmtHw',
    categoryId: 'ACTION',
  },
  {
    id: '61227099d3c5b18801b2edb5',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=xaPLUII_M6g',
    categoryId: 'ACTION',
  },
  {
    id: '61227114b7b5232771c68883',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/priest-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IYfdQOGqL1o',
    categoryId: 'ACTION',
  },
  {
    id: '61227099ea52349bd1e16ee4',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=EDGYVFZxsXQ',
    categoryId: 'ACTION',
  },
]
// const planetsList = [
//   {
//     id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
//     name: 'Mercury',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/mercury-img.png',
//     description:
//       'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun planets.',
//   },
//   {
//     id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
//     name: 'Venus',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/venus-img.png',
//     description:
//       'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
//   },
//   {
//     id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
//     name: 'Earth',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/earth-img.png',
//     description:
//       'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth’s surface is land consisting of continents and islands.',
//   },
//   {
//     id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
//     name: 'Mars',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/mars-img.png',
//     description:
//       'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.',
//   },
//   {
//     id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
//     name: 'Jupiter',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/jupiter-img.png',
//     description:
//       'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
//   },
//   {
//     id: 'c2277d9e-f72e-11eb-9a03-0242ac130003',
//     name: 'Saturn',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/saturn-img.png',
//     description:
//       'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn’s.',
//   },
//   {
//     id: 'c2277e52-f72e-11eb-9a03-0242ac130003',
//     name: 'Uranus',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/uranus-img.png',
//     description:
//       'Uranus is the seventh planet from the Sun and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
//   },
//   {
//     id: 'c2277f06-f72e-11eb-9a03-0242ac130003',
//     name: 'Neptune',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/neptune-img.png',
//     description:
//       'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
//   },
// ]
const App = () => <PrimeVideo moviesList={moviesList} />

export default App
