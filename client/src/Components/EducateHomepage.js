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
                            <img src="https://lh3.googleusercontent.com/proxy/nFMDwfwTSmOcaB0FD2phUwKHcg4OJo7Jy5aOHorlxKfTJjLR6Xjs0RP_Y6Gn_e4DP5j2K0-pl-bxZp4gVLUAJUb8gDF90gMHx597nq-yOurpSQC7lQizdjhzWWsNl3xpVUgOmkE"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Tiny Home Movement</h2>
                            <p class="card_text">Know the Movement what exactly is the Hype on Tiny Homes</p>
                            <button class="btn card_btn"><a href="https://calculator.me/real-estate/tiny-homes.php">See More</a></button>
                        </div>
                    </div>
                </li>
                
        
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src={checklistImage}/>
                            
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Your Tiny Dream House: The Checklist</h2>
                            <p class="card_text">Everything you need to know to get started on building your tiny home</p>
                            <button class="btn card_btn"><a href="/TinyHomeChecklist">See More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://www.lawnstarter.com/blog/wp-content/uploads/2018/07/tiny-house-macy-miller.jpg.860x0_q70_crop-scale.jpg"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Inspiring Tiny Home Designs: Check out here</h2>
                            <p class="card_text">Wondering How To Design Your New  Tiny Home? Find out now</p>
                            <button class="btn card_btn"><a href="https://tinyhousedesign.com/category/tiny-house-project/">See More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://assets.newatlas.com/dims4/default/3f383a4/2147483647/strip/true/crop/1620x1080+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Ftasteful-interiors-tiny-house-46.jpg"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Virtual Tiny Home Tours</h2>
                            <p class="card_text">Virtually Step Inside a Plethora of Tiny Homes and Imagine the Possibilities </p>
                            <button class="btn card_btn"><a href="https://www.dwell.com/modern-homes">See More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://cdn.pastemagazine.com/www/articles/tinytiny.jpg"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title"> Tiny Home Articles</h2>
                            <p class="card_text">Tiny Home Articles To Steer You in the Right Direction</p>
                            <button class="btn card_btn"><a href="https://theconversation.com/us/topics/tiny-houses-18482"> See More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            <img src="https://2rksgl1kc67f453y8rekkx01-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/how-much-does-a-tiny-house-cost.jpg"/>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">Tiny Home What is the Actually Expense?</h2>
                            <p class="card_text">Check Out What it Actually Can Cost To Build Your Tiny Space</p>
                            <button class="btn card_btn"><a hred="https://www.homeadvisor.com/cost/architects-and-engineers/build-a-tiny-house/">See More</a></button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                <div class="card">
                    <div class="card_image">
                        <img src="https://own-content.ownerly.com/fit-in/980x0/filters:format(jpeg)/filters:quality(60)/2020-12-03-What-Is-the-Cheapest-Type-of-House-to-Build-CDN.jpg"/>
                    </div>
                    <div class="card_content">
                        <h2 class="card_title">The Perfect Land</h2>
                        <p class="card_text">Finding Land For your Tiny Home ASAP</p>
                        <button class="btn card_btn"><a href="https://thetinylife.com/3-tips-to-finding-land-for-a-tiny-house/">See More</a></button>
                    </div>
                </div>
                </li>
                <li class="cards_item">
                <div class="card">
                    <div class="card_image">
                        <img src="https://www.wellfedhomestead.com/wp-content/uploads/2016/02/prosandconsoftinyhouses.jpg"/>
                    </div>
                    <div class="card_content">
                        <h2 class="card_title">Pros vs Cons of Tiny Lving</h2>
                        <p class="card_text">Are Their Any Disadvantages of Owning Tiny Homes</p>
                        <button class="btn card_btn">< a hred="https://goloadup.com/pros-cons-tiny-house-living/">See More</a></button>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    )
}

export default EducateHomepage
