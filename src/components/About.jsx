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
            {/* Sea Wave Top SVG - 180 degree reversed */}
            <div className="features-wave-top" style={{ transform: "rotate(180deg)" }}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 90"
                    preserveAspectRatio="none"
                >
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f5f7fa"></path>
                </svg>
            </div>

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