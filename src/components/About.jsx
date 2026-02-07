import React from 'react';
import './About.css';
// Import your images here
import Illustration1 from '/src/assets/feature1.png';
import Illustration2 from '/src/assets/feature2.png';
import Illustration3 from '/src/assets/feature3.png';

export default function Features() {
    const featureData = [
        {
            img: Illustration1,
            title: "Lorem ipsum dolor sit .",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst."
        },
        {
            img: Illustration2,
            title: "Lorem ipsum dolor sit .",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst."
        },
        {
            img: Illustration3,
            title: "Lorem ipsum dolor sit .",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst."
        }
    ];

    return (
        <section className="features-section">
            {/* The Curved Background Shape */}
            <div className="features-curve-bg"></div>

            <div className="container">
                <h2 className="features-main-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>

                <div className="features-grid">
                    {featureData.map((item, index) => (
                        <div
                            className="feature-card"
                            key={index}
                            style={{
                                boxShadow: 'none',
                                border: 'none',
                                background: 'none'
                            }}
                        >
                            <div className="feature-illustration">
                                <img src={item.img} alt="illustration" />
                            </div>
                            <h3 className="feature-item-title">{item.title}</h3>
                            <p className="feature-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}