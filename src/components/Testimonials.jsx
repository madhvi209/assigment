import React from 'react';
import './Testimonials.css';
import badgeImage from '/src/assets/star.png';

export default function Testimonials() {
    const data = [
        { name: "Jhon Doe", role: "CEO", img: "https://i.pravatar.cc/100?u=1" },
        { name: "Amanda green", role: "Operations Manager", img: "https://i.pravatar.cc/100?u=2" },
        { name: "Sam Cooper", role: "Customer Service Manager", img: "https://i.pravatar.cc/100?u=3" }
    ];

    // Use imported image to ensure correct display on Vercel and other build platforms
    const badgeImageUrl = badgeImage;

    return (
        <section className="testimonials-wrapper">
            <h2 className="top-title">Lorem ipsum dolor sit .</h2>

            <div className="main-grey-box">
                {/* Header inside the grey box */}
                <div className="box-header">
                    <div className="green-star-badge">
                        <img 
                            src={badgeImageUrl} 
                            alt="star badge" 
                            style={{ width: "32px", height: "32px", objectFit: "contain" }} 
                        />
                    </div>
                    <h3 className="inner-title">Lorem ipsum dolor sit .</h3>
                </div>

                {/* Right Arrow Button */}
                <button className="side-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>

                {/* The Overlapping Cards */}
                <div className="testimonial-cards-container">
                    {data.map((item, i) => (
                        <div className="t-card" key={i}>
                            <div className="t-card-header">
                                <div className="t-user">
                                    <img src={item.img} alt="user" />
                                    <div>
                                        <p className="t-name">{item.name}</p>
                                        <p className="t-role">{item.role}</p>
                                    </div>
                                </div>
                                <div className="t-stars">★★★★</div>
                            </div>
                            <p className="t-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.
                                Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius
                                dolor nec bibendum dignissim. Proin in diam a justo sollicitudin.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}