import React from 'react';
import './FeatureGrid.css';
// Replace these with your actual icon paths
import Icon1 from '/src/assets/illust1.png';
import Icon2 from '/src/assets/illust2.png';
import Icon3 from '/src/assets/illust3.png';
import Icon4 from '/src/assets/illust4.png';

const FeatureItem = ({ icon, title, description, align }) => (
    <div className={`feature-row ${align}`}>
        <div className="feature-content-box">
            <div className="feature-header">
                <img src={icon} alt="icon" className="feature-icon" />
                <h3 className="feature-title">{title}</h3>
            </div>
            <p className="feature-description">{description}</p>
            <button className="btn-check-pricing">Check Pricing</button>
        </div>
    </div>
);

export default function FeatureGrid() {
    const features = [
        { icon: Icon1, title: "Lorem ipsum dolor sit .", align: "left" },
        { icon: Icon2, title: "Lorem ipsum dolor sit .", align: "right" },
        { icon: Icon3, title: "Lorem ipsum dolor sit .", align: "left" },
        { icon: Icon4, title: "Lorem ipsum dolor sit .", align: "right" },
    ];

    const descriptionText = "adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim";

    return (
        <section className="feature-grid-section">
            <div className="container">
                <h2 className="main-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                <div className="features-list">
                    {features.map((f, index) => (
                        <FeatureItem
                            key={index}
                            icon={f.icon}
                            title={f.title}
                            description={descriptionText}
                            align={f.align}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}