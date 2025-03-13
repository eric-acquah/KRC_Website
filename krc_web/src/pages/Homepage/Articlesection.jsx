// import { useEffect } from "react";
import { InstagramEmbed, TikTokEmbed, YouTubeEmbed } from 'react-social-media-embed';
import "./Articlesection.css";



export default function Articlesection() {
    return (
      <section className="article-section">
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                    <h3 className='fs-3'>Arricle & News</h3>
                    <p>Proin suscipit mi et quam placerat, vestibulum vulputate diam cursus. Cras finibus quam sed turpis dictum porta. Donec pharetra dolor magna, vel molestie sapien luctus sit amet.</p>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>

        <article className="container mt-5 pt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="insta-card-container row d-flex justify-content-center">
                            <div className="col-sm "><InstagramEmbed url="https://www.instagram.com/p/DAjSnV1NmGp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /></div>
                          <div className="col-sm "><TikTokEmbed url="https://www.tiktok.com/@kingrikocraft/video/7477655014089952567?is_from_webapp=1&sender_device=pc&web_id=7480272513177798199" height={622} /></div>
                          <div className="col-sm">
                        <div className="youtube-container">
                            <YouTubeEmbed url="https://youtube.com/shorts/hdXotdZ4eVs?si=hIoQ1_ZmAWASNFaT"/></div>
                        </div>
                        </div>
                    </div>
                </div>
            </article>

            <div className="container-fluid p-0 mt-5">
                <div className="article-sec-footer row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <h2>Need Our Service?</h2>
                        <p>vestibulum vulputate diam cursus.</p>
                        <button className='btn btn-primary shadow'>Contact Us</button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
      </section>  
    );
}