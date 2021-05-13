import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';

function Home() {
    useEffect(() => {
        dispatchEvent(getPosts())
    }, [currentId, dispatch])
}

export default Home
