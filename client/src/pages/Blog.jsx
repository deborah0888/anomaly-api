// import React from "react";
// import "../styles/Blog.css";

// const Blog = () => {
//   return (
//     <div className="blog-container">
//       <h1 className="blog-title">
//         Anomaly Detection in Industrial Environments Using Synthetic Data and Transformer Models
//       </h1>

//       <section>
//         <h2 className="section-heading">🚀 Introduction</h2>
//         <p>
//           In the fast-paced world of industrial manufacturing, even a minor defect can lead to significant losses—
//           whether it's product recalls, operational delays, or compromised customer trust. Traditional visual
//           inspection techniques, often manual or rule-based, are no longer sufficient to meet the speed and accuracy
//           demands of Industry 4.0.
//         </p>
//         <p>
//           This project explores how <strong>synthetic data generation</strong>, <strong>Transformer-based models</strong>, and a <strong>web-based interface</strong> can together transform the way defects are detected and analyzed in industrial settings.
//         </p>
//       </section>

//       <section>
//         <h2 className="section-heading">🧠 Problem Statement</h2>
//         <p>
//           One of the biggest challenges in industrial anomaly detection is the <strong>lack of diverse and labeled defect data</strong>. Real-world defects are rare, making datasets highly imbalanced. This results in machine learning models that either underperform or overfit.
//         </p>
//         <p>To address this, we propose:</p>
//         <ul>
//           <li>Using <strong>synthetic data</strong> to artificially generate diverse defect types.</li>
//           <li>Employing <strong>Transformer-based models</strong> for robust and context-aware anomaly detection.</li>
//           <li>Creating a <strong>real-time visualization interface</strong> for actionable insights.</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="section-heading">🗃️ Dataset: MVTec AD</h2>
//         <p>
//           We are using the <strong>MVTec Anomaly Detection (MVTec AD)</strong> dataset, a popular benchmark in the field.
//           It includes high-resolution industrial images from categories like:
//         </p>
//         <ul>
//           <li>Metal casting</li>
//           <li>Wood</li>
//           <li>Fabrics</li>
//           <li>Bottles</li>
//           <li>Hazelnuts</li>
//           <li>Transistors, and more</li>
//         </ul>
//         <p>
//           Each class contains normal and defective samples, enabling robust supervised and unsupervised training.
//         </p>
//       </section>

//       <section>
//         <h2 className="section-heading">🧪 Synthetic Data Generation with CycleGAN</h2>
//         <p>
//           To combat the limited availability of real defect images, we use <strong>CycleGAN</strong> to generate synthetic defective versions of normal samples. CycleGAN is ideal for <strong>unpaired image-to-image translation</strong>, allowing us to simulate realistic defects while preserving the structure of the original object.
//         </p>
//         <p>
//           We plan to also explore <strong>Diffusion Models</strong> for future iterations to improve quality and variability in synthetic defect generation.
//         </p>
//       </section>

//       <section>
//         <h2 className="section-heading">⚙️ Architecture Overview</h2>

//         <h3 className="subsection-heading">🔹 Phase 1: Data Preparation</h3>
//         <p>
//           Normal images from MVTec AD are fed into the generator. CycleGAN transforms them into visually realistic defective images.
//         </p>

//         <h3 className="subsection-heading">🔹 Phase 2: Anomaly Detection Models</h3>
//         <p>We explore two architectures:</p>
//         <ul>
//           <li><strong>Convolutional Autoencoder</strong>: Learns to reconstruct normal images. A large reconstruction error during inference indicates an anomaly.</li>
//           <li><strong>Transformer-Based Model</strong>: Leverages self-attention for fine-grained anomaly detection, particularly useful for complex or subtle defects.</li>
//         </ul>

//         <h3 className="subsection-heading">🔹 Phase 3: Web App & Visualization</h3>
//         <p>
//           A <strong>user-friendly interface</strong> built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can upload images, get predictions, and view:
//         </p>
//         <ul>
//           <li>Anomaly heatmaps</li>
//           <li>Defect locations</li>
//           <li>Type/class of defect</li>
//         </ul>
//       </section>

//       <section className="footer-note">
//         <p>Thanks for reading! Stay tuned as we continue optimizing performance and preparing for real-world deployment.</p>
//       </section>
//     </div>
//   );
// };

// export default Blog;
import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">
        Anomaly Detection in Industrial Environments Using Synthetic Data and Transformer Models
      </h1>

      <div className="blog-grid">
        <section className="blog-card">
          <h2 className="section-heading">🚀 Introduction</h2>
          <p>
            In the fast-paced world of industrial manufacturing, even a minor defect can lead to significant losses—
            whether it's product recalls, operational delays, or compromised customer trust. Traditional visual
            inspection techniques, often manual or rule-based, are no longer sufficient to meet the speed and accuracy
            demands of Industry 4.0.
          </p>
          <p>
            This project explores how <strong>synthetic data generation</strong>, <strong>Transformer-based models</strong>, and a <strong>web-based interface</strong> can together transform the way defects are detected and analyzed in industrial settings.
          </p>
        </section>

        <section className="blog-card">
          <h2 className="section-heading">🧠 Problem Statement</h2>
          <p>
            One of the biggest challenges in industrial anomaly detection is the <strong>lack of diverse and labeled defect data</strong>. Real-world defects are rare, making datasets highly imbalanced. This results in machine learning models that either underperform or overfit.
          </p>
          <p>To address this, we propose:</p>
          <ul>
            <li>Using <strong>synthetic data</strong> to artificially generate diverse defect types.</li>
            <li>Employing <strong>Transformer-based models</strong> for robust and context-aware anomaly detection.</li>
            <li>Creating a <strong>real-time visualization interface</strong> for actionable insights.</li>
          </ul>
        </section>

        <section className="blog-card">
          <h2 className="section-heading">🗃️ Dataset: MVTec AD</h2>
          <p>
            We are using the <strong>MVTec Anomaly Detection (MVTec AD)</strong> dataset, a popular benchmark in the field.
            It includes high-resolution industrial images from categories like:
          </p>
          <ul>
            <li>Metal casting</li>
            <li>Wood</li>
            <li>Fabrics</li>
            <li>Bottles</li>
            <li>Hazelnuts</li>
            <li>Transistors, and more</li>
          </ul>
          <p>
            Each class contains normal and defective samples, enabling robust supervised and unsupervised training.
          </p>
        </section>

        <section className="blog-card">
          <h2 className="section-heading">🧪 Synthetic Data Generation with CycleGAN</h2>
          <p>
            To combat the limited availability of real defect images, we use <strong>CycleGAN</strong> to generate synthetic defective versions of normal samples. CycleGAN is ideal for <strong>unpaired image-to-image translation</strong>, allowing us to simulate realistic defects while preserving the structure of the original object.
          </p>
          <p>
            We plan to also explore <strong>Diffusion Models</strong> for future iterations to improve quality and variability in synthetic defect generation.
          </p>
        </section>

        <section className="blog-card">
          <h2 className="section-heading">⚙️ Architecture Overview</h2>

          <h3 className="subsection-heading">🔹 Phase 1: Data Preparation</h3>
          <p>
            Normal images from MVTec AD are fed into the generator. CycleGAN transforms them into visually realistic defective images.
          </p>

          <h3 className="subsection-heading">🔹 Phase 2: Anomaly Detection Models</h3>
          <p>We explore two architectures:</p>
          <ul>
            <li><strong>Convolutional Autoencoder</strong>: Learns to reconstruct normal images. A large reconstruction error during inference indicates an anomaly.</li>
            <li><strong>Transformer-Based Model</strong>: Leverages self-attention for fine-grained anomaly detection, particularly useful for complex or subtle defects.</li>
          </ul>

          <h3 className="subsection-heading">🔹 Phase 3: Web App & Visualization</h3>
          <p>
            A <strong>user-friendly interface</strong> built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can upload images, get predictions, and view:
          </p>
          <ul>
            <li>Anomaly heatmaps</li>
            <li>Defect locations</li>
            <li>Type/class of defect</li>
          </ul>
        </section>
      </div>

      <section className="footer-note">
        <p>Thanks for reading! Stay tuned as we continue optimizing performance and preparing for real-world deployment.</p>
      </section>
    </div>
  );
};

export default Blog;
