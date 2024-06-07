import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import { LoginlogoutContext } from '../context/LoginlogoutContext.jsx';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    const {login, setLogin}=useContext(LoginlogoutContext)
    // https://hoblist.com/api/movieList
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://geeksenergybackend-1.onrender.com/api/movieList', {
                    category: 'movies',
                    language: 'kannada',
                    genre: 'all',
                    sort: 'voting'
                });
                
                console.log(response.data)
                if (response.data.result) {
                    setMovies(response.data.result);
                    
                } else {
                    setError('No movies found');
                }
                console.log(movies)
            } catch (err) {
                setError('Failed to fetch movies');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        console.log(movies)
    }, []);


    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {login?(<ul>
                {movies.map((movie, index) => (
                    <li key={index} className="movie-item">
                        <div className="movie-details">
                            <h2>{movie.title}</h2>
                            <p><span>Genre</span>: {movie.genre}</p>
                            <p><span>Stars</span>: {movie.stars}</p>
                            <p><span>Director</span>: {movie.director}</p>
                            <p><span>Language</span>: {movie.language}</p>
                            <p><span>Views</span>: {movie.pageViews}</p>
                        </div>
                        <div className="poster-container">
                            <img src={movie.poster} alt={movie.title} className="movie-poster" />
                        </div>
                        <div className="actions">
                            <button className="vote-button">Votes : {movie.voting}</button>
                            <button className="trailer-button">Watch Trailer</button>
                        </div>
                    </li>
                ))}
            </ul>):<h3 className='h3tag'> You Have to Login First</h3>}
        </div>
    );
};

export default Dashboard;
