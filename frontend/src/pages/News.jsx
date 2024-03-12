import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Speech from 'react-speech';
import { fetchVideoId, newsRoute } from '../utils/APIRoutes';
import './styles.css';

function News() {

    const [news1, setNews1] = useState([]);
    const [news2, setNews2] = useState([]);
    const [videoId, setVideoId] = useState('mgzExkJjC3s');
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(newsRoute);
            setNews1(response.data.data1);
            setNews2(response.data.data2);
        }
        fetchData();
    }, []);

    const getNewsVideo = async (currNews) => {
        const response = await axios.post(fetchVideoId, {
            news: currNews
        });
        setVideoId(response.data.id.data[0].videoId);
        try {
            setTranscript(transcript);
        } catch(error) {
            console.log(error);
        }
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            origin: window.location.origin,
        },
    };
    
    const onReady = (event) => {
        event.target.pauseVideo();
    }

    return (
        <div className="news-container">
            <div className="news-section">
                <h2>HEADLINES OF <strong>Times News</strong></h2>
                <div className="news-list">
                    {
                        news1.map((currNews, index) => (
                            <div key={index} className="news-item" onClick={() => getNewsVideo(currNews)}>
                                <p>{currNews}</p>
                                <Speech text={currNews} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="news-section">
            <h2>HEADLINES OF <strong>DD News</strong></h2>
                <div className="news-list">
                    {
                        news2.map((currNews, index) => (
                            <div key={index} className="news-item" onClick={() => getNewsVideo(currNews)}>
                                <p>{currNews}</p>
                                <Speech text={currNews} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {videoId &&
                <div className="video-section">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} />
                    <Speech text={transcript} />
                </div>
            }
        </div>
    );
} 
export default News;