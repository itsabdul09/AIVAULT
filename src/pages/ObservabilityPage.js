import React, { useState } from 'react';
import './ObservabilityPage.css';

import ITimg1 from './data/IT1.png';
import ITimg2 from './data/IT2.png';

const ObservabilityPage = () => {
    const [activeTab, setActiveTab] = useState('application');

    return (
        <div className="observability-page container">
            
            <header className="page-header">
                <h1>IT Infrastructure & Service Management</h1>
                <p className="subtitle">
                    We help businesses manage their entire IT environment—servers, apps, tickets, and assets—without complexity. We've crafted solutions that give you full control, faster fixes, and peace of mind.
                </p>
            </header>

            <main className="tab-container">
                {/* --- Tab Buttons --- */}
                <div className="tab-buttons">
                    <button
                        className={`tab-btn ${activeTab === 'application' ? 'active' : ''}`}
                        onClick={() => setActiveTab('application')}
                    >
                        Application Observability
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'infrastructure' ? 'active' : ''}`}
                        onClick={() => setActiveTab('infrastructure')}
                    >
                        Infrastructure Monitoring
                    </button>
                </div>

                {/* --- Tab Content --- */}
                <div className="tab-content">
                    {activeTab === 'application' && (
                        <div className="tab-panel">
                            <div className="panel-text">
                                <h3>Full Visibility Into App Performance</h3>
                                <p>Get a complete picture of how your apps are performing, so you can fix issues before they impact your users.</p>
                                <ul>
                                    <li><strong>Real-time app monitoring:</strong> Watch response times, bottlenecks, and errors as they happen.</li>
                                    <li><strong>Correlate across layers:</strong> Connect the dots between infrastructure and software to troubleshoot effectively.</li>
                                    <li><strong>Automated insights:</strong> Surface root causes faster without digging through logs manually.</li>
                                </ul>
                            </div>
                            <div className="panel-visual">
                                <img src={ITimg1} alt="Application Observability" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'infrastructure' && (
                         <div className="tab-panel">
                            <div className="panel-text">
                                <h3>Keep Your Systems Running Smoothly</h3>
                                <p>Make sure your systems are always up, and spot upcoming issues before they turn into outages.</p>
                                <ul>
                                    <li><strong>See everything at a glance:</strong> Use real-time dashboards for servers, network devices, and cloud services.</li>
                                    <li><strong>Find trouble fast:</strong> Detect issues like CPU spikes, slow apps, or resource bottlenecks early.</li>
                                    <li><strong>Logs & metrics under one roof:</strong> Correlate events across your entire tech stack for smarter insights.</li>
                                </ul>
                            </div>
                            <div className="panel-visual">
                                <img src={ITimg2} alt="Infrastructure Monitoring" />
                            </div>
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
};

export default ObservabilityPage;