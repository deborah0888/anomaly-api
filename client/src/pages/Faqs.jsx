// // // // import React from "react";
// // // // import "../styles/Faqs.css";

// // // // const Faq = () => {
// // // //   const faqs = [
// // // //     {
// // // //       question: "What is an anomaly?",
// // // //       answer:
// // // //         "An anomaly is anything that deviates from what is considered normal. In our project, it typically means an image or part of an image that represents a defect or irregularity.",
// // // //     },
// // // //     {
// // // //       question: "How does your system detect anomalies?",
// // // //       answer:
// // // //         "We use AI models like Convolutional Autoencoders and CycleGAN to learn what \"normal\" looks like. Any major deviation from the learned pattern is flagged as an anomaly.",
// // // //     },
// // // //     {
// // // //       question: "What kind of images can your system analyze?",
// // // //       answer:
// // // //         "Our current system is trained on industrial components. It can be adapted for other domains with proper retraining.",
// // // //     },
// // // //     {
// // // //       question: "How accurate is your model?",
// // // //       answer:
// // // //         "Our model currently achieves 70% accuracy. This improves as more data is added.",
// // // //     },
// // // //     {
// // // //       question: "Can I upload my own images?",
// // // //       answer:
// // // //         "Yes! Our web interface allows you to upload images for real-time analysis.",
// // // //     },
// // // //     {
// // // //       question: "Is the system open-source?",
// // // //       answer:
// // // //         "Yes, our system is open-source. GitHub Link: https://github.com/Vinuthna0812/Anomaly-Detection.git",
// // // //     },
// // // //     {
// // // //       question: "Can this be used in real-world factories or hospitals?",
// // // //       answer:
// // // //         "Absolutely! With fine-tuning and integration, our system can be adapted for industrial use or medical image analysis.",
// // // //     },
// // // //     {
// // // //       question: "Who can use this system?",
// // // //       answer:
// // // //         "Anyone – engineers, quality analysts, researchers, or developers. No deep technical knowledge is required for the basic interface.",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="faq-container">
// // // //       <h1 className="faq-title">Frequently Asked Questions</h1>
// // // //       <div className="faq-grid">
// // // //         {faqs.map((faq, index) => (
// // // //           <div className="faq-card" key={index}>
// // // //             <h3 className="faq-question">{faq.question}</h3>
// // // //             <p className="faq-answer">{faq.answer}</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Faq;
// // // // src/pages/Faqs.jsx
// // // import React, { useState } from "react";
// // // import "../styles/Faqs.css";

// // // const faqData = [
// // //   {
// // //     question: "What is an anomaly?",
// // //     answer:
// // //       "An anomaly is anything that deviates from what is considered normal. In our project, it typically means an image or part of an image that represents a defect or irregularity.",
// // //   },
// // //   {
// // //     question: "How does your system detect anomalies?",
// // //     answer:
// // //       "We use AI models like Convolutional Autoencoders and CycleGAN to learn what “normal” looks like. Any major deviation from the learned pattern is flagged as an anomaly.",
// // //   },
// // //   {
// // //     question: "What kind of images can your system analyze?",
// // //     answer:
// // //       "Our current system is trained on industrial components. It can be adapted for other domains with proper retraining.",
// // //   },
// // //   {
// // //     question: "How accurate is your model?",
// // //     answer:
// // //       "Our model currently achieves 70% accuracy. This improves as more data is added.",
// // //   },
// // //   {
// // //     question: "Can I upload my own images?",
// // //     answer:
// // //       "Yes! Our web interface allows you to upload images for real-time analysis.",
// // //   },
// // //   {
// // //     question: "Is the system open-source?",
// // //     answer: (
// // //       <>
// // //         Yes, our system is open-source. Visit the{" "}
// // //         <a
// // //           href="https://github.com/Vinuthna0812/Anomaly-Detection.git"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           GitHub Repository
// // //         </a>
// // //         .
// // //       </>
// // //     ),
// // //   },
// // //   {
// // //     question: "Can this be used in real-world factories or hospitals?",
// // //     answer:
// // //       "Absolutely! With fine-tuning and integration, our system can be adapted for industrial use or medical image analysis.",
// // //   },
// // //   {
// // //     question: "Who can use this system?",
// // //     answer:
// // //       "Anyone – engineers, quality analysts, researchers, or developers. No deep technical knowledge is required for the basic interface.",
// // //   },
// // // ];

// // // const Faqs = () => {
// // //   const [openIndex, setOpenIndex] = useState(null);

// // //   const toggle = (index) => {
// // //     setOpenIndex(openIndex === index ? null : index);
// // //   };

// // //   return (
// // //     <div className="faqs-container">
// // //       <h1 className="faqs-title">Frequently Asked Questions</h1>
// // //       <div className="faqs-list">
// // //         {faqData.map((faq, index) => (
// // //           <div className="faq-item" key={index}>
// // //             <button
// // //               className={`faq-question ${openIndex === index ? "active" : ""}`}
// // //               onClick={() => toggle(index)}
// // //             >
// // //               {faq.question}
// // //               <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
// // //             </button>
// // //             {openIndex === index && (
// // //               <div className="faq-answer">{faq.answer}</div>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Faqs;
// // // src/pages/Faqs.jsx
// // import React, { useState } from "react";
// // import "../styles/Faqs.css";

// // const faqData = [
// //   {
// //     question: "What is an anomaly?",
// //     answer:
// //       "An anomaly is anything that deviates from what is considered normal. In our project, it typically means an image or part of an image that represents a defect or irregularity.",
// //   },
// //   {
// //     question: "How does your system detect anomalies?",
// //     answer:
// //       "We use AI models like Convolutional Autoencoders and CycleGAN to learn what “normal” looks like. Any major deviation from the learned pattern is flagged as an anomaly.",
// //   },
// //   {
// //     question: "What kind of images can your system analyze?",
// //     answer:
// //       "Our current system is trained on industrial components. It can be adapted for other domains with proper retraining.",
// //   },
// //   {
// //     question: "How accurate is your model?",
// //     answer:
// //       "Our model currently achieves 70% accuracy. This improves as more data is added.",
// //   },
// //   {
// //     question: "Can I upload my own images?",
// //     answer:
// //       "Yes! Our web interface allows you to upload images for real-time analysis.",
// //   },
// //   {
// //     question: "Is the system open-source?",
// //     answer: (
// //       <>
// //         Yes, our system is open-source. Visit the{" "}
// //         <a
// //           href="https://github.com/Vinuthna0812/Anomaly-Detection.git"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           GitHub Repository
// //         </a>
// //         .
// //       </>
// //     ),
// //   },
// //   {
// //     question: "Can this be used in real-world factories or hospitals?",
// //     answer:
// //       "Absolutely! With fine-tuning and integration, our system can be adapted for industrial use or medical image analysis.",
// //   },
// //   {
// //     question: "Who can use this system?",
// //     answer:
// //       "Anyone – engineers, quality analysts, researchers, or developers. No deep technical knowledge is required for the basic interface.",
// //   },
// // ];

// // const Faqs = () => {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggle = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="faqs-container">
// //       <h1 className="faqs-title">Frequently Asked Questions</h1>
// //       <div className="faqs-list">
// //         {faqData.map((faq, index) => (
// //           <div className="faq-item" key={index}>
// //             <button
// //               className={`faq-question ${openIndex === index ? "active" : ""}`}
// //               onClick={() => toggle(index)}
// //             >
// //               {faq.question}
// //               <span className={`arrow-icon ${openIndex === index ? "rotate" : ""}`}>
// //                 ▼
// //               </span>
// //             </button>
// //             <div
// //               className={`faq-answer-wrapper ${
// //                 openIndex === index ? "open" : ""
// //               }`}
// //             >
// //               <div className="faq-answer">{faq.answer}</div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Faqs;
// // src/pages/Faqs.jsx
// import React, { useState } from "react";
// import "../styles/Faqs.css";

// const faqData = [
//   {
//     question: "What is an anomaly?",
//     answer:
//       "An anomaly is anything that deviates from what is considered normal. In our project, it typically means an image or part of an image that represents a defect or irregularity.",
//   },
//   {
//     question: "How does your system detect anomalies?",
//     answer:
//       "We use AI models like Convolutional Autoencoders and CycleGAN to learn what “normal” looks like. Any major deviation from the learned pattern is flagged as an anomaly.",
//   },
//   {
//     question: "What kind of images can your system analyze?",
//     answer:
//       "Our current system is trained on industrial components. It can be adapted for other domains with proper retraining.",
//   },
//   {
//     question: "How accurate is your model?",
//     answer:
//       "Our model currently achieves 70% accuracy. This improves as more data is added.",
//   },
//   {
//     question: "Can I upload my own images?",
//     answer:
//       "Yes! Our web interface allows you to upload images for real-time analysis.",
//   },
//   {
//     question: "Is the system open-source?",
//     answer: (
//       <>
//         Yes, our system is open-source. Visit the{" "}
//         <a
//           href="https://github.com/Vinuthna0812/Anomaly-Detection.git"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           GitHub Repository
//         </a>
//         .
//       </>
//     ),
//   },
//   {
//     question: "Can this be used in real-world factories or hospitals?",
//     answer:
//       "Absolutely! With fine-tuning and integration, our system can be adapted for industrial use or medical image analysis.",
//   },
//   {
//     question: "Who can use this system?",
//     answer:
//       "Anyone – engineers, quality analysts, researchers, or developers. No deep technical knowledge is required for the basic interface.",
//   },
// ];

// const Faqs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="faqs-container">
//       <h1 className="faqs-title">Frequently Asked Questions</h1>
//       <div className="faqs-list">
//         {faqData.map((faq, index) => (
//           <div className="faq-item" key={index}>
//             <button
//               className={`faq-question ${openIndex === index ? "active" : ""}`}
//               onClick={() => toggle(index)}
//             >
//               {faq.question}
//               <span className={`arrow-icon ${openIndex === index ? "rotate" : ""}`}>
//                 ▼
//               </span>
//             </button>
//             {openIndex === index && (
//               <div className="faq-answer-wrapper open">
//                 <div className="faq-answer">{faq.answer}</div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faqs;
// src/pages/Faqs.jsx
import React, { useState } from "react";
import "../styles/Faqs.css";

const faqData = [
  {
    question: "What is an anomaly?",
    answer:
      "An anomaly is anything that deviates from what is considered normal. In our project, it typically means an image or part of an image that represents a defect or irregularity.",
  },
  {
    question: "How does your system detect anomalies?",
    answer:
      "We use AI models like Convolutional Autoencoders and CycleGAN to learn what “normal” looks like. Any major deviation from the learned pattern is flagged as an anomaly.",
  },
  {
    question: "What kind of images can your system analyze?",
    answer:
      "Our current system is trained on industrial components. It can be adapted for other domains with proper retraining.",
  },
  {
    question: "How accurate is your model?",
    answer:
      "Our model currently achieves 70% accuracy. This improves as more data is added.",
  },
  {
    question: "Can I upload my own images?",
    answer:
      "Yes! Our web interface allows you to upload images for real-time analysis.",
  },
  {
    question: "Is the system open-source?",
    answer: (
      <>
        Yes, our system is open-source. Visit the{" "}
        <a
          href="https://github.com/Vinuthna0812/Anomaly-Detection.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
        .
      </>
    ),
  },
  {
    question: "Can this be used in real-world factories or hospitals?",
    answer:
      "Absolutely! With fine-tuning and integration, our system can be adapted for industrial use or medical image analysis.",
  },
  {
    question: "Who can use this system?",
    answer:
      "Anyone – engineers, quality analysts, researchers, or developers. No deep technical knowledge is required for the basic interface.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className={`arrow-icon ${openIndex === index ? "rotate" : ""}`}>
                ▼
              </span>
            </div>
            <div
              className={`faq-answer-wrapper ${
                openIndex === index ? "open" : "closed"
              }`}
            >
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
