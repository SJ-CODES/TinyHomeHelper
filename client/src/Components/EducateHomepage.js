import React from 'react'
import "./CSS/EducateHomepage.css"
import checklistImage from "./CSS/Assets/checklistscreenshot.png"

function EducateHomepage() {
    return (
        <div class="educateHomepage">
            <div className="educateHeader">
                <h1>New to the tiny home community and looking to get started on your journey? Start here.</h1>
            </div>
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src={checklistImage}/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Building Your Tiny Dream House: The Checklist</h2>
                            <p class="card_text">Everything you need to know the get started on building your tiny home</p>
                            <button class="btn card_btn"><a href="/TinyHomeChecklist">Read More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Card Grid Layout</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Card Grid Layout</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Card Grid Layout</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Card Grid Layout</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                <div class="card">
                    <div class="card_image">
                        <img src="https://picsum.photos/500/300/?image=10"/>
                    </div>
                    <div class="card_content">
                        <h2 class="card_title">Card Grid Layout</h2>
                        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button class="btn card_btn">Read More</button>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    )
}

export default EducateHomepage
