import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/postActions';

function Home() {
    return (
        <div className="home">
            <h1>This is the homepage</h1>
        </div>
    )
}

export default Home
