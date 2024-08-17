# Assignment 1 - ReactJS app.

Name: [Mohannad Khrata]

## Overview.

this is a react app that i have developed during this semester on our practical and on my own time. it is a movie app that has details of movies, movie reviews and actors

### Features.

+ Feature 1 added an upcoming page 
+ Feature 2 added to watch page 
+ Feature 3 added top rated
+ Feature 4 added in theaters
+ Feature 5 added actors page

## Setup requirements.

npm install

## API endpoints.

+ static getTopRatedMovies
+ static getNowPlayingMovies
+ static getActors
+ paramaterised getActor
+ paramaterised getActorImages

## Routing.

<Route path="/movies/favorites" element={<FavoriteMoviesPage />}/>
<Route path="/reviews/:id" element={<MovieReviewPage />}/>
<Route path="/movies/:id" element={<MoviePage />} />
<Route path="/" element={<HomePage />} />
<Route path="*" element={<Navigate to="/" />} />
<Route path="/reviews/form" element={<AddMovieReviewPage />}/>
<Route path="/movies/:watchlist" element={<ToWatchPage />}/>
<Route path="/movies/upcoming" element={<UpcomingMoviesPage />}/>
<Route path="/movies/toprated" element={<TopRatedMoviesPage />}/>
<Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />}/>
<Route path="/people" element={<ActorsPage />}/>
<Route path="/people/:id" element={<ActorPage />}/>




