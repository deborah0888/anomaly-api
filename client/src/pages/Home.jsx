// // import React from 'react'

// // export default function Home() {
// //   return (
// //     <div>Home</div>
// //   )
// // }
// import '../styles/Home.css'; // Create a CSS file for styling

// export default function Home() {
//   return (
//     <div className="home-container">
//       <div className="project-description-box">
//         <h1>Welcome to My Project</h1>
//         <p>
//           This project is a demonstration of a modern web application built with React and React Router.
//           It includes features like user registration, login, and a responsive navigation bar. Feel free
//           to explore and interact with the application!
//         </p>
//       </div>
//     </div>
//   );
// }
import '../styles/Home.css'; // Ensure the correct import path

export default function Home() {
  return (
    <div className="home-container">
      <div className="project-description-box">
        <h1>Anomaly-Detection</h1>
        <p>
          This project enhances defect detection in industrial environments by leveraging synthetic data and Transformer-based models. To address data scarcity, Generative Adversarial Networks (GANs) generate diverse defect samples, ensuring comprehensive model training. Vision Transformers (ViTs), known for their superior attention mechanisms, accurately classify defects in machine components. A real-time visualization dashboard highlights defect locations and classifications, enabling proactive decision-making. By automating defect detection, our approach improves product quality, minimizes downtime, and optimizes industrial maintenance. Scalable and efficient, this AI-driven solution enhances reliability, reduces costs, and modernizes manufacturing processes.
        </p>
      </div>
    </div>
  );
}