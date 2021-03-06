const api_key = process.env.REACT_APP_MOVIEAPIKEY 

export default {
    discover_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    discover_movie : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    action_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
    adventure_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`,
    comedy_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    animation_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
    crime_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate`,
    fantasy_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`,
    romance_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    thriller_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`,
    horror_movies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27_&with_watch_monetization_types=flatrate`,
    action_adventure_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    comedy_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    animation_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    crime_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    kids_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    mystery_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    drame_tv : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    trending_movies : `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`,
    trending_tv :  `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`,
    popular_movies : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    top_rated_movies : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    upcoming_movies : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    popular_tv : `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`,
    top_rated_tv : `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`
}