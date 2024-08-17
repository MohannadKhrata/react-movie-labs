import AddMovieReviewPage from "./pages/addMovieReviewPage";

import SiteHeader from "./components/siteHeader";
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import ToWatchPage from "./pages/toWatchPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage"
import ActorsPage from "./pages/ActorsPage";
import ActorPage from "./pages/actorDetailsPage"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                <MoviesContextProvider>
                    <Routes>
                        ... routes here
                        <Route path="/movies/favorites" element={<FavoriteMoviesPage />}/>
                        {/* <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} /> */}
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
                    </Routes>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
