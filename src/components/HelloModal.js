import React, { useState, useEffect } from 'react';
import './HelloModal.css';

const HelloModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenHelloModal');
        if (!hasSeenModal) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        // localStorage.setItem('hasSeenHelloModal', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="hello-modal-overlay">
            <div className="hello-modal-container">
                <button
                    onClick={handleClose}
                    className="hello-modal-close-x"
                >
                    ✕
                </button>

                <h2 className="hello-modal-title">
                    Welcome to my Project!
                </h2>

                <p className="hello-modal-text">
                    I'm <strong>Rafał Sprengel</strong>. Explore this <strong>Full-Stack Web Application</strong>.
                    Feel free to look around or test the management features.
                </p>

                <div className="hello-modal-actions">
                    <button
                        onClick={handleClose}
                        className="hello-modal-btn-primary"
                    >
                        Start Exploring (Main Page)
                    </button>

                    <div className="hello-modal-login-row">
                        <a href="/management" className="hello-modal-btn-secondary">
                            Admin Login
                        </a>
                        <a href="/customer/login" className="hello-modal-btn-secondary">
                            Customer Login
                        </a>
                    </div>
                </div>

                <div className="hello-modal-footer">
                    <p>
                        💡 Links are also available via the <strong>"Sign In"</strong> button in the Top Bar and the <strong>"Admin"</strong> link in the Footer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HelloModal;