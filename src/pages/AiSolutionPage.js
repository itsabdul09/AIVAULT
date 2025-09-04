import React from 'react';
import './AiSolutionPage.css';

import img1 from './data/AI1.png';
import img2 from './data/AI2.png';
import img3 from './data/AI3.png';

const AiSolutionPage = () => {
  return (
    <div className="ai-solution-page container">
      
      <header className="page-header">
        <h1>Our AI Solutions</h1>
        <p className="subtitle">
          Together with our vast ISV ecosystem, we deliver secure, scalable, and enterprise-ready AI solutions tailored to your infrastructure requirements: on-premise, cloud, or hybrid. Our expertise often spans the full life-cycle from data ingestion and model development to deployment, monitoring, and governance.
        </p>
      </header>

      <main className="solutions-container">

        <section className="solution-card">
          <div className="solution-text">
            <h2>Enterprise GenAI Platform</h2>
            <p>Build and operate generative AI workloads with full control, compliance, and performance insight.</p>
            <ul>
              <li><strong>Security-first architecture:</strong> Zero-trust, supply-chain certified environments with hardened containers and data encryption.</li>
              <li><strong>Modular and open:</strong> Support for a wide range of LLMs, vector databases, and frameworks (e.g., Ray, Kubeflow).</li>
              <li><strong>Flexible deployment:</strong> Deployable on air-gapped, on-prem, hybrid, or multi-cloud infrastructure.</li>
              <li><strong>Autonomous agents:</strong> Design agentic workflows with tool calling, memory, retrieval, and self-healing logic.</li>
            </ul>
          </div>
          <div className="solution-image">
            <img src={img1} alt="Enterprise GenAI Platform" />
          </div>
        </section>

        <section className="solution-card reverse">
          <div className="solution-text">
            <h2>AI Life-cycle Management Platform</h2>
            <p>Accelerate model development and deployment across hybrid environments with a single, unified platform.</p>
            <ul>
              <li><strong>Integrated pipelines:</strong> End-to-end support for data prep, model training, fine-tuning, packaging, and deployment.</li>
              <li><strong>Efficient deployment:</strong> Flexible deployment of large models using transformer-serving engines and sparse inference frameworks.</li>
              <li><strong>Multi-cloud & hybrid:</strong> Support for bare metal, virtual machines, Kubernetes clusters, or managed platforms.</li>
              <li><strong>Built-in integrations:</strong> Connect with automation platforms for AIOps, observability, policy enforcement, and event-triggered remediation.</li>
            </ul>
          </div>
          <div className="solution-image">
            <img src={img2} alt="AI Life-cycle Management" />
          </div>
        </section>

        <section className="solution-card">
          <div className="solution-text">
            <h2>Predictive & Generative AI Platform</h2>
            <p>Deliver predictive insights and generative applications with a flexible AI stack.</p>
            <ul>
                <li><strong>AutoML pipeline:</strong> Automated feature engineering, model selection, hyperparameter tuning, and interpretability.</li>
                <li><strong>LLM integration:</strong> Out-of-the-box support for integrating custom, open-source, or 3rd-party proprietary large models.</li>
                <li><strong>Data apps & notebooks:</strong> Drag-and-drop UI for data prep, modeling, evaluation, and visualization.</li>
                <li><strong>Model & app hub:</strong> Centralized catalog for reusable models, templates, and AI-powered applications.</li>
            </ul>
          </div>
          <div className="solution-image">
            <img src={img3} alt="Predictive and Generative AI" />
          </div>
        </section>

      </main>
    </div>
  );
};

export default AiSolutionPage;