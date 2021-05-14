import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>This is the homepage</h1>
            <div className="buttonOptions">
            <Link to="/TinyHomeChecklist">
                <button>
                    Build
                </button>
                </Link>
                <Link>
                <button>
                    Inspire
                </button>
                </Link>
                <Link to="/CommunityForum">
                <button>
                    Connect
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Home

