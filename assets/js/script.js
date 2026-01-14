'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}

// Conversation state and memory
// Removed conversation context - no history tracking needed

// Removed response variations - keeping it simple

// Removed suggested questions - keeping it simple

// Enhanced Knowledge Base based on Nevin's resume and additional information
const knowledgeBase = [
  // Greetings
  { question: "hi", answer: "Hello! I'm Nevin's portfolio assistant. How can I help you today?" },
  { question: "hello", answer: "Hi there! I can tell you all about Nevin's skills, projects, and experience. What would you like to know?" },
  { question: "hey", answer: "Hey! Welcome to Nevin's portfolio. I'm here to answer any questions about his background and work. What interests you?" },
  { question: "good morning", answer: "Good morning! I'm here to share information about Nevin's journey in AI and data science. What would you like to explore?" },
  { question: "good afternoon", answer: "Good afternoon! Ready to learn about Nevin? Ask me anything about his education, work, or projects!" },
  { question: "good evening", answer: "Good evening! I can tell you all about Nevin's technical skills, projects, and career. What would you like to know?" },
  { question: "greetings", answer: "Greetings! I'm here to help you learn about Nevin's professional background. What would you like to know?" },
  { question: "what's up", answer: "Hello! I'm here to share information about Nevin's skills, projects, and experience. What interests you?" },
  { question: "how are you", answer: "I'm doing well, thank you! I'm here to help you learn about Nevin's background. What would you like to know?" },
  { question: "thanks", answer: "You're welcome! Feel free to ask more questions about Nevin anytime." },
  { question: "thank you", answer: "You're welcome! Is there anything else you'd like to know about Nevin?" },
  { question: "bye", answer: "Goodbye! Thanks for your interest in Nevin's profile. Feel free to return anytime!" },
  { question: "goodbye", answer: "See you later! Hope you learned something interesting about Nevin. Come back anytime!" },
  { question: "see you", answer: "Take care! Thanks for exploring Nevin's portfolio. Feel free to return if you have more questions!" },
  { question: "later", answer: "Later! Thanks for your interest in Nevin's background. Come back anytime for more questions!" },

  // Personal information
  { question: "tell me about nevin", answer: "Nevin is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP. He has experience in Python, C++, Vertex AI, SageMaker, and containerized pipelines, building system-level software for scalable AI acceleration and production reliability." },
  { question: "tell me about him", answer: "Nevin is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP. He has experience in Python, C++, Vertex AI, SageMaker, and containerized pipelines, building system-level software for scalable AI acceleration and production reliability." },
  { question: "who is nevin", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "who is he", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "brief me about him", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "brief me about nevin", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin bio", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin's background", answer: "Nevin is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP. He has experience in Python, C++, Vertex AI, SageMaker, and containerized pipelines." },
  { question: "introduce nevin", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and a background in Computer Science. He specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "contact information", answer: "You can reach Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also check out his LinkedIn profile at linkedin.com/in/nevinselby or GitHub at github.com/nevinselby." },
  { question: "how can I contact nevin", answer: "You can reach Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also check out his LinkedIn profile at linkedin.com/in/nevinselby or GitHub at github.com/nevinselby." },
  { question: "contact details", answer: "You can reach Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also check out his LinkedIn profile at linkedin.com/in/nevinselby or GitHub at github.com/nevinselby." },
  { question: "how to reach nevin", answer: "You can reach Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also check out his LinkedIn profile at linkedin.com/in/nevinselby or GitHub at github.com/nevinselby." },
  { question: "phone number", answer: "Nevin's phone number is +1 (608) 239-6451." },
  { question: "nevin's phone", answer: "Nevin's phone number is +1 (608) 239-6451." },
  { question: "email address", answer: "Nevin's email address is nevinselby2001@gmail.com." },
  { question: "nevin's email", answer: "Nevin's email address is nevinselby2001@gmail.com." },
  { question: "what is nevin's linkedin", answer: "Nevin's LinkedIn profile is: linkedin.com/in/nevinselby." },
  { question: "does nevin have a linkedin", answer: "Yes! You can connect with Nevin on LinkedIn at linkedin.com/in/nevinselby." },
  { question: "linkedin profile", answer: "Nevin's LinkedIn profile is: linkedin.com/in/nevinselby." },
  { question: "github profile", answer: "You can find Nevin's projects on his GitHub: github.com/nevinselby" },
  { question: "does nevin have a github", answer: "Yes! You can check out Nevin's GitHub projects at github.com/nevinselby." },
  { question: "can I connect with nevin on github", answer: "Yes! You can check out Nevin's GitHub projects at github.com/nevinselby." },
  { question: "where is nevin from", answer: "Nevin is originally from India and moved to the US for his Master's degree." },
  { question: "nevin's origin", answer: "Nevin is originally from India and moved to the US for his Master's degree." },
  { question: "nevin's nationality", answer: "Nevin is originally from India and moved to the US for his Master's degree." },
  { question: "where did nevin come from", answer: "Nevin is originally from India and moved to the US for his Master's degree." },

  // Education
  { question: "education", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "what are nevins educational qualifications", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "where did nevin study", answer: "Nevin completed his Master's in Data Science at University of Wisconsin-Madison  and his Bachelor's in Computer Science at Indian Institute of Information Technology." },
  { question: "where did he get his degree", answer: "Nevin completed his Master's in Data Science at University of Wisconsin-Madison  and his Bachelor's in Computer Science at Indian Institute of Information Technology." },
  { question: "list nevins education", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "what is nevin currently studying", answer: "Nevin has graduated with a Master of Science in Data Science from the University of Wisconsin-Madison in May 2025." },
  { question: "nevins education", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "his education", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "education history", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "academic background", answer: "Nevin has a Master's in Data Science from University of Wisconsin-Madison (Sept 2023 - May 2025) with a 3.70/4.0 GPA  and a Bachelor's in Computer Science from Indian Institute of Information Technology (Aug 2019 - May 2023) with a 9.15/10.0 GPA." },
  { question: "gpa", answer: "Nevin maintained a 3.70/4.0 GPA in his Master's program at UW-Madison  and a 9.15/10.0 GPA in his Bachelor's program at Indian Institute of Information Technology." },
  { question: "nevin's gpa", answer: "Nevin maintained a 3.70/4.0 GPA in his Master's program at UW-Madison  and a 9.15/10.0 GPA in his Bachelor's program at Indian Institute of Information Technology." },
  { question: "what's his gpa", answer: "Nevin maintained a 3.70/4.0 GPA in his Master's program at UW-Madison  and a 9.15/10.0 GPA in his Bachelor's program at Indian Institute of Information Technology." },
  { question: "masters gpa", answer: "Nevin's Master's GPA at UW-Madison is 3.70/4.0." },
  { question: "bachelors gpa", answer: "Nevin's Bachelor's GPA at Indian Institute of Information Technology is 9.15/10.0." },
  { question: "coursework", answer: "Nevin's Master's coursework included Advanced ML, Statistical Analysis, Data Visualization, Big-Data Systems, and Optimization. His Bachelor's coursework covered Statistical Learning, Data Structures, Distributed Systems, Cloud Computing, and Algorithms." },
  { question: "what courses did nevin take", answer: "Nevin's Master's coursework included Advanced ML, Statistical Analysis, Data Visualization, Big-Data Systems, and Optimization. His Bachelor's coursework covered Statistical Learning, Data Structures, Distributed Systems, Cloud Computing, and Algorithms." },
  { question: "subjects studied", answer: "Nevin's Master's coursework included Advanced ML, Statistical Analysis, Data Visualization, Big-Data Systems, and Optimization. His Bachelor's coursework covered Statistical Learning, Data Structures, Distributed Systems, Cloud Computing, and Algorithms." },
  { question: "masters coursework", answer: "Nevin's Master's coursework at UW-Madison included Advanced ML, Statistical Analysis, Data Visualization, Big-Data Systems, and Optimization." },
  { question: "bachelors coursework", answer: "Nevin's Bachelor's coursework at Indian Institute of Information Technology included Statistical Learning, Data Structures, Distributed Systems, Cloud Computing, and Algorithms." },
  { question: "masters degree", answer: "Nevin graduated with a Master of Science in Data Science from the University of Wisconsin-Madison in May 2025." },
  { question: "bachelors degree", answer: "Nevin holds a Bachelor of Technology in Computer Science from the Indian Institute of Information Technology, completed in May 2023." },
  { question: "when did nevin start masters", answer: "Nevin started his Master's program at UW-Madison in September 2023." },
  { question: "when does nevin graduate", answer: "Nevin graduated in May 2025. He is currently looking for full-time roles." },
  { question: "when is he graduating", answer: "Nevin graduated in May 2025. He is currently looking for full-time roles." },
  { question: "graduating in?", answer: "Nevin graduated in May 2025. He is currently looking for full-time roles." },
  { question: "when graduating?", answer: "Nevin graduated in May 2025. He is currently looking for full-time roles." },
  { question: "graduation", answer: "Nevin graduated in May 2025. He is currently looking for full-time roles." },
  { question: "masters graduation", answer: "Nevin graduated with his Master's degree in May 2025." },
  { question: "masters degree graduation", answer: "Nevin graduated with his Master's degree in May 2025." },
  { question: "when does nevins masters degree end", answer: "Nevin's Master's degree ended in May 2025, as he graduated that month." },
  { question: "when will nevin finish his studies", answer: "Nevin finished his studies and graduated in May 2025." },
  { question: "what is nevin's graduation date", answer: "Nevin's graduation date for his Master's degree was May 2025." },
  { question: "when does nevin complete his master's program", answer: "Nevin completed his Master's program in May 2025." },
  { question: "when is nevin done with school", answer: "Nevin is done with school, having graduated in May 2025." },
  { question: "when did nevin graduate bachelors", answer: "Nevin graduated with his Bachelor's degree from Indian Institute of Information Technology in May 2023." },
  { question: "when did nevins bachelors end", answer: "Nevin graduated with his Bachelor's degree from Indian Institute of Information Technology in May 2023." },
  { question: "when did nevin come to us", answer: "Nevin came to the United States in September 2023 to pursue his Master's degree at the University of Wisconsin-Madison." },
  { question: "when did nevin come to the US", answer: "Nevin arrived in the US in September 2023 for his Master's in Data Science at UW-Madison." },
  { question: "bachelors final year project", answer: "For his Bachelor's final year project, Nevin developed an advanced machine learning system that focused on computer vision applications. The project demonstrated his early expertise in AI technologies and laid the foundation for his graduate studies in Data Science." },
  { question: "final year project", answer: "Nevin's Bachelor's final year project involved developing a computer vision application using deep learning techniques. He implemented various CNN architectures and demonstrated practical applications of AI in real-world scenarios." },
  { question: "thesis", answer: "Nevin's Master's program at UW-Madison was course-based and did not require a thesis. However, his academic projects demonstrate significant research and practical applications in machine learning and data science." },
  { question: "what is nevin's field of study", answer: "Nevin's field of study is Data Science, with a strong foundation in Machine Learning and Artificial Intelligence." },
  { question: "did nevin take deep learning courses", answer: "Yes, his Master's coursework included Advanced ML and Optimization, which would cover deep learning concepts." },

  // Visa Status and Work Authorization
  { question: "visa status", answer: "Nevin has recently graduated and would be transitioning to Optional Practical Training (OPT) status. He will be eligible for a STEM OPT extension." },
  { question: "nevin's visa", answer: "Nevin has recently graduated and would be transitioning to Optional Practical Training (OPT) status. He will be eligible for a STEM OPT extension." },
  { question: "visa type", answer: "Nevin has recently graduated and would be transitioning to Optional Practical Training (OPT) status. He will be eligible for a STEM OPT extension." },
  { question: "whats his visa type", answer: "Nevin has recently graduated and would be transitioning to Optional Practical Training (OPT) status. He will be eligible for a STEM OPT extension." },
  { question: "what visa does nevin have", answer: "Nevin has recently graduated and would be transitioning to Optional Practical Training (OPT) status. He will be eligible for a STEM OPT extension." },
  { question: "work authorization", answer: "Nevin is authorized to work in the US through his F-1 OPT and is eligible for a 2-year STEM OPT extension (total 3 years). He may require work visa sponsorship for long-term employment in the US. He is also authorized to work in India without restrictions." },
  { question: "can nevin work in us", answer: "Yes, Nevin can work in the US through F-1 OPT (Optional Practical Training) for 1 year, with eligibility for an additional 2 years of STEM OPT extension due to his Data Science degree. For long-term employment, he may require H-1B or other work visa sponsorship." },
  { question: "can nevin work in the US?", answer: "Yes, Nevin is authorized to work in the US under F-1 OPT (1+2 years STEM extension). He may require work sponsorship in the future." },
  { question: "is nevin eligible to work in the US?", answer: "Yes, Nevin has work authorization under F-1 OPT and is eligible for a 2-year STEM extension." },
  { question: "us work permit", answer: "Nevin is authorized to work in the US with his F-1 visa status through OPT and potentially 2 years of STEM OPT extension (total 3 years). For long-term employment, he may require H-1B or other work visa sponsorship." },
  { question: "need sponsorship", answer: "Nevin has work authorization through F-1 OPT and STEM OPT (potentially up to 3 years total), but would require visa sponsorship for long-term employment in the US beyond that period." },
  { question: "does nevin need visa sponsorship", answer: "Nevin has work authorization through F-1 OPT and STEM OPT (potentially up to 3 years total), but would require visa sponsorship for long-term employment in the US beyond that period." },
  { question: "does nevin need visa sponsorship?", answer: "Yes, Nevin may require work sponsorship in the future after his STEM OPT period ends." },
  { question: "will nevin need sponsorship", answer: "Nevin has work authorization through F-1 OPT and STEM OPT (potentially up to 3 years total), but would require visa sponsorship for long-term employment in the US beyond that period." },
  { question: "OPT", answer: "Nevin is eligible for 1 year of OPT (Optional Practical Training) plus 2 additional years of STEM OPT extension due to his Data Science degree, allowing for up to 3 years of work authorization in the US after completing his Master's program." },
  { question: "what is nevin's opt status", answer: "Nevin is eligible for 1 year of OPT (Optional Practical Training) plus 2 additional years of STEM OPT extension due to his Data Science degree, allowing for up to 3 years of work authorization in the US after completing his Master's program." },
  { question: "citizenship", answer: "Nevin is an Indian citizen currently in the US on an F-1 visa transitioning to OPT status." },
  { question: "what citizenship does nevin have", answer: "Nevin is an Indian citizen currently in the US on an F-1 visa transitioning to OPT status." },
  { question: "international student", answer: "Yes, Nevin is an international student from India who recently graduated from the University of Wisconsin-Madison on an F-1 visa." },
  { question: "is nevin an international student", answer: "Yes, Nevin is an international student from India who recently graduated from the University of Wisconsin-Madison on an F-1 visa." },

  // Work Experience
  { question: "work experience", answer: "Nevin's work experience includes: AI Cloud Engineer (GCP & Vertex AI) at ZionClouds (Aug 2025-Present), Data Science Intern at Wisconsin School of Business (Sep 2024-Aug 2025), and AI Research Assistant at UW–Madison College of Agricultural & Life Sciences (Sep 2024-Mar 2025)." },
  { question: "professional experience", answer: "Nevin has worked as an AI Cloud Engineer building scalable Vertex AI pipelines, a Data Science Intern implementing GPT-3.5 sentiment models and fine-tuning BERT classifiers, and an AI Research Assistant training ResNet50 and YOLOv8 models for computer vision tasks." },
  { question: "job experience", answer: "Nevin's work experience includes: AI Cloud Engineer (GCP & Vertex AI) at ZionClouds (Aug 2025-Present), Data Science Intern at Wisconsin School of Business (Sep 2024-Aug 2025), and AI Research Assistant at UW–Madison College of Agricultural & Life Sciences (Sep 2024-Mar 2025)." },
  { question: "where has nevin worked", answer: "Nevin has worked at ZionClouds, Wisconsin School of Business, and UW–Madison College of Agricultural & Life Sciences." },
  { question: "nevin's work history", answer: "Nevin's work experience includes: AI Cloud Engineer (GCP & Vertex AI) at ZionClouds (Aug 2025-Present), Data Science Intern at Wisconsin School of Business (Sep 2024-Aug 2025), and AI Research Assistant at UW–Madison College of Agricultural & Life Sciences (Sep 2024-Mar 2025)." },
  { question: "employment history", answer: "Nevin's work experience includes: AI Cloud Engineer (GCP & Vertex AI) at ZionClouds (Aug 2025-Present), Data Science Intern at Wisconsin School of Business (Sep 2024-Aug 2025), and AI Research Assistant at UW–Madison College of Agricultural & Life Sciences (Sep 2024-Mar 2025)." },
  { question: "current job", answer: "Nevin is currently an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds, a position he started in August 2025." },
  { question: "where does nevin work now", answer: "Nevin is currently an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds." },
  { question: "what is nevin currently working on", answer: "Nevin is currently building scalable Vertex AI pipelines, engineering Cloud Functions for Gemini LLM, designing client workflows using Pub/Sub and Cloud Run, and creating RAG-powered custom agents at ZionClouds." },
  { question: "current role", answer: "Nevin is currently an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds." },
  { question: "zionclouds", answer: "At ZionClouds, Nevin built scalable Vertex AI pipelines improving model deployment speed by 40% and reducing latency 35%. He engineered Cloud Functions as runtime tools for Gemini LLM, maintaining 99.8% uptime under production load, and designed client workflows using Pub/Sub and Cloud Run increasing API throughput by 25% overall." },
  { question: "zionclouds role", answer: "As an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds, Nevin's responsibilities include building scalable Vertex AI pipelines, engineering Cloud Functions for Gemini LLM, designing client workflows, and creating RAG-powered custom agents." },
  { question: "zionclouds tools", answer: "At ZionClouds, Nevin works with GCP Vertex AI, Cloud Functions, Pub/Sub, Cloud Run, Gemini LLM, and RAG systems." },
  { question: "wisconsin school of business", answer: "At Wisconsin School of Business, Nevin implemented GPT-3.5 sentiment models identifying 12% negative sentiment increase after major unionization events. He fine-tuned BERT classifiers improving precision by 18% and built CLIP-based multimodal price prediction model improving accuracy 23% over previous baselines." },
  { question: "wisconsin school of business role", answer: "As a Data Science Intern at Wisconsin School of Business, Nevin focused on implementing GPT-3.5 sentiment models, fine-tuning BERT classifiers, building CLIP-based multimodal models, and automating Python-SQL ETL workflows." },
  { question: "wisconsin school of business tools", answer: "At Wisconsin School of Business, Nevin used fine-tuned BERT for NLP, SQL for ETL pipelines, and Tableau for dashboards." },
  { question: "uw college", answer: "At UW College of Agricultural & Life Sciences, Nevin fine-tuned a deep learning model (ResNet50) using drone imagery for Computer Vision tasks, raising phenology accuracy by 25 percentage points. He consolidated 10,000 seasonal records and deployed a SageMaker pipeline, reducing training cycles 35%." },
  { question: "uw college role", answer: "As an AI Research Assistant at UW College of Agricultural & Life Sciences, Nevin worked on computer vision model fine-tuning, data consolidation, and MLOps pipeline deployment." },
  { question: "uw college tools", answer: "At UW College of Agricultural & Life Sciences, Nevin used ResNet50 for CV, SageMaker for deployment, and MLflow for experiment logging." },
  { question: "wisconsin institute for discovery", answer: "At Wisconsin Institute for Discovery, Nevin created a CLIP-Stable Diffusion active-learning loop, slashing image labeling effort 80%. He boosted annotation precision by 30 percentage points through confidence ranking on ImageNet and CIFAR, and benchmarked over 20 academic models for scalability." },
  { question: "wisconsin institute for discovery role", answer: "As a Graduate Researcher at Wisconsin Institute for Discovery, Nevin developed active-learning systems, improved annotation precision, and benchmarked AI models." },
  { question: "wisconsin institute for discovery tools", answer: "At Wisconsin Institute for Discovery, Nevin used CLIP, Stable Diffusion, and worked with ImageNet and CIFAR datasets." },

  // Projects - Comprehensive variations
  { question: "tell me about his projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "what are his projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "his projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "tell me about projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "what projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "show me projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "list projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "nevin projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "about projects", answer: "Nevin's key projects include: RAG for Insurance (MongoDB + Milvus vector system reducing underwriting cycle from 48 hours to 10 minutes), AutoML-ify (no-code AutoML platform improving validation AUC 8% across 10+ classification benchmarks), and MLOps Forecasting (XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability)." },
  { question: "what projects has nevin worked on", answer: "Nevin has worked on RAG for Insurance (MongoDB + Milvus vector system), AutoML-ify (no-code AutoML platform), and MLOps Forecasting (XGBoost microservice)." },
  { question: "nevin's project work", answer: "Nevin's project work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what has nevin built", answer: "Nevin has built RAG for Insurance (MongoDB + Milvus vector system), AutoML-ify (no-code AutoML platform), and MLOps Forecasting (XGBoost microservice)." },
  { question: "nevin's portfolio", answer: "Nevin's portfolio includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what can nevin build", answer: "Nevin can build RAG systems, AutoML platforms, and MLOps microservices." },
  { question: "nevin's development work", answer: "Nevin's development work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what has nevin developed", answer: "Nevin has developed RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's coding projects", answer: "Nevin's coding projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what code has nevin written", answer: "Nevin has written code for RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's software projects", answer: "Nevin's software projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what software has nevin created", answer: "Nevin has created RAG for Insurance, AutoML-ify, and MLOps Forecasting software projects." },
  { question: "nevin's engineering projects", answer: "Nevin's engineering projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what has nevin engineered", answer: "Nevin has engineered RAG for Insurance, AutoML-ify, and MLOps Forecasting systems." },
  { question: "nevin's technical projects", answer: "Nevin's technical projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what technical work has nevin done", answer: "Nevin's technical work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's ai projects", answer: "Nevin's AI projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what ai work has nevin done", answer: "Nevin's AI work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's ml projects", answer: "Nevin's ML projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what ml work has nevin done", answer: "Nevin's ML work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's data science projects", answer: "Nevin's data science projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what data science work has nevin done", answer: "Nevin's data science work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's cloud projects", answer: "Nevin's cloud projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what cloud work has nevin done", answer: "Nevin's cloud work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's automation projects", answer: "Nevin's automation projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what automation work has nevin done", answer: "Nevin's automation work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's research projects", answer: "Nevin's research projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what research work has nevin done", answer: "Nevin's research work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's academic projects", answer: "Nevin's academic projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what academic work has nevin done", answer: "Nevin's academic work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's professional projects", answer: "Nevin's professional projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what professional work has nevin done", answer: "Nevin's professional work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's work projects", answer: "Nevin's work projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what work has nevin done", answer: "Nevin's work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's side projects", answer: "Nevin's side projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what side projects has nevin done", answer: "Nevin's side projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's personal projects", answer: "Nevin's personal projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what personal projects has nevin done", answer: "Nevin's personal projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's github projects", answer: "Nevin's GitHub projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what github projects has nevin done", answer: "Nevin's GitHub projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's open source projects", answer: "Nevin's open source projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what open source projects has nevin done", answer: "Nevin's open source projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's contributions", answer: "Nevin's contributions include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what contributions has nevin made", answer: "Nevin's contributions include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's achievements", answer: "Nevin's achievements include building RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what achievements has nevin made", answer: "Nevin's achievements include building RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's accomplishments", answer: "Nevin's accomplishments include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what accomplishments has nevin made", answer: "Nevin's accomplishments include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's work examples", answer: "Nevin's work examples include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what work examples does nevin have", answer: "Nevin's work examples include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's case studies", answer: "Nevin's case studies include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what case studies does nevin have", answer: "Nevin's case studies include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's demos", answer: "Nevin's demos include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what demos does nevin have", answer: "Nevin's demos include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's prototypes", answer: "Nevin's prototypes include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what prototypes has nevin built", answer: "Nevin's prototypes include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's experiments", answer: "Nevin's experiments include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what experiments has nevin done", answer: "Nevin's experiments include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's innovations", answer: "Nevin's innovations include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what innovations has nevin made", answer: "Nevin's innovations include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's solutions", answer: "Nevin's solutions include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what solutions has nevin created", answer: "Nevin's solutions include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's applications", answer: "Nevin's applications include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what applications has nevin built", answer: "Nevin's applications include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's systems", answer: "Nevin's systems include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what systems has nevin built", answer: "Nevin's systems include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's platforms", answer: "Nevin's platforms include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what platforms has nevin built", answer: "Nevin's platforms include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's tools", answer: "Nevin's tools include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what tools has nevin built", answer: "Nevin's tools include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's products", answer: "Nevin's products include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what products has nevin built", answer: "Nevin's products include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's creations", answer: "Nevin's creations include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what creations has nevin made", answer: "Nevin's creations include RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "automl", answer: "AutoML-ify is a Streamlit AutoML tool released by Nevin that trimmed experiment setup from 2 hours to 3 minutes. It integrated 10 classification models and Randomized SearchCV, improving validation AUC by 8%, and visualized metrics through Plotly heatmaps." },
  { question: "automl project", answer: "AutoML-ify is a Streamlit AutoML tool released by Nevin that trimmed experiment setup from 2 hours to 3 minutes. It integrated 10 classification models and Randomized SearchCV, improving validation AUC by 8%, and visualized metrics through Plotly heatmaps." },
  { question: "what is AutoML-ify", answer: "AutoML-ify is a Streamlit AutoML tool that trims experiment setup from 2 hours to 3 minutes. It integrates 10 classification models and Randomized SearchCV , and visualizes metrics through Plotly heatmaps." },
  { question: "automl tools", answer: "For the AutoML-ify project, Nevin used Streamlit, Randomized SearchCV, and Plotly." },
  { question: "automl details", answer: "The AutoML-ify project aims to automate machine learning pipelines, reducing the time for experiment setup significantly. It incorporates various classification models and uses advanced search techniques for hyperparameter tuning , with visualizations to aid model selection." },
  { question: "weather prediction", answer: "Nevin built a real-time XGBoost forecaster for the MLOps Weather Prediction project, delivering plus-minus 2°C nationwide error. He embedded continuous MLflow retraining, cutting prediction drift 20% over 6 months, and containerized the service on Docker, scaling to 10,000 hourly queries." },
  { question: "weather prediction project", answer: "Nevin built a real-time XGBoost forecaster for the MLOps Weather Prediction project, delivering plus-minus 2°C nationwide error. He embedded continuous MLflow retraining, cutting prediction drift 20% over 6 months, and containerized the service on Docker, scaling to 10,000 hourly queries." },
  { question: "what is MLOps Weather Prediction", answer: "It is a real-time XGBoost forecaster built by Nevin that delivers plus-minus 2°C nationwide error. It features continuous MLflow retraining and is containerized on Docker to scale for high query volumes." },
  { question: "weather prediction tools", answer: "For the MLOps Weather Prediction project, Nevin used XGBoost, MLflow, and Docker." },
  { question: "weather prediction details", answer: "The MLOps Weather Prediction project focuses on accurate real-time weather forecasting using XGBoost. It includes an MLOps component with continuous retraining via MLflow to manage prediction drift and is deployed using Docker for scalability." },
  { question: "rag for insurance", answer: "RAG for Insurance is a project where Nevin built a MongoDB + Milvus vector system that reduced the underwriting cycle from 48 hours to 10 minutes, significantly improving efficiency in insurance processing." },
  { question: "rag project", answer: "RAG for Insurance is a project where Nevin built a MongoDB + Milvus vector system that reduced the underwriting cycle from 48 hours to 10 minutes, significantly improving efficiency in insurance processing." },
  { question: "what is rag for insurance", answer: "RAG for Insurance is a project where Nevin built a MongoDB + Milvus vector system that reduced the underwriting cycle from 48 hours to 10 minutes, significantly improving efficiency in insurance processing." },
  { question: "mlops forecasting", answer: "MLOps Forecasting is a project where Nevin built an XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability, demonstrating production-ready ML systems." },
  { question: "forecasting project", answer: "MLOps Forecasting is a project where Nevin built an XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability, demonstrating production-ready ML systems." },
  { question: "github", answer: "You can find Nevin's projects on his GitHub: nevinselby.github.io " },
  { question: "github repository", answer: "You can find Nevin's projects on his GitHub: nevinselby.github.io " },
  { question: "nevin's github", answer: "You can find Nevin's projects on his GitHub: nevinselby.github.io " },
  { question: "most impressive project", answer: "One of Nevin's most impressive projects is AutoML-ify, which automates the entire machine learning pipeline from data cleaning to model deployment, demonstrating his ability to build end-to-end data science solutions and significantly reduce experiment setup time." },
  { question: "what is nevin's most impressive project?", answer: "One of Nevin's most impressive projects is AutoML-ify, an ML automation tool that simplifies model building with no human intervention." },
  { question: "best project", answer: "One of Nevin's most impressive projects is AutoML-ify, which automates the entire machine learning pipeline from data cleaning to model deployment, demonstrating his ability to build end-to-end data science solutions and significantly reduce experiment setup time." },

  // Skills and Tools
  { question: "what are nevins skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "nevins skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "nevin skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "his skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "can you tell me about his skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "can you tell me about nevins skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "can you tell me more about his skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "can you tell me more about nevins skills", answer: "Nevin's skills include AI & ML (Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration - CrewAI, LangChain), Data Engineering & Analytics (Snowflake, PostgreSQL, MongoDB, Milvus, Pandas, Feature Engineering, EDA), MLOps & Cloud (MLflow, GitHub Actions, Docker, AWS - SageMaker, Lambda, S3, CI/CD pipelines), Visualization & Apps (Tableau, Plotly, Matplotlib, Seaborn, Streamlit, Jupyter), and Programming (Python, SQL, R, C++, JavaScript, Bash)." },
  { question: "technical skills", answer: "Nevin is skilled in Python, PyTorch, TensorFlow, SQL, AWS (SageMaker, Lambda, S3), Docker, MLflow, CLIP, Stable Diffusion, Transformers, CrewAI, LangChain, MongoDB, Milvus, Snowflake, PostgreSQL, and Tableau." },
  { question: "programming languages", answer: "Nevin is proficient in Python, SQL, R, C++, and JavaScript." },
  { question: "python libraries", answer: "Nevin is proficient with Python libraries including Scikit-learn, Transformers, PyTorch, TensorFlow, Pandas, Plotly, Matplotlib, Seaborn, and Streamlit." },
  { question: "machine learning", answer: "Nevin has expertise in various ML areas including Scikit-learn, Transformers, CLIP, PyTorch, TensorFlow, LLM orchestration (CrewAI, LangChain), Computer Vision (ResNet50), and NLP (fine-tuned BERT)." },
  { question: "machine learning frameworks", answer: "Nevin is experienced with PyTorch, TensorFlow, Scikit-learn, and has worked with Transformer models." },
  { question: "deep learning", answer: "Nevin has deep learning experience fine-tuning ResNet50 for Computer Vision , creating CLIP-Stable Diffusion active-learning loops , and fine-tuning BERT for NLP tasks." },
  { question: "computer vision", answer: "Nevin's computer vision experience includes fine-tuning ResNet50 using drone imagery , creating CLIP-Stable Diffusion active-learning loops , and object detection tasks." },
  { question: "nlp", answer: "Nevin's NLP experience includes analyzing Starbucks reviews with fine-tuned BERT  and engineering LLM pipelines for generating project summaries." },
  { question: "data analysis", answer: "Nevin's data analysis skills include Pandas, Feature Engineering, EDA, SQL querying, and creating visualizations with Tableau, Plotly, Matplotlib, and Seaborn." },
  { question: "cloud", answer: "Nevin has experience with AWS services including SageMaker, Lambda, and S3. He has also deployed SageMaker pipelines." },
  { question: "aws experience", answer: "Nevin has AWS experience including deploying SageMaker pipelines , and familiarity with Lambda and S3." },
  { question: "databases", answer: "Nevin is experienced with Snowflake, PostgreSQL, MongoDB, and Milvus (Vector DB)." },
  { question: "mlops", answer: "Nevin's MLOps experience includes MLflow, GitHub Actions, Docker, and CI/CD pipelines. He has deployed SageMaker pipelines and logged experiments via MLflow." },
  { question: "data visualization", answer: "Nevin is skilled in data visualization using Tableau, Plotly, Matplotlib, Seaborn, and Streamlit. He designed a Tableau suite for executives  and maintained a Tableau dashboard with 99.9% uptime." },
  { question: "strongest skills", answer: "Nevin's strongest technical skills are in AI & ML (especially LLM orchestration, Transformers, PyTorch), Data Engineering (MongoDB, Milvus, Snowflake), MLOps (MLflow, Docker, AWS), and Programming (Python, SQL)." },
  { question: "most proficient tools", answer: "Nevin is most proficient with Python, PyTorch, MongoDB, Milvus, CrewAI, LangChain, MLflow, Docker, AWS, and Tableau." },
  { question: "favorite technologies", answer: "Nevin's favorite technologies to work with include LLM orchestration frameworks like CrewAI and LangChain, Vector Databases like Milvus, deep learning frameworks like PyTorch, and cloud platforms like AWS." },
  { question: "does nevin know cloud computing", answer: "Yes, Nevin has hands-on experience with AWS (SageMaker, Lambda, S3)  and has deployed SageMaker pipelines." },
  { question: "does nevin have experience in cloud computing?", answer: "Yes, Nevin has hands-on experience with AWS (SageMaker, Lambda, S3)  and has deployed SageMaker pipelines." },

  // Certifications (Removed from resume, so removing these answers)
  // { question: "certifications", answer: "..." },
  // { question: "aws certification", answer: "..." },
  // { question: "kaggle certifications", answer: "..." },
  // { question: "nlp certification", answer: "..." },
  // { question: "online courses", answer: "..." },
  // { question: "is nevin certified in AWS", answer: "..." },

  // Personal Interests
  { question: "youtube channel", answer: "Nevin runs a YouTube vlogging channel where he shares his adventures and personal experiences. His channel focuses on lifestyle content and day-in-the-life style videos, showing his life outside of his technical work." },
  { question: "youtube", answer: "Nevin has a YouTube channel dedicated to vlogging and sharing his adventures. It's a creative outlet separate from his technical work where he documents his experiences and travels." },
  { question: "medium", answer: "Nevin writes technical articles on Medium, sharing his knowledge about data science, machine learning, and programming concepts. His articles cover topics from beginner to advanced levels in AI and data science." },
  { question: "medium articles", answer: "On Medium, Nevin publishes technical articles covering topics like data science methodologies, ML model optimization, coding best practices, MLOps, computer vision techniques, and emerging technology trends." },
  { question: "hobbies", answer: "Besides his technical work, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies in his spare time." },
  { question: "tell me about his hobbies", answer: "Besides his technical work, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies in his spare time." },
  { question: "tell me about nevins hobbies", answer: "Besides his technical work, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies in his spare time." },
  { question: "list hobbies", answer: "Besides his technical work, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies in his spare time." },
  { question: "detail on hobbies", answer: "Besides his technical work, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies in his spare time." },
  { question: "does nevin have a youtube channel", answer: "Yes, he runs a YouTube vlogging channel where he shares experiences and insights about data science." },
  { question: "does nevin write on medium", answer: "Yes, he writes technical articles covering AI, ML, and data science concepts on Medium." },
  { question: "what does nevin do in his free time?", answer: "Nevin enjoys vlogging, writing technical articles on Medium, and keeping up with advancements in AI." },
  { question: "does nevin have a youtube channel?", answer: "Yes! Nevin runs a vlogging YouTube channel where he shares experiences and insights about data science and life in the US." },
  { question: "does nevin write blogs?", answer: "Yes, he writes technical articles covering AI, ML, and data science concepts on Medium." },

  // Research and Academic Interests
  { question: "research", answer: "Nevin has research experience as an AI Research Assistant at UW College of Agricultural & Life Sciences, where he fine-tuned deep learning models for Computer Vision, and as a Graduate Researcher at Wisconsin Institute for Discovery, where he created active-learning loops with CLIP and Stable Diffusion." },
  { question: "research interests", answer: "Nevin's research interests include computer vision, active learning methodologies, multimodal learning with CLIP, application of transformer models, NLP, and applying AI to real-world problems like agricultural optimization." },
  { question: "academic strengths", answer: "Nevin's academic strengths include machine learning theory, statistical analysis, data visualization, and big data systems, as indicated by his Master's coursework. He maintained high GPAs in both his Bachelor's (9.15/10.0)  and Master's (3.70/4.0) programs." },
  { question: "does nevin do research", answer: "Yes, Nevin has conducted research in AI, active learning, and Computer Vision at UW College of Agricultural & Life Sciences  and Wisconsin Institute for Discovery." },
  { question: "what are nevin's research interests", answer: "His research interests focus on deep learning, active learning, AI-driven automation, and real-world ML applications." },
  { question: "does nevin have research experience?", answer: "Yes, Nevin has conducted research in AI, active learning, and Computer Vision at UW College of Agricultural & Life Sciences  and Wisconsin Institute for Discovery." },
  { question: "what topics has nevin researched?", answer: "Nevin’s research focuses on deep learning, active learning, AI-driven automation, and real-world ML applications." },

  // Specific Technical Questions
  { question: "nlp experience", answer: "Nevin has NLP experience from analyzing over 100,000 Starbucks reviews using fine-tuned BERT  and engineering MongoDB and Milvus based LLM pipelines for generating project summaries." },
  { question: "computer vision experience", answer: "Nevin's computer vision experience includes fine-tuning ResNet50 for phenology accuracy  and creating CLIP-Stable Diffusion active-learning loops for image labeling." },
  { question: "mlops experience", answer: "Nevin's MLOps experience includes deploying SageMaker pipelines, logging experiments via MLflow , embedding continuous MLflow retraining for weather prediction , and using GitHub Actions for CI/CD." },
  { question: "data engineering", answer: "Nevin's data engineering experience includes engineering MongoDB and Milvus (Vector DB) based LLM pipelines , implementing SQL-Python ingestion pipelines , and working with Snowflake and PostgreSQL." },
  { question: "computer vision", answer: "Nevin's computer vision experience includes fine-tuning ResNet50  and creating CLIP-Stable Diffusion active-learning loops." },
  { question: "mlops", answer: "Nevin's MLOps experience includes MLflow, GitHub Actions, Docker, AWS (SageMaker, Lambda, S3), and CI/CD pipelines." },

  // Strengths and Work Style
  { question: "strengths", answer: "Nevin's key strengths include his deep technical knowledge in ML/AI, ability to quickly adopt new technologies, end-to-end project implementation skills, strong mathematical foundation, communication skills evidenced by his ability to present statistical narratives, and experience across multiple domains of AI." },
  { question: "work style", answer: "Nevin has a methodical approach to problem-solving, values collaboration as shown in aligning agronomists and leadership , demonstrates research rigor through benchmarking models, and has a track record of delivering measurable improvements (e.g., 25% phenology accuracy increase , 90x preprocessing time reduction )." },
  { question: "communication skills", answer: "Nevin has strong communication skills demonstrated through presenting statistical narratives to align agronomists and leadership, his technical writing on Medium, and content creation on his YouTube channel." },
  
  // Career Goals
  { question: "career goals", answer: "Nevin aims to further develop his expertise in applied machine learning, particularly in LLM orchestration, computer vision, and multimodal learning, while building scalable AI systems that solve real-world problems. He's interested in roles that combine research innovation with practical implementation." },
  { question: "future plans", answer: "Having graduated in May 2025, Nevin plans to work in an AI/ML role that allows him to apply his technical skills to challenging problems, potentially in LLM-driven applications, computer vision, or multimodal learning. He's open to opportunities in the US (with his OPT/STEM OPT work authorization) or internationally." },
  
  // Additional Skills and Knowledge
  { question: "big data", answer: "Nevin has experience with big data technologies and has worked with large datasets, including over 100,000 Starbucks reviews  and 10,000 seasonal records. He also has skills in Snowflake and PostgreSQL." },
  { question: "devops", answer: "Nevin has DevOps experience through his MLOps work, including CI/CD implementation with GitHub Actions , containerization with Docker , and deploying SageMaker pipelines." },
  { question: "agile", answer: "Nevin is familiar with Agile development methodologies and has applied them in his project work, particularly when collaborating on research initiatives and developing software solutions." },
  { question: "leadership", answer: "Nevin has demonstrated leadership by presenting statistical narratives to align agronomists and leadership on data-driven actions, guiding technical decisions, and collaborating with stakeholders." },

  // Additional comprehensive questions - 100+ more variations
  
  // Personal & Background variations
  { question: "who is nevin", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "what is nevin like", answer: "Nevin is a passionate AI & Cloud Engineer who loves building scalable systems and exploring new technologies. He's also an adventurer who shares his experiences through YouTube and photography." },
  { question: "nevin's personality", answer: "Nevin is passionate about AI and cloud engineering, enjoys adventure and storytelling through his YouTube channel, and loves capturing moments through photography." },
  { question: "nevin's character", answer: "Nevin is a dedicated AI & Cloud Engineer who combines technical expertise with creativity, sharing his adventures through YouTube and photography." },
  { question: "nevin's traits", answer: "Nevin is passionate, innovative, adventurous, and technically skilled, combining his love for AI engineering with storytelling and photography." },
  { question: "nevin's qualities", answer: "Nevin possesses strong technical skills in AI & Cloud Engineering, creativity in storytelling, and passion for adventure and innovation." },
  { question: "nevin's strengths as a person", answer: "Nevin's personal strengths include his passion for technology, creativity in content creation, adventurous spirit, and ability to balance technical work with personal interests." },
  { question: "what makes nevin unique", answer: "Nevin's unique combination of deep technical expertise in AI & Cloud Engineering with his creative side through YouTube vlogging and photography sets him apart." },
  { question: "nevin's values", answer: "Nevin values innovation, continuous learning, sharing knowledge through his YouTube channel, and building meaningful technical solutions." },
  { question: "nevin's passions", answer: "Nevin is passionate about AI & Cloud Engineering, building scalable systems, sharing adventures through YouTube, and capturing moments through photography." },

  // Education - More variations
  { question: "nevin's academic journey", answer: "Nevin's academic journey includes a Master's in Data Science from UW-Madison (2023-2025) and a Bachelor's in Computer Science from IIIT Kottayam (2019-2023)." },
  { question: "nevin's educational path", answer: "Nevin pursued Computer Science for his Bachelor's at IIIT Kottayam and then specialized in Data Science for his Master's at UW-Madison." },
  { question: "nevin's learning journey", answer: "Nevin's learning journey spans from foundational Computer Science concepts to advanced Data Science and AI specialization." },
  { question: "nevin's academic achievements", answer: "Nevin achieved a 3.7/4.0 GPA in his Master's program and 9.15/10.0 GPA in his Bachelor's program." },
  { question: "nevin's study background", answer: "Nevin has studied Computer Science and Data Science, with coursework covering ML, algorithms, cloud computing, and statistical analysis." },
  { question: "nevin's academic credentials", answer: "Nevin holds a Master's in Data Science from UW-Madison and a Bachelor's in Computer Science from IIIT Kottayam." },
  { question: "nevin's educational qualifications", answer: "Nevin has a Master's in Data Science (UW-Madison) and Bachelor's in Computer Science (IIIT Kottayam) with strong academic performance." },
  { question: "nevin's academic record", answer: "Nevin has an excellent academic record with 3.7/4.0 GPA in Master's and 9.15/10.0 GPA in Bachelor's programs." },
  { question: "nevin's educational experience", answer: "Nevin's educational experience includes comprehensive coursework in ML, algorithms, cloud computing, and statistical analysis." },
  { question: "nevin's academic performance", answer: "Nevin has demonstrated strong academic performance with high GPAs in both his Bachelor's and Master's programs." },

  // Skills - More variations
  { question: "nevin's technical abilities", answer: "Nevin's technical abilities include Python, C++, SQL, Bash, TensorFlow, PyTorch, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, and MLflow." },
  { question: "nevin's programming skills", answer: "Nevin is proficient in Python, C++, SQL, and Bash programming languages." },
  { question: "nevin's coding abilities", answer: "Nevin has strong coding abilities in Python, C++, SQL, and Bash with experience in AI/ML frameworks." },
  { question: "nevin's development skills", answer: "Nevin's development skills include Python, C++, SQL, Bash, and experience with AI/ML frameworks and cloud platforms." },
  { question: "nevin's technical expertise", answer: "Nevin's technical expertise spans AI & Cloud Engineering, ML infrastructure, runtime optimization, and large-scale model deployment." },
  { question: "nevin's technical knowledge", answer: "Nevin has extensive technical knowledge in Python, C++, SQL, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, and MLflow." },
  { question: "nevin's technical competencies", answer: "Nevin's technical competencies include Systems Programming, Runtime Optimization, MLOps, Model Deployment, and Distributed Systems." },
  { question: "nevin's technical capabilities", answer: "Nevin's technical capabilities include building scalable AI systems, optimizing ML infrastructure, and deploying models on cloud platforms." },
  { question: "nevin's technical strengths", answer: "Nevin's technical strengths include AI & Cloud Engineering, ML infrastructure, runtime optimization, and large-scale model deployment." },
  { question: "nevin's technical background", answer: "Nevin has a strong technical background in AI & Cloud Engineering with expertise in ML infrastructure and cloud deployment." },

  // Experience - More variations
  { question: "nevin's professional journey", answer: "Nevin's professional journey includes roles as AI Cloud Engineer at ZionClouds, Data Science Intern at Wisconsin School of Business, and AI Research Assistant at UW-Madison." },
  { question: "nevin's career path", answer: "Nevin's career path has progressed from AI Research Assistant to Data Science Intern to AI Cloud Engineer, focusing on AI and cloud technologies." },
  { question: "nevin's work journey", answer: "Nevin's work journey spans research, data science, and cloud engineering roles, building expertise in AI and ML systems." },
  { question: "nevin's employment journey", answer: "Nevin's employment journey includes positions at UW-Madison, Wisconsin School of Business, and ZionClouds, focusing on AI and data science." },
  { question: "nevin's career progression", answer: "Nevin's career progression shows growth from research roles to professional AI Cloud Engineer positions." },
  { question: "nevin's professional growth", answer: "Nevin's professional growth is evident in his progression from research assistant to AI Cloud Engineer roles." },
  { question: "nevin's career development", answer: "Nevin's career development includes gaining experience in research, data science, and cloud engineering." },
  { question: "nevin's professional evolution", answer: "Nevin's professional evolution has taken him from academic research to industry AI Cloud Engineering roles." },
  { question: "nevin's career trajectory", answer: "Nevin's career trajectory shows progression from research to data science to cloud engineering roles." },
  { question: "nevin's professional trajectory", answer: "Nevin's professional trajectory includes research, data science, and cloud engineering experiences." },

  // Projects - More variations
  { question: "nevin's development work", answer: "Nevin's development work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's engineering work", answer: "Nevin's engineering work includes building RAG systems, AutoML platforms, and MLOps microservices." },
  { question: "nevin's technical work", answer: "Nevin's technical work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's software work", answer: "Nevin's software work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's coding work", answer: "Nevin's coding work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's programming work", answer: "Nevin's programming work includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's development projects", answer: "Nevin's development projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's engineering projects", answer: "Nevin's engineering projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's technical projects", answer: "Nevin's technical projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's software projects", answer: "Nevin's software projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },

  // Specific project details - More variations
  { question: "tell me about rag for insurance", answer: "RAG for Insurance is a project where Nevin built a MongoDB + Milvus vector system that reduced the underwriting cycle from 48 hours to 10 minutes." },
  { question: "what is rag for insurance", answer: "RAG for Insurance is Nevin's project that uses MongoDB + Milvus vector system to streamline insurance underwriting processes." },
  { question: "rag for insurance details", answer: "RAG for Insurance is a MongoDB + Milvus vector system project that significantly improved insurance underwriting efficiency." },
  { question: "rag for insurance project", answer: "RAG for Insurance is a project involving MongoDB + Milvus vector system for insurance underwriting automation." },
  { question: "rag insurance project", answer: "RAG Insurance is a project where Nevin built a MongoDB + Milvus vector system for insurance underwriting." },
  { question: "insurance rag project", answer: "Insurance RAG is a project involving MongoDB + Milvus vector system for insurance underwriting automation." },
  { question: "rag insurance system", answer: "RAG Insurance System is a MongoDB + Milvus vector system built by Nevin for insurance underwriting." },
  { question: "insurance vector system", answer: "Insurance Vector System is Nevin's RAG project using MongoDB + Milvus for insurance underwriting." },
  { question: "vector system for insurance", answer: "Vector System for Insurance is Nevin's RAG project using MongoDB + Milvus for underwriting automation." },
  { question: "mongodb milvus insurance", answer: "MongoDB Milvus Insurance is Nevin's RAG project that reduced underwriting cycle from 48 hours to 10 minutes." },

  // AutoML-ify variations
  { question: "tell me about automl-ify", answer: "AutoML-ify is a Streamlit AutoML tool that trimmed experiment setup from 2 hours to 3 minutes, integrated 10 classification models, and improved validation AUC by 8%." },
  { question: "what is automl-ify", answer: "AutoML-ify is Nevin's Streamlit AutoML tool that automates machine learning experiment setup and improves model performance." },
  { question: "automl-ify details", answer: "AutoML-ify is a Streamlit AutoML tool with 10 classification models, Randomized SearchCV, and Plotly visualizations." },
  { question: "automl-ify project", answer: "AutoML-ify is a project involving Streamlit AutoML tool with classification models and performance improvements." },
  { question: "automl tool", answer: "AutoML-ify is Nevin's Streamlit AutoML tool that automates ML experiment setup and improves validation AUC." },
  { question: "streamlit automl", answer: "Streamlit AutoML refers to Nevin's AutoML-ify tool that automates machine learning experiment setup." },
  { question: "automl platform", answer: "AutoML-ify is Nevin's AutoML platform built with Streamlit that improves ML experiment efficiency." },
  { question: "no-code automl", answer: "AutoML-ify is Nevin's no-code AutoML platform that simplifies machine learning experiment setup." },
  { question: "automl streamlit", answer: "AutoML Streamlit refers to Nevin's AutoML-ify tool built with Streamlit for automated ML experiments." },
  { question: "automl classification", answer: "AutoML Classification is part of Nevin's AutoML-ify tool that includes 10 classification models." },

  // MLOps Forecasting variations
  { question: "tell me about mlops forecasting", answer: "MLOps Forecasting is a project where Nevin built an XGBoost forecasting microservice handling 1K+ requests/hour with 99.9% uptime reliability." },
  { question: "what is mlops forecasting", answer: "MLOps Forecasting is Nevin's XGBoost forecasting microservice project with high reliability and performance." },
  { question: "mlops forecasting details", answer: "MLOps Forecasting is an XGBoost microservice project handling 1K+ requests/hour with 99.9% uptime." },
  { question: "mlops forecasting project", answer: "MLOps Forecasting is a project involving XGBoost microservice for forecasting with high reliability." },
  { question: "forecasting microservice", answer: "Forecasting Microservice is Nevin's MLOps project using XGBoost for high-performance forecasting." },
  { question: "xgboost forecasting", answer: "XGBoost Forecasting is part of Nevin's MLOps project for high-performance forecasting microservice." },
  { question: "mlops microservice", answer: "MLOps Microservice refers to Nevin's forecasting project using XGBoost with high reliability." },
  { question: "forecasting mlops", answer: "Forecasting MLOps is Nevin's project involving XGBoost microservice for reliable forecasting." },
  { question: "microservice forecasting", answer: "Microservice Forecasting is Nevin's MLOps project using XGBoost for high-performance forecasting." },
  { question: "xgboost microservice", answer: "XGBoost Microservice is part of Nevin's MLOps Forecasting project with high reliability." },

  // Company-specific variations
  { question: "tell me about zionclouds", answer: "ZionClouds is where Nevin works as an AI Cloud Engineer (GCP & Vertex AI), building scalable Vertex AI pipelines and engineering Cloud Functions for Gemini LLM." },
  { question: "what is zionclouds", answer: "ZionClouds is Nevin's current workplace where he works as an AI Cloud Engineer focusing on GCP and Vertex AI." },
  { question: "zionclouds company", answer: "ZionClouds is the company where Nevin works as an AI Cloud Engineer building scalable AI systems." },
  { question: "zionclouds role", answer: "At ZionClouds, Nevin works as an AI Cloud Engineer (GCP & Vertex AI) building scalable AI pipelines." },
  { question: "zionclouds work", answer: "At ZionClouds, Nevin builds scalable Vertex AI pipelines, engineers Cloud Functions for Gemini LLM, and creates RAG-powered custom agents." },
  { question: "zionclouds projects", answer: "At ZionClouds, Nevin works on scalable Vertex AI pipelines, Cloud Functions for Gemini LLM, and RAG-powered custom agents." },
  { question: "zionclouds experience", answer: "Nevin's ZionClouds experience includes building scalable Vertex AI pipelines and engineering Cloud Functions for Gemini LLM." },
  { question: "zionclouds responsibilities", answer: "Nevin's ZionClouds responsibilities include building scalable Vertex AI pipelines, engineering Cloud Functions, and creating RAG-powered agents." },
  { question: "zionclouds achievements", answer: "At ZionClouds, Nevin improved model deployment speed by 40%, reduced latency by 35%, and maintained 99.8% uptime." },
  { question: "zionclouds impact", answer: "Nevin's impact at ZionClouds includes improving model deployment speed by 40% and reducing latency by 35%." },

  // Wisconsin School of Business variations
  { question: "tell me about wisconsin school of business", answer: "At Wisconsin School of Business, Nevin worked as a Data Science Intern implementing GPT-3.5 sentiment models and fine-tuning BERT classifiers." },
  { question: "what is wisconsin school of business", answer: "Wisconsin School of Business is where Nevin worked as a Data Science Intern focusing on sentiment analysis and NLP." },
  { question: "wisconsin school of business role", answer: "At Wisconsin School of Business, Nevin worked as a Data Science Intern implementing GPT-3.5 and BERT models." },
  { question: "wisconsin school of business work", answer: "At Wisconsin School of Business, Nevin implemented GPT-3.5 sentiment models, fine-tuned BERT classifiers, and built CLIP-based multimodal models." },
  { question: "wisconsin school of business projects", answer: "At Wisconsin School of Business, Nevin worked on GPT-3.5 sentiment analysis, BERT fine-tuning, and CLIP-based multimodal models." },
  { question: "wisconsin school of business experience", answer: "Nevin's Wisconsin School of Business experience includes implementing GPT-3.5 sentiment models and fine-tuning BERT classifiers." },
  { question: "wisconsin school of business achievements", answer: "At Wisconsin School of Business, Nevin improved precision by 18% and reduced API inference cost by 25%." },
  { question: "wisconsin school of business impact", answer: "Nevin's impact at Wisconsin School of Business includes improving precision by 18% and reducing API costs by 25%." },
  { question: "wisconsin school of business responsibilities", answer: "Nevin's Wisconsin School of Business responsibilities included implementing GPT-3.5 models and fine-tuning BERT classifiers." },
  { question: "wisconsin school of business work", answer: "At Wisconsin School of Business, Nevin worked on sentiment analysis, NLP, and multimodal learning projects." },

  // UW-Madison variations
  { question: "tell me about uw-madison", answer: "At UW-Madison College of Agricultural & Life Sciences, Nevin worked as an AI Research Assistant training ResNet50 and YOLOv8 models." },
  { question: "what is uw-madison", answer: "UW-Madison is where Nevin worked as an AI Research Assistant and also pursued his Master's in Data Science." },
  { question: "uw-madison role", answer: "At UW-Madison, Nevin worked as an AI Research Assistant and also studied for his Master's in Data Science." },
  { question: "uw-madison work", answer: "At UW-Madison, Nevin trained ResNet50 and YOLOv8 models, developed CLIP-based auto-labeling pipelines, and deployed ML pipelines on AWS SageMaker." },
  { question: "uw-madison projects", answer: "At UW-Madison, Nevin worked on ResNet50 and YOLOv8 models, CLIP-based auto-labeling, and AWS SageMaker deployment." },
  { question: "uw-madison experience", answer: "Nevin's UW-Madison experience includes AI research, computer vision, and pursuing his Master's in Data Science." },
  { question: "uw-madison achievements", answer: "At UW-Madison, Nevin improved detection accuracy by 25% and precision by 15% through model augmentation." },
  { question: "uw-madison impact", answer: "Nevin's impact at UW-Madison includes improving detection accuracy by 25% and reducing manual labeling effort by 80%." },
  { question: "uw-madison responsibilities", answer: "Nevin's UW-Madison responsibilities included training deep learning models and developing auto-labeling pipelines." },
  { question: "uw-madison research", answer: "At UW-Madison, Nevin conducted research in computer vision, training ResNet50 and YOLOv8 models." },

  // Publications variations
  { question: "tell me about nevin's publications", answer: "Nevin has published research papers including 'An Efficient Stock Price Prediction Mechanism Using Multivariate Sequential LSTM Autoencoder' and 'Advantage Actor-Critic Reinforcement Learning with Technical Indicators for Stock Trading Decisions'." },
  { question: "nevin's research papers", answer: "Nevin's research papers include LSTM Autoencoder for stock prediction and Actor-Critic Reinforcement Learning for trading decisions." },
  { question: "nevin's academic papers", answer: "Nevin's academic papers include work on LSTM Autoencoder and Actor-Critic Reinforcement Learning for financial applications." },
  { question: "nevin's published work", answer: "Nevin's published work includes research papers on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },
  { question: "nevin's scholarly work", answer: "Nevin's scholarly work includes published papers on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },
  { question: "nevin's research publications", answer: "Nevin's research publications include papers on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },
  { question: "nevin's academic publications", answer: "Nevin's academic publications include research papers on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },
  { question: "nevin's journal papers", answer: "Nevin's journal papers include work on LSTM Autoencoder and Actor-Critic Reinforcement Learning for financial applications." },
  { question: "nevin's conference papers", answer: "Nevin's conference papers include research on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },
  { question: "nevin's paper publications", answer: "Nevin's paper publications include work on LSTM Autoencoder and Actor-Critic Reinforcement Learning." },

  // Certifications variations
  { question: "tell me about nevin's certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification and is currently pursuing AWS Certified Cloud Practitioner." },
  { question: "nevin's professional certifications", answer: "Nevin's professional certifications include Google Cloud Certified – Professional Machine Learning Engineer and is pursuing AWS Certified Cloud Practitioner." },
  { question: "nevin's cloud certifications", answer: "Nevin's cloud certifications include Google Cloud Certified – Professional Machine Learning Engineer and is pursuing AWS Certified Cloud Practitioner." },
  { question: "nevin's ml certifications", answer: "Nevin's ML certifications include Google Cloud Certified – Professional Machine Learning Engineer certification." },
  { question: "nevin's aws certifications", answer: "Nevin is currently pursuing AWS Certified Cloud Practitioner certification." },
  { question: "nevin's gcp certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification." },
  { question: "nevin's google cloud certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification." },
  { question: "nevin's machine learning certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification for ML." },
  { question: "nevin's cloud engineer certifications", answer: "Nevin's cloud engineer certifications include Google Cloud Certified – Professional Machine Learning Engineer." },
  { question: "nevin's professional credentials", answer: "Nevin's professional credentials include Google Cloud Certified – Professional Machine Learning Engineer and is pursuing AWS Certified Cloud Practitioner." },
  
  // Fallback Response
  { question: "fallback", answer: "I don't have specific information about that aspect of Nevin's background. Would you like to know about his education, work experience, technical skills, projects, or visa status instead?" },

  //Age related Questions
  { question: "what is nevin's age", answer: "Nevin is 23 years old." },
  { question: "how old is nevin", answer: "Nevin is 23 years old." },
  { question: "what is his age", answer: "Nevin is 23 years old." },
  { question: "how old is he", answer: "Nevin is 23 years old." },
  { question: "nevin's age", answer: "Nevin is 23 years old." },
  { question: "age", answer: "Nevin is 23 years old." },

  // Additional technical questions
  { question: "what is nevin's tech stack", answer: "Nevin's tech stack includes Python, PyTorch, TensorFlow, AWS, Docker, MLflow, MongoDB, Milvus, CrewAI, LangChain, Tableau, and more. He specializes in machine learning, computer vision, NLP, and LLM orchestration." },
  { question: "what tools does nevin use", answer: "Nevin uses tools like PyTorch, TensorFlow, AWS SageMaker, Docker, MLflow, Tableau, MongoDB, Milvus, CrewAI, and LangChain for his projects." },
  { question: "what frameworks does nevin know", answer: "Nevin is proficient in frameworks like PyTorch, TensorFlow, Scikit-learn, Transformers, CrewAI, and LangChain." },
  { question: "does nevin know deep learning", answer: "Yes, Nevin has extensive experience in deep learning, including working with models like ResNet50 , CLIP, and Stable Diffusion." },
  { question: "what is nevin's expertise", answer: "Nevin's expertise lies in machine learning, computer vision, NLP, and MLOps. He is also skilled in data analysis, cloud computing, and building end-to-end AI/ML pipelines." },
  { question: "what is nevin's primary programming language", answer: "Python is Nevin's primary programming language, which he uses extensively for AI/ML and data science." },
  { question: "does nevin have experience with cloud platforms", answer: "Yes, Nevin has hands-on experience with AWS, including SageMaker, S3, and Lambda, for building and deploying machine learning models." },
  { question: "what is nevin's experience with NLP", answer: "Nevin has worked on NLP projects involving sentiment analysis using fine-tuned BERT  and LLM pipeline engineering with CrewAI and LangChain." },
  { question: "does nevin have experience with computer vision", answer: "Yes, Nevin has worked on computer vision projects involving ResNet50 for classification  and CLIP-Stable Diffusion for active learning and image labeling." },
  { question: "what is nevin's experience with MLOps", answer: "Nevin has experience with MLOps tools like Docker, MLflow, GitHub Actions, and AWS SageMaker for automating ML pipelines and model deployment." },
  { question: "does nevin have experience with big data", answer: "Yes, Nevin has worked with large datasets  and has experience with big data technologies like Snowflake, PostgreSQL, MongoDB, and Milvus." },
  { question: "what is nevin's experience with data visualization", answer: "Nevin is skilled in data visualization using Tableau, Plotly, Matplotlib, and Seaborn. He has designed Tableau suites and maintained dashboards." },
  { question: "does nevin have experience with SQL", answer: "Yes, Nevin is proficient in SQL and has implemented SQL-Python ingestion pipelines , and worked with databases like PostgreSQL and Snowflake." },
  { question: "what is nevin's experience with AI", answer: "Nevin has extensive experience in AI, including machine learning, deep learning, computer vision, NLP, and building scalable AI systems." },
  { question: "does nevin have experience with automation", answer: "Yes, Nevin has built automated research briefs  and automated ML pipelines using tools like GitHub Actions and MLflow." },
  { question: "what is nevin's experience with AWS", answer: "Nevin has worked with AWS services like SageMaker, S3, and Lambda for building, training, and deploying machine learning models." },
  { question: "does nevin have experience with Docker", answer: "Yes, Nevin has used Docker for containerizing services, such as for the MLOps Weather Prediction project." },
  { question: "does nevin have experience with Kubernetes", answer: "While Kubernetes is listed as an MLOps skill in general, the resume doesn't specify direct Kubernetes project experience. He has experience with Docker for containerization." },
  { question: "what is nevin's experience with Tableau", answer: "Nevin has designed Tableau suites used by executives  and maintained a Tableau dashboard with 99.9% uptime." },
  { question: "does nevin have experience with Power BI", answer: "Power BI is not explicitly listed on his resume in the skills section." },
  { question: "what is nevin's experience with Python", answer: "Nevin is proficient in Python and has used it extensively for AI & ML, Data Engineering & Analytics, and scripting." },
  { question: "does nevin have experience with C++", answer: "Yes, Nevin has experience with C++." },
  { question: "does nevin have experience with JavaScript", answer: "Yes, Nevin has experience with JavaScript." },
  { question: "what is nevin's experience with data engineering", answer: "Nevin has data engineering experience including building MongoDB and Milvus based LLM pipelines , implementing SQL-Python ingestion pipelines , and working with Snowflake and PostgreSQL." },
  { question: "does nevin have experience with time-series analysis", answer: "The resume mentions consolidating 10,000 seasonal records to schedule harvests earlier, which implies experience with time-series data or analysis." },
  { question: "what is nevin's experience with active learning", answer: "Nevin created a CLIP-Stable Diffusion active-learning loop, slashing image labeling effort 80%." },
  { question: "does nevin have experience with transformer models", answer: "Yes, Nevin has experience with Transformers , including fine-tuning BERT  and working with CLIP." },
  { question: "what is nevin's experience with GPT models", answer: "Nevin has engineered a MongoDB and Milvus based LLM pipeline, indicating experience with LLMs." },
  { question: "does nevin have experience with fine-tuning models", answer: "Yes, Nevin has fine-tuned BERT for NLP  and a deep learning model (ResNet50) for Computer Vision." },
  { question: "what is nevin's experience with data augmentation", answer: "While not explicitly detailed as 'data augmentation,' Nevin used CLIP-Stable Diffusion for an active-learning loop that slashed image labeling effort, which can be related to synthetic data generation." },
  { question: "does nevin have experience with semi-supervised learning", answer: "The resume mentions active learning with CLIP, which often involves semi-supervised approaches to reduce labeling effort." },
  { question: "what is nevin's experience with benchmarking", answer: "Nevin benchmarked 20+ academic models, validating scalability for million-image governance workloads." },
  { question: "does nevin have experience with A/B testing", answer: "A/B testing is not explicitly mentioned on the resume." },
  { question: "what is nevin's experience with hypothesis testing", answer: "Hypothesis testing is not explicitly mentioned on the resume." },
  { question: "does nevin have experience with regression analysis", answer: "Regression analysis is not explicitly mentioned on the resume, though it's typically covered in his coursework." },
  { question: "what is nevin's experience with data cleaning", answer: "Nevin has experience with Feature Engineering and EDA, which often involve data cleaning." },
  { question: "does nevin have experience with feature engineering", answer: "Yes, Nevin has experience with Feature Engineering." },
  { question: "what is nevin's experience with model deployment", answer: "Nevin deployed a SageMaker pipeline  and containerized a service on Docker, indicating model deployment experience." },
  { question: "does nevin have experience with model monitoring", answer: "Nevin embedded continuous MLflow retraining, cutting prediction drift 20% over 6 months, which suggests model monitoring." },
  { question: "what is nevin's experience with data drift detection", answer: "Nevin's continuous MLflow retraining for weather prediction aimed at cutting prediction drift, indicating experience with data drift detection." },
  { question: "does nevin have experience with CI/CD", answer: "Yes, Nevin has experience with CI/CD pipelines through GitHub Actions." },
  { question: "what is nevin's experience with version control", answer: "Nevin's resume lists GitHub Actions, implying proficiency with Git for version control." },
  { question: "does nevin have experience with collaborative projects", answer: "Yes, Nevin's roles as Data Science Intern , AI Research Assistant, and Graduate Researcher involved collaborative work." },
  { question: "what is nevin's experience with Agile", answer: "Agile is not explicitly mentioned on the resume, but his project work indicates an iterative approach." },
  { question: "does nevin have experience with leadership", answer: "Yes, Nevin presented statistical narratives, aligning agronomists and leadership, which shows leadership qualities." },
  { question: "what is nevin's experience with communication", answer: "Nevin has strong communication skills, demonstrated by presenting statistical narratives, and his external content creation." },
  { question: "does nevin have experience with teaching or mentoring", answer: "While not explicit teaching, his technical articles on Medium and YouTube channel serve as educational resources." },
  { question: "what is nevin's experience with public speaking", answer: "Nevin presented statistical narratives to agronomists and leadership, which involves public speaking." },
  { question: "does nevin have experience with writing", answer: "Yes, Nevin has experience in automating research briefs  and presenting statistical narratives." },
  { question: "what is nevin's experience with content creation", answer: "Nevin runs a YouTube channel where he creates vlogs." },
  { question: "does nevin have experience with photography", answer: "Photography is listed as a personal interest, but not as a professional skill." },
  { question: "what is nevin's experience with traveling", answer: "Traveling is listed as a personal interest." },
  { question: "does nevin have experience with creative projects", answer: "Yes, Nevin's AutoML-ify project  and content creation demonstrate creativity." },
  { question: "what is nevin's experience with problem-solving", answer: "Nevin's roles involved solving complex problems, such as reducing manual analysis time  and raising phenology accuracy." },
  { question: "does nevin have experience with innovation", answer: "Yes, Nevin created a CLIP-Stable Diffusion active-learning loop  and automated research briefs." },
  { question: "what is nevin's experience with research", answer: "Nevin has experience as an AI Research Assistant  and Graduate Researcher." },
  { question: "does nevin have experience with academic writing", answer: "The resume does not explicitly mention academic writing in terms of publications, but he presented statistical narratives." },
  { question: "what is nevin's experience with teamwork", answer: "Nevin's various roles involved working in teams." },
  { question: "does nevin have experience with cross-functional teams", answer: "Yes, Nevin's role as an AI Research Assistant involved aligning agronomists and leadership, indicating cross-functional collaboration." },
  { question: "what is nevin's experience with project management", answer: "Nevin's experience in engineering LLM pipelines  and deploying SageMaker pipelines  demonstrates project management skills." },
  { question: "does nevin have experience with time management", answer: "Nevin's ability to automate processes that cut down significant time (e.g., 48 hours to 10 minutes for research briefs ) indicates strong time management and efficiency." },
  { question: "what is nevin's experience with adaptability", answer: "Nevin has adapted to various roles and technologies across different industries (App Mastery, Business School, Agricultural & Life Sciences)." },
  { question: "does nevin have experience with continuous learning", answer: "Nevin's engagement with cutting-edge AI technologies (LLMs, Transformers, CLIP, Stable Diffusion) and multiple projects demonstrate continuous learning." },
  { question: "what is nevin's experience with open-source contributions", answer: "Nevin has GitHub repositories for his projects, indicating engagement with open-source practices." },
  { question: "does nevin have experience with hackathons", answer: "Hackathons are not explicitly mentioned on the resume." },
  { question: "what is nevin's experience with startups", answer: "App Mastery is a remote company, which can often imply a fast-paced or startup-like environment." },
  { question: "does nevin have experience with entrepreneurship", answer: "While Nevin has not founded a startup, his innovative projects and content creation on YouTube and Medium show entrepreneurial drive." },
  { question: "what is nevin's experience with data privacy", answer: "Data privacy is not explicitly mentioned on the resume." },
  { question: "does nevin have experience with ethical AI", answer: "Ethical AI is not explicitly mentioned on the resume." },
  { question: "what is nevin's experience with scalability", answer: "Nevin containerized a service on Docker, scaling to 10,000 hourly queries, demonstrating scalability experience." },
  { question: "does nevin have experience with performance optimization", answer: "Yes, Nevin automated research briefs, cutting manual analysis time , reduced preprocessing time 90x , and reduced training cycles 35%." },
  { question: "what is nevin's experience with cost optimization", answer: "Nevin automated research briefs, cutting manual analysis time from 48 hours to 10 minutes, which implies cost efficiency." },
  { question: "does nevin have experience with real-time systems", answer: "Yes, Nevin built a real-time XGBoost forecaster  and is engineering an LLM pipeline that generates summaries in under 30 seconds." },
  { question: "what is nevin's experience with edge computing", answer: "Edge computing is not explicitly mentioned on the resume." },
  { question: "does nevin have experience with IoT", answer: "The use of drone imagery for agricultural purposes  could potentially involve IoT data." },
  { question: "what is nevin's experience with robotics", answer: "Robotics is not explicitly mentioned on the resume." },

  // Fun Questions
  { question: "does nevin like ai", answer: "Absolutely! Nevin is passionate about AI, evident from his current role as an AI Software Development Engineer and his extensive project work in AI/ML." },
  { question: "what programming languages does nevin know", answer: "Python, SQL, R, C++, and JavaScript." },
  { question: "what databases does nevin use", answer: "He has experience with Snowflake, PostgreSQL, MongoDB, and Milvus (Vector DB)." },
  { question: "does nevin enjoy ai", answer: "Absolutely! Nevin is passionate about AI, evident from his current role as an AI Software Development Engineer and his extensive project work in AI/ML." },
  { question: "what programming languages does nevin know", answer: "Python, SQL, R, C++, and JavaScript." },
  { question: "what databases has nevin worked with", answer: "He has experience with Snowflake, PostgreSQL, MongoDB, and Milvus (Vector DB)." },
  { question: "what are nevins strongest skills", answer: "Nevin excels in AI & ML, Data Engineering & Analytics, MLOps & Cloud, and Programming." },
  { question: "why should we hire nevin?", answer: "Nevin brings strong expertise as an AI Software Development Engineer , hands-on experience with real-world AI projects, and a passion for innovation." },
  
  // Additional conversational responses
  { question: "what makes nevin special", answer: "Nevin combines strong technical skills with real-world impact. He's cut analysis time from 48 hours to 10 minutes, improved model accuracy by 25%, and built scalable systems handling 10,000+ queries. Plus, he's a great communicator with a YouTube channel!" },
  { question: "nevin's impact", answer: "Nevin creates measurable impact: 90x faster preprocessing, 35% reduction in training cycles, 99.9% dashboard uptime, and systems scaling to 10,000 hourly queries. He focuses on solving real problems efficiently." },
  { question: "what's impressive about nevin", answer: "Nevin's ability to bridge research and practical applications is impressive. He's worked with cutting-edge models like CLIP and Stable Diffusion while delivering production systems that handle thousands of users." },
  { question: "nevin's achievements", answer: "Key achievements include: automating research to save 48 hours per task, improving phenology accuracy by 25%, building systems with 99.9% uptime, and creating ML pipelines that reduced setup time from 2 hours to 3 minutes." },
  { question: "what's unique about nevin", answer: "Nevin uniquely combines deep technical expertise in AI/ML with strong communication skills (YouTube channel, technical writing), international experience, and a track record of delivering real business impact through innovative solutions." },

  // Publications
  { question: "publications", answer: "Nevin has published research papers including 'An Efficient Stock Price Prediction Mechanism Using Multivariate Sequential LSTM Autoencoder' and 'Advantage Actor-Critic Reinforcement Learning with Technical Indicators for Stock Trading Decisions'." },
  { question: "research papers", answer: "Nevin has published research papers including 'An Efficient Stock Price Prediction Mechanism Using Multivariate Sequential LSTM Autoencoder' and 'Advantage Actor-Critic Reinforcement Learning with Technical Indicators for Stock Trading Decisions'." },
  { question: "nevin's publications", answer: "Nevin has published research papers including 'An Efficient Stock Price Prediction Mechanism Using Multivariate Sequential LSTM Autoencoder' and 'Advantage Actor-Critic Reinforcement Learning with Technical Indicators for Stock Trading Decisions'." },
  { question: "lstm paper", answer: "Nevin published 'An Efficient Stock Price Prediction Mechanism Using Multivariate Sequential LSTM Autoencoder' focusing on advanced deep learning techniques for financial market prediction using LSTM autoencoders and multivariate time series analysis." },
  { question: "reinforcement learning paper", answer: "Nevin published 'Advantage Actor-Critic Reinforcement Learning with Technical Indicators for Stock Trading Decisions' exploring reinforcement learning applications in algorithmic trading, combining advantage actor-critic methods with technical analysis indicators." },

  // Certifications
  { question: "certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification and is currently pursuing AWS Certified Cloud Practitioner. He also has completed Intro to Machine Learning (Kaggle) and Java for Android | Cybersecurity and IoT courses." },
  { question: "nevin's certifications", answer: "Nevin holds Google Cloud Certified – Professional Machine Learning Engineer certification and is currently pursuing AWS Certified Cloud Practitioner. He also has completed Intro to Machine Learning (Kaggle) and Java for Android | Cybersecurity and IoT courses." },
  { question: "google cloud certification", answer: "Nevin is Google Cloud Certified – Professional Machine Learning Engineer, certified in designing and building production ML systems using Google Cloud technologies, including Vertex AI, AutoML, and MLOps best practices." },
  { question: "aws certification", answer: "Nevin is currently pursuing AWS Certified Cloud Practitioner certification to validate foundational understanding of AWS Cloud concepts and services." },
  { question: "kaggle certification", answer: "Nevin completed Intro to Machine Learning (Kaggle), a comprehensive machine learning course covering fundamental concepts, model evaluation, and practical implementation techniques." },

  // Additional comprehensive questions and variations
  { question: "what does nevin do", answer: "Nevin is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "what is nevin's job", answer: "Nevin works as an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds, building scalable AI systems and optimizing ML infrastructure." },
  { question: "what is nevin's profession", answer: "Nevin is an AI & Cloud Engineer with expertise in machine learning infrastructure and cloud deployment." },
  { question: "what does nevin work as", answer: "Nevin works as an AI Cloud Engineer specializing in ML infrastructure and large-scale model deployment." },
  { question: "nevin's profession", answer: "Nevin is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment." },
  { question: "nevin's job title", answer: "Nevin's current job title is AI Cloud Engineer (GCP & Vertex AI) at ZionClouds." },
  { question: "what is nevin's current position", answer: "Nevin is currently an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds." },
  { question: "nevin's current role", answer: "Nevin is currently an AI Cloud Engineer (GCP & Vertex AI) at ZionClouds." },
  { question: "what does nevin do for work", answer: "Nevin works as an AI Cloud Engineer building scalable Vertex AI pipelines and optimizing ML infrastructure." },
  { question: "nevin's work", answer: "Nevin works as an AI Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment." },

  // Education variations
  { question: "where did nevin go to school", answer: "Nevin attended University of Wisconsin-Madison for his Master's in Data Science and Indian Institute of Information Technology Kottayam for his Bachelor's in Computer Science." },
  { question: "nevin's schools", answer: "Nevin went to University of Wisconsin-Madison for his Master's and Indian Institute of Information Technology Kottayam for his Bachelor's." },
  { question: "what schools did nevin attend", answer: "Nevin attended University of Wisconsin-Madison (Master's) and Indian Institute of Information Technology Kottayam (Bachelor's)." },
  { question: "nevin's universities", answer: "Nevin studied at University of Wisconsin-Madison and Indian Institute of Information Technology Kottayam." },
  { question: "where did nevin study", answer: "Nevin studied at University of Wisconsin-Madison for his Master's and Indian Institute of Information Technology Kottayam for his Bachelor's." },
  { question: "nevin's alma mater", answer: "Nevin's alma maters are University of Wisconsin-Madison (Master's) and Indian Institute of Information Technology Kottayam (Bachelor's)." },
  { question: "what university did nevin go to", answer: "Nevin went to University of Wisconsin-Madison for his Master's and Indian Institute of Information Technology Kottayam for his Bachelor's." },
  { question: "nevin's college", answer: "Nevin attended University of Wisconsin-Madison for his Master's and Indian Institute of Information Technology Kottayam for his Bachelor's." },
  { question: "where did nevin get his masters", answer: "Nevin got his Master's in Data Science from University of Wisconsin-Madison." },
  { question: "where did nevin get his bachelors", answer: "Nevin got his Bachelor's in Computer Science from Indian Institute of Information Technology Kottayam." },

  // Skills variations
  { question: "what programming languages does nevin know", answer: "Nevin knows Python, C++, SQL, and Bash programming languages." },
  { question: "nevin's programming skills", answer: "Nevin is skilled in Python, C++, SQL, and Bash programming languages." },
  { question: "what languages does nevin program in", answer: "Nevin programs in Python, C++, SQL, and Bash." },
  { question: "nevin's coding languages", answer: "Nevin codes in Python, C++, SQL, and Bash." },
  { question: "what can nevin code in", answer: "Nevin can code in Python, C++, SQL, and Bash." },
  { question: "nevin's technical skills", answer: "Nevin has technical skills in Python, C++, SQL, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, MLflow, and more." },
  { question: "what technologies does nevin know", answer: "Nevin knows Python, C++, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, MLflow, TensorFlow, PyTorch, and more." },
  { question: "nevin's tech stack", answer: "Nevin's tech stack includes Python, C++, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, MLflow, TensorFlow, PyTorch, BERT, CLIP, GPT, and XGBoost." },
  { question: "what tools does nevin use", answer: "Nevin uses tools like Python, C++, AWS SageMaker, GCP Vertex AI, Docker, Kubernetes, MLflow, TensorFlow, PyTorch, and more." },
  { question: "nevin's expertise", answer: "Nevin's expertise lies in AI & Cloud Engineering, ML infrastructure, runtime optimization, and large-scale model deployment." },

  // Experience variations
  { question: "where does nevin work", answer: "Nevin currently works at ZionClouds as an AI Cloud Engineer (GCP & Vertex AI)." },
  { question: "nevin's company", answer: "Nevin works at ZionClouds as an AI Cloud Engineer." },
  { question: "what company does nevin work for", answer: "Nevin works for ZionClouds as an AI Cloud Engineer." },
  { question: "nevin's employer", answer: "Nevin's current employer is ZionClouds where he works as an AI Cloud Engineer." },
  { question: "where is nevin employed", answer: "Nevin is employed at ZionClouds as an AI Cloud Engineer (GCP & Vertex AI)." },
  { question: "nevin's workplace", answer: "Nevin's workplace is ZionClouds where he works as an AI Cloud Engineer." },
  { question: "what does nevin do at zionclouds", answer: "At ZionClouds, Nevin builds scalable Vertex AI pipelines, engineers Cloud Functions for Gemini LLM, and creates RAG-powered custom agents." },
  { question: "nevin's responsibilities", answer: "Nevin's responsibilities include building scalable Vertex AI pipelines, engineering Cloud Functions for Gemini LLM, designing client workflows, and creating RAG-powered custom agents." },
  { question: "what are nevin's duties", answer: "Nevin's duties include building scalable Vertex AI pipelines, engineering Cloud Functions for Gemini LLM, designing client workflows, and creating RAG-powered custom agents." },
  { question: "nevin's job responsibilities", answer: "Nevin's job responsibilities include building scalable Vertex AI pipelines, engineering Cloud Functions for Gemini LLM, designing client workflows, and creating RAG-powered custom agents." },

  // Projects variations
  { question: "what has nevin built", answer: "Nevin has built projects like RAG for Insurance (MongoDB + Milvus vector system), AutoML-ify (no-code AutoML platform), and MLOps Forecasting (XGBoost microservice)." },
  { question: "nevin's creations", answer: "Nevin has created RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what has nevin created", answer: "Nevin has created RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "nevin's work projects", answer: "Nevin's work projects include RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "what projects has nevin completed", answer: "Nevin has completed projects like RAG for Insurance, AutoML-ify, and MLOps Forecasting." },
  { question: "nevin's portfolio projects", answer: "Nevin's portfolio includes RAG for Insurance, AutoML-ify, and MLOps Forecasting projects." },
  { question: "what is nevin's best project", answer: "One of Nevin's best projects is AutoML-ify, a no-code AutoML platform that improves validation AUC by 8% across 10+ classification benchmarks." },
  { question: "nevin's favorite project", answer: "Nevin's projects like AutoML-ify and RAG for Insurance demonstrate his expertise in AI and cloud engineering." },
  { question: "what is nevin's most successful project", answer: "Nevin's RAG for Insurance project was very successful, reducing the underwriting cycle from 48 hours to 10 minutes." },
  { question: "nevin's achievements", answer: "Nevin's achievements include building scalable Vertex AI pipelines, creating RAG for Insurance, developing AutoML-ify, and building MLOps Forecasting systems." },

  // Personal information variations
  { question: "tell me about nevin selby", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "who is nevin selby", answer: "Nevin Selby is an AI & Cloud Engineer with a Master's in Data Science from UW-Madison and expertise in ML infrastructure and cloud deployment." },
  { question: "nevin selby bio", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "about nevin selby", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin selby background", answer: "Nevin Selby has a Master's in Data Science from UW-Madison and works as an AI Cloud Engineer specializing in ML infrastructure and cloud deployment." },
  { question: "nevin selby profile", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin selby summary", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin selby overview", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin selby information", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin selby details", answer: "Nevin Selby is an AI & Cloud Engineer specializing in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },

  // Contact variations
  { question: "how to contact nevin", answer: "You can contact Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also connect with him on LinkedIn at linkedin.com/in/nevinselby." },
  { question: "nevin's contact info", answer: "Nevin's contact information: nevinselby2001@gmail.com, +1 (608) 239-6451, LinkedIn: linkedin.com/in/nevinselby." },
  { question: "how can i reach nevin", answer: "You can reach Nevin at nevinselby2001@gmail.com or +1 (608) 239-6451. You can also connect with him on LinkedIn." },
  { question: "nevin's email", answer: "Nevin's email address is nevinselby2001@gmail.com." },
  { question: "nevin's phone", answer: "Nevin's phone number is +1 (608) 239-6451." },
  { question: "nevin's linkedin", answer: "Nevin's LinkedIn profile is linkedin.com/in/nevinselby." },
  { question: "nevin's github", answer: "Nevin's GitHub profile is github.com/NevinSelby." },
  { question: "nevin's website", answer: "Nevin's website is nevinselby.github.io." },
  { question: "nevin's social media", answer: "Nevin is on LinkedIn (linkedin.com/in/nevinselby) and GitHub (github.com/NevinSelby)." },
  { question: "nevin's online presence", answer: "Nevin has a LinkedIn profile (linkedin.com/in/nevinselby), GitHub (github.com/NevinSelby), and website (nevinselby.github.io)." },

  // Technical expertise variations
  { question: "what is nevin good at", answer: "Nevin is good at AI & Cloud Engineering, ML infrastructure, runtime optimization, large-scale model deployment, Python, C++, AWS, GCP, and building scalable AI systems." },
  { question: "nevin's strengths", answer: "Nevin's strengths include AI & Cloud Engineering, ML infrastructure, runtime optimization, Python, C++, AWS, GCP, and building scalable AI systems." },
  { question: "what is nevin's expertise", answer: "Nevin's expertise is in AI & Cloud Engineering, ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin's specializations", answer: "Nevin specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "what does nevin specialize in", answer: "Nevin specializes in ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "nevin's focus areas", answer: "Nevin's focus areas include ML infrastructure, runtime optimization, and large-scale model deployment across AWS and GCP." },
  { question: "what are nevin's core competencies", answer: "Nevin's core competencies include Systems Programming, Runtime Optimization, MLOps, Model Deployment, and Distributed Systems." },
  { question: "nevin's technical competencies", answer: "Nevin's technical competencies include Systems Programming, Runtime Optimization, MLOps, Model Deployment, and Distributed Systems." },
  { question: "what technologies is nevin proficient in", answer: "Nevin is proficient in Python, C++, SQL, Bash, TensorFlow, PyTorch, BERT, CLIP, GPT, XGBoost, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, MLflow, and Airflow." },
  { question: "nevin's technical knowledge", answer: "Nevin has technical knowledge in Python, C++, SQL, Bash, TensorFlow, PyTorch, BERT, CLIP, GPT, XGBoost, AWS, GCP, Vertex AI, SageMaker, Docker, Kubernetes, MLflow, and Airflow." },

  // Career and future variations
  { question: "what are nevin's career goals", answer: "Nevin aims to further develop his expertise in applied machine learning, particularly in LLM orchestration, computer vision, and multimodal learning, while building scalable AI systems that solve real-world problems." },
  { question: "nevin's future plans", answer: "Nevin plans to work in an AI/ML role that allows him to apply his technical skills to challenging problems, potentially in LLM-driven applications, computer vision, or multimodal learning." },
  { question: "what does nevin want to do", answer: "Nevin wants to work in AI/ML roles that allow him to apply his technical skills to challenging problems in LLM-driven applications, computer vision, or multimodal learning." },
  { question: "nevin's aspirations", answer: "Nevin aspires to work in AI/ML roles that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "what is nevin looking for", answer: "Nevin is looking for AI/ML roles that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "nevin's career aspirations", answer: "Nevin's career aspirations include working in AI/ML roles that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "what kind of job does nevin want", answer: "Nevin wants AI/ML jobs that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "nevin's job preferences", answer: "Nevin prefers AI/ML jobs that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "what is nevin interested in", answer: "Nevin is interested in AI/ML roles that allow him to apply his technical skills to challenging problems and build scalable AI systems." },
  { question: "nevin's interests", answer: "Nevin is interested in AI/ML roles that allow him to apply his technical skills to challenging problems and build scalable AI systems." },

  // Research and academic variations
  { question: "does nevin do research", answer: "Yes, Nevin has conducted research as an AI Research Assistant at UW–Madison College of Agricultural & Life Sciences, where he trained ResNet50 and YOLOv8 models and developed CLIP-based semi-supervised auto-labeling pipelines." },
  { question: "nevin's research work", answer: "Nevin's research work includes training ResNet50 and YOLOv8 models, developing CLIP-based semi-supervised auto-labeling pipelines, and deploying ML pipelines on AWS SageMaker." },
  { question: "what research has nevin done", answer: "Nevin has done research in computer vision, training ResNet50 and YOLOv8 models, developing CLIP-based semi-supervised auto-labeling pipelines, and deploying ML pipelines on AWS SageMaker." },
  { question: "nevin's academic work", answer: "Nevin's academic work includes research in computer vision, training deep learning models, and developing semi-supervised learning pipelines." },
  { question: "nevin's research experience", answer: "Nevin has research experience in computer vision, training ResNet50 and YOLOv8 models, developing CLIP-based semi-supervised auto-labeling pipelines, and deploying ML pipelines on AWS SageMaker." },
  { question: "what is nevin's research background", answer: "Nevin's research background includes computer vision, training deep learning models, developing semi-supervised learning pipelines, and deploying ML systems." },
  { question: "nevin's academic background", answer: "Nevin's academic background includes a Master's in Data Science from UW-Madison and research experience in computer vision and machine learning." },
  { question: "nevin's scholarly work", answer: "Nevin's scholarly work includes research in computer vision, training deep learning models, and developing semi-supervised learning pipelines." },
  { question: "nevin's research interests", answer: "Nevin's research interests include computer vision, active learning methodologies, multimodal learning with CLIP, application of transformer models, NLP, and applying AI to real-world problems." },
  { question: "what are nevin's research interests", answer: "Nevin's research interests include computer vision, active learning methodologies, multimodal learning with CLIP, application of transformer models, NLP, and applying AI to real-world problems." },

  // Personal interests variations
  { question: "what does nevin do in his free time", answer: "In his free time, Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "nevin's hobbies", answer: "Nevin's hobbies include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "what are nevin's hobbies", answer: "Nevin's hobbies include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "nevin's personal interests", answer: "Nevin's personal interests include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "what are nevin's personal interests", answer: "Nevin's personal interests include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "nevin's leisure activities", answer: "Nevin's leisure activities include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "what does nevin enjoy doing", answer: "Nevin enjoys creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "nevin's pastimes", answer: "Nevin's pastimes include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "nevin's recreational activities", answer: "Nevin's recreational activities include creating content for his YouTube vlogging channel, writing technical articles on Medium, traveling, photography, and exploring new technologies." },
  { question: "what does nevin like to do", answer: "Nevin likes to create content for his YouTube vlogging channel, write technical articles on Medium, travel, take photos, and explore new technologies." },

  // Additional technical questions
  { question: "does nevin know machine learning", answer: "Yes, Nevin has extensive experience in machine learning, including TensorFlow, PyTorch, BERT, CLIP, GPT, XGBoost, and building scalable ML systems." },
  { question: "does nevin know deep learning", answer: "Yes, Nevin has extensive experience in deep learning, including working with models like ResNet50, CLIP, and Stable Diffusion." },
  { question: "does nevin know cloud computing", answer: "Yes, Nevin has hands-on experience with AWS (SageMaker, Lambda, S3) and GCP (Vertex AI, Cloud Functions, Pub/Sub)." },
  { question: "does nevin know python", answer: "Yes, Nevin is proficient in Python and has used it extensively for AI & ML, Data Engineering & Analytics, and scripting." },
  { question: "does nevin know sql", answer: "Yes, Nevin is proficient in SQL and has implemented SQL-Python ingestion pipelines and worked with databases like PostgreSQL and Snowflake." },
  { question: "does nevin know docker", answer: "Yes, Nevin has used Docker for containerizing services, such as for the MLOps Weather Prediction project." },
  { question: "does nevin know kubernetes", answer: "Yes, Nevin has experience with Kubernetes as part of his MLOps and cloud infrastructure skills." },
  { question: "does nevin know aws", answer: "Yes, Nevin has worked with AWS services like SageMaker, S3, and Lambda for building, training, and deploying machine learning models." },
  { question: "does nevin know gcp", answer: "Yes, Nevin has extensive experience with GCP, including Vertex AI, Cloud Functions, Pub/Sub, and Cloud Run." },
  { question: "does nevin know mlops", answer: "Yes, Nevin has experience with MLOps tools like Docker, MLflow, GitHub Actions, and AWS SageMaker for automating ML pipelines and model deployment." },

  // Fallback Response
  { question: "fallback", answer: "I don't have specific information about that aspect of Nevin's background. Would you like to know about his education, work experience, technical skills, projects, or visa status instead?" }
];

// Optimized Text Processing for Production
function preprocessText(text) {
  return text.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()]/g, "")  // Remove punctuation
    .replace(/\s+/g, " ")  // Normalize whitespace
    .trim();
}

// Enhanced Text to Vector with TF-IDF style weighting
function textToVector(text) {
  const processedText = preprocessText(text);
  const words = processedText.split(/\s+/).filter(word => word.length > 1);  // Filter out single-letter words
  
  // Count word frequencies (term frequency)
  const vector = {};
  words.forEach(word => {
    vector[word] = (vector[word] || 0) + 1;
  });
  
  // Add n-gram matching for better accuracy (bigrams and trigrams)
  const wordsArray = processedText.split(/\s+/);
  for (let i = 0; i < wordsArray.length - 1; i++) {
    const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
    vector[bigram] = (vector[bigram] || 0) + 2; // Higher weight for bigrams
  }
  
  for (let i = 0; i < wordsArray.length - 2; i++) {
    const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`;
    vector[trigram] = (vector[trigram] || 0) + 3; // Even higher weight for trigrams
  }
  
  return vector;
}

// Improved Cosine Similarity with Word Importance Weighting
function enhancedCosineSimilarity(userVector, knowledgeVector) {
  // Define important keywords with higher weights
  const keywordWeights = {
    // Education keywords - High Weight
    'education': 3.0, 'degree': 2.5, 'masters': 2.5, 'bachelors': 2.5, 'gpa': 2.0,
    'coursework': 2.0, 'university': 2.5, 'wisconsin': 2.5, 'madison': 2.5, 'indian': 2.5,
    'institute': 2.5, 'kottayam': 2.5, 'graduate': 2.0, 'study': 2.0, 'major': 2.0,
    'academic': 2.0, 'background': 2.0, 'qualifications': 2.0, 'subjects': 2.0, 'thesis': 2.0,
    'final year project': 2.0, 'research': 2.0, 'field of study': 2.0, 'graduation': 2.0,

    // Technical skills - High Weight
    'machine': 2.5, 'learning': 2.5, 'data': 2.0, 'science': 2.0, 'python': 2.5,
    'pytorch': 2.5, 'tensorflow': 2.0, 'deep': 2.0, 'skills': 3.0, 'proficient': 2.0,
    'ml': 2.5, 'ai': 2.5, 'nlp': 2.5, 'computer': 2.0, 'vision': 2.0,
    'programming': 2.0, 'tools': 2.0, 'frameworks': 2.0, 'aws': 2.0, 'cloud': 2.0,
    'strongest': 2.5, 'best': 2.0, 'expert': 2.5, 'advanced': 2.0, 'clip': 2.0,
    'bert': 2.0, 'gpt': 2.0, 'sql': 2.0, 'database': 2.0, 'visualization': 2.0,
    'tableau': 2.0, 'powerbi': 2.0, 'docker': 2.0, 'kubernetes': 2.0, 'mlops': 2.0,
    'big data': 1.4, 'devops': 1.3, 'agile': 1.3, 'leadership': 1.3, 'communication': 1.3,
    'automation': 1.3, 'time-series': 1.3, 'active learning': 1.4, 'transformer': 1.4,
    'fine-tuning': 1.4, 'data augmentation': 1.3, 'semi-supervised': 1.3, 'benchmarking': 1.3,
    'a/b testing': 1.3, 'hypothesis testing': 1.3, 'regression': 1.3, 'data cleaning': 1.3,
    'feature engineering': 1.3, 'model deployment': 1.4, 'model monitoring': 1.4,
    'data drift': 1.4, 'ci/cd': 1.3, 'version control': 1.3, 'git': 1.3, 'collaboration': 1.3,
    'problem-solving': 1.4, 'innovation': 1.4, 'scalability': 1.3, 'performance': 1.3,
    'cost optimization': 1.3, 'real-time': 1.3, 'edge computing': 1.3, 'iot': 1.3,
    'robotics': 1.3, 'game development': 1.3, 'mobile development': 1.3, 'web development': 1.3,
    'apis': 1.3, 'microservices': 1.3, 'serverless': 1.3, 'cybersecurity': 1.3,
    'blockchain': 1.3, 'quantum computing': 1.3, 'ar/vr': 1.3, '3d modeling': 1.3,
    'gis': 1.3, 'bioinformatics': 1.3, 'finance': 1.3, 'healthcare': 1.3, 'education': 1.3,
    'social impact': 1.3, 'sustainability': 1.3, 'climate science': 1.3, 'energy': 1.3,
    'transportation': 1.3, 'retail': 1.3, 'e-commerce': 1.3, 'marketing': 1.3, 'sales': 1.3,
    'customer service': 1.3, 'hr': 1.3, 'operations': 1.3, 'supply chain': 1.3, 'logistics': 1.3,
    'manufacturing': 1.3, 'agriculture': 1.3, 'food tech': 1.3, 'fashion': 1.3,
    'entertainment': 1.3, 'media': 1.3, 'journalism': 1.3, 'publishing': 1.3, 'gaming': 1.3,
    'sports': 1.3, 'fitness': 1.3, 'wellness': 1.3, 'mental health': 1.3, 'edtech': 1.3,
    'fintech': 1.3, 'insurtech': 1.3, 'proptech': 1.3, 'legal tech': 1.3, 'govtech': 1.3,
    'civic tech': 1.3, 'nonprofit': 1.3, 'philanthropy': 1.3, 'social media': 1.3,
    'influencer marketing': 1.3, 'content marketing': 1.3, 'seo': 1.3, 'sem': 1.3,
    'ppc': 1.3, 'affiliate marketing': 1.3, 'email marketing': 1.3, 'crm': 1.3,
    'erp': 1.3, 'scm': 1.3, 'plm': 1.3, 'hcm': 1.3, 'lms': 1.3, 'cms': 1.3,
    'dam': 1.3, 'eam': 1.3, 'itsm': 1.3, 'itom': 1.3, 'itam': 1.3,

    // Experience - High Weight
    'experience': 3.0, 'work': 3.0, 'job': 3.0, 'intern': 2.5, 'internship': 2.5,
    'research': 2.5, 'researcher': 2.5, 'assistant': 2.0, 'professional': 2.5,
    'current': 2.0, 'wisconsin': 2.0, 'business': 2.0, 'agricultural': 2.0, 'discovery': 2.0,
    'employment': 2.5, 'history': 2.0, 'role': 2.5, 'position': 2.5, 'career': 3.0,
    'future plans': 1.4, 'goals': 1.4, 'aspirations': 1.3, 'leadership': 1.3,
    'teamwork': 1.3, 'collaboration': 1.3, 'project management': 1.3, 'time management': 1.3,
    'adaptability': 1.3, 'continuous learning': 1.3, 'open-source': 1.3, 'hackathons': 1.3,
    'startups': 1.3, 'entrepreneurship': 1.3, 'data privacy': 1.3, 'ethical ai': 1.3,

    // Core Categories - High Weight
    'project': 3.0, 'projects': 3.0, 'skills': 3.0, 'education': 3.0, 'visa': 3.0,
    'experience': 3.0, 'school': 3.0, 'work': 3.0, 'job': 3.0, 'employment': 3.0,
    'career': 3.0, 'background': 3.0, 'about': 3.0, 'tell': 2.5, 'what': 2.5,
    
    // Projects - Medium-High Weight
    'automl': 2.5, 'weather': 2.0, 'whatsapp': 2.0, 'github': 2.0, 'streamlit': 1.8,
    'xgboost': 1.8, 'mlflow': 1.8, 'analysis': 1.8, 'portfolio': 1.8, 'impressive': 2.0,
    'best': 2.0, 'favorite': 1.8, 'tools': 1.8, 'details': 1.8, 'implementation': 1.8,
    'innovation': 2.0, 'scalable': 1.8, 'end-to-end': 2.0, 'automation': 1.8,
    'interactive': 1.8, 'dashboard': 1.8, 'visualization': 1.8, 'data analysis': 2.0,
    'machine learning': 2.5, 'deep learning': 2.0, 'computer vision': 2.0, 'nlp': 2.5,
    'mlops': 2.0, 'cloud': 1.8, 'aws': 2.0, 'docker': 1.8, 'kubernetes': 1.8,
    'ci/cd': 1.8, 'version control': 1.8, 'git': 1.8, 'rag': 2.5, 'insurance': 2.0,
    'mongodb': 2.0, 'milvus': 2.0, 'vector': 2.0, 'forecasting': 2.0, 'microservice': 2.0,
    'uptime': 1.8, 'requests': 1.8,

    // Visa and work authorization - High Weight
    'visa': 3.0, 'status': 2.5, 'f1': 2.5, 'authorization': 2.5, 'opt': 2.5,
    'stem': 2.5, 'sponsor': 2.5, 'sponsorship': 2.5, 'international': 2.0, 'student': 2.0,
    'work': 3.0, 'authorized': 2.5, 'legally': 2.0, 'us': 2.0, 'india': 2.0,
    'citizenship': 1.5, 'nationality': 1.4, 'origin': 1.4, 'from': 1.3,

    // Personal
    'nevin': 1.5, 'youtube': 1.4, 'channel': 1.3, 'medium': 1.4, 'articles': 1.3,
    'hobbies': 1.3, 'interests': 1.3, 'vlog': 1.3, 'vlogging': 1.3, 'technical': 1.3,
    'writing': 1.3, 'age': 1.5, 'old': 1.5, 'years': 1.5, 'birthday': 1.3, 'born': 1.3,
    'background': 1.3, 'bio': 1.3, 'introduction': 1.3, 'contact': 1.4, 'email': 1.4,
    'phone': 1.4, 'linkedin': 1.4, 'github': 1.4, 'social media': 1.3, 'content creation': 1.3,
    'photography': 1.3, 'traveling': 1.3, 'creative': 1.3, 'public speaking': 1.3,
    'teaching': 1.3, 'mentoring': 1.3, 'communication': 1.3, 'problem-solving': 1.4,
    'innovation': 1.4, 'research': 1.4, 'academic writing': 1.3, 'teamwork': 1.3,
    'collaboration': 1.3, 'project management': 1.3, 'time management': 1.3,
    'adaptability': 1.3, 'continuous learning': 1.3, 'open-source': 1.3, 'hackathons': 1.3,
    'startups': 1.3, 'entrepreneurship': 1.3, 'data privacy': 1.3, 'ethical ai': 1.3,

    // Certifications
    'certification': 1.5, 'certifications': 1.5, 'certified': 1.5, 'udacity': 1.4,
    'kaggle': 1.4, 'bootcamp': 1.3, 'online courses': 1.3, 'aws': 1.4, 'computer vision': 1.4,
    'deep learning': 1.4, 'nlp': 1.5, 'ai': 1.5, 'ml': 1.5, 'data science': 1.4,
    'python': 1.5, 'pytorch': 1.5, 'tensorflow': 1.4, 'sql': 1.4, 'tableau': 1.3,
    'powerbi': 1.3, 'docker': 1.3, 'kubernetes': 1.3, 'mlops': 1.4, 'big data': 1.4,
    'devops': 1.3, 'agile': 1.3, 'leadership': 1.3, 'communication': 1.3,
    'automation': 1.3, 'time-series': 1.3, 'active learning': 1.4, 'transformer': 1.4,
    'fine-tuning': 1.4, 'data augmentation': 1.3, 'semi-supervised': 1.3, 'benchmarking': 1.3,
    'a/b testing': 1.3, 'hypothesis testing': 1.3, 'regression': 1.3, 'data cleaning': 1.3,
    'feature engineering': 1.3, 'model deployment': 1.4, 'model monitoring': 1.4,
    'data drift': 1.4, 'ci/cd': 1.3, 'version control': 1.3, 'git': 1.3, 'collaboration': 1.3,
    'problem-solving': 1.4, 'innovation': 1.4, 'scalability': 1.3, 'performance': 1.3,
    'cost optimization': 1.3, 'real-time': 1.3, 'edge computing': 1.3, 'iot': 1.3,
    'robotics': 1.3, 'game development': 1.3, 'mobile development': 1.3, 'web development': 1.3,
    'apis': 1.3, 'microservices': 1.3, 'serverless': 1.3, 'cybersecurity': 1.3,
    'blockchain': 1.3, 'quantum computing': 1.3, 'ar/vr': 1.3, '3d modeling': 1.3,
    'gis': 1.3, 'bioinformatics': 1.3, 'finance': 1.3, 'healthcare': 1.3, 'education': 1.3,
    'social impact': 1.3, 'sustainability': 1.3, 'climate science': 1.3, 'energy': 1.3,
    'transportation': 1.3, 'retail': 1.3, 'e-commerce': 1.3, 'marketing': 1.3, 'sales': 1.3,
    'customer service': 1.3, 'hr': 1.3, 'operations': 1.3, 'supply chain': 1.3, 'logistics': 1.3,
    'manufacturing': 1.3, 'agriculture': 1.3, 'food tech': 1.3, 'fashion': 1.3,
    'entertainment': 1.3, 'media': 1.3, 'journalism': 1.3, 'publishing': 1.3, 'gaming': 1.3,
    'sports': 1.3, 'fitness': 1.3, 'wellness': 1.3, 'mental health': 1.3, 'edtech': 1.3,
    'fintech': 1.3, 'insurtech': 1.3, 'proptech': 1.3, 'legal tech': 1.3, 'govtech': 1.3,
    'civic tech': 1.3, 'nonprofit': 1.3, 'philanthropy': 1.3, 'social media': 1.3,
    'influencer marketing': 1.3, 'content marketing': 1.3, 'seo': 1.3, 'sem': 1.3,
    'ppc': 1.3, 'affiliate marketing': 1.3, 'email marketing': 1.3, 'crm': 1.3,
    'erp': 1.3, 'scm': 1.3, 'plm': 1.3, 'hcm': 1.3, 'lms': 1.3, 'cms': 1.3,
    'dam': 1.3, 'eam': 1.3, 'itsm': 1.3, 'itom': 1.3, 'itam': 1.3
};
  // Get all unique words from both vectors
  const allWords = new Set([...Object.keys(userVector), ...Object.keys(knowledgeVector)]);
  
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  
  allWords.forEach(word => {
    // Apply weight factor to important words
    const weightFactor = keywordWeights[word] || 1.0;
    
    const a = (userVector[word] || 0) * weightFactor;
    const b = (knowledgeVector[word] || 0) * weightFactor;
    
    dotProduct += a * b;
    magnitudeA += a * a;
    magnitudeB += b * b;
  });
  
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);
  
  // Avoid division by zero
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  
  return dotProduct / (magnitudeA * magnitudeB);
}

// Enhanced intent recognition
function detectIntent(userInput) {
  const input = preprocessText(userInput);
  
  // Greeting intents
  if (/(hi|hello|hey|good morning|good afternoon|good evening|greetings)/i.test(userInput)) {
    return 'greeting';
  }
  
  // Question intents
  if (/(what|how|where|when|who|why|which|can|does|is|tell me|explain)/i.test(userInput)) {
    return 'question';
  }
  
  // Emotional expressions
  if (/(thanks|thank you|awesome|great|amazing|cool|interesting|impressive)/i.test(userInput)) {
    return 'positive';
  }
  
  if (/(sad|unhappy|disappointed|frustrated|confused|difficult)/i.test(userInput)) {
    return 'negative';
  }
  
  // Goodbye intents
  if (/(bye|goodbye|see you|farewell|thanks|that's all)/i.test(userInput)) {
    return 'goodbye';
  }
  
  return 'general';
}

// Extract conversation topics
function extractTopics(userInput) {
  const topics = [];
  const input = preprocessText(userInput);
  
  const topicKeywords = {
    'education': ['education', 'degree', 'masters', 'bachelors', 'university', 'college', 'study', 'academic'],
    'work': ['work', 'job', 'experience', 'employment', 'career', 'position', 'role'],
    'skills': ['skills', 'programming', 'python', 'ai', 'ml', 'machine learning', 'data science'],
    'projects': ['project', 'github', 'automl', 'weather', 'portfolio'],
    'personal': ['hobbies', 'youtube', 'medium', 'interests', 'travel', 'photography'],
    'visa': ['visa', 'work authorization', 'opt', 'sponsorship', 'legal']
  };
  
  Object.entries(topicKeywords).forEach(([topic, keywords]) => {
    if (keywords.some(keyword => input.includes(keyword))) {
      topics.push(topic);
    }
  });
  
  return topics;
}

// Simple response generator - just return the answer as-is
function generateContextualResponse(baseAnswer, intent, topics) {
  return baseAnswer;
}

// Simple function to find the best match
function findBestMatch(userInput) {
  const processedInput = preprocessText(userInput);
  
  // Convert user input to vector
  const userVector = textToVector(userInput);
  let matches = [];
  
  // Calculate similarity with all questions in knowledge base
  knowledgeBase.forEach(item => {
    const questionVector = textToVector(item.question);
    const similarity = enhancedCosineSimilarity(userVector, questionVector);
    matches.push({ ...item, similarity });
  });
  
  // Sort by similarity (highest first)
  matches.sort((a, b) => b.similarity - a.similarity);
  
  // Return the best match if similarity is above threshold
  if (matches[0].similarity > 0.2) {
    return matches[0].answer;
  } else {
    // Fallback response
    return "I don't have specific information about that. Would you like to know about Nevin's education, work experience, technical skills, projects, or visa status?";
  }
}

// Simple Production-Ready Chatbot Implementation
// Features: 500+ questions, vector similarity search, simple matching - no complex responses
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSendBtn = document.getElementById('chatbot-send-btn');

// Simple message function with better scrolling
function addMessage(message, isUser = false) {
  if (!chatbotMessages) return;
  
  const messageElement = document.createElement('div');
  messageElement.classList.add('chatbot-message');
  messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  chatbotMessages.appendChild(messageElement);
  
  // Ensure the latest message is visible with improved scrolling
  setTimeout(() => {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    // Force scroll to bottom
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 50);
}

// Enhanced input handler with better conversation logic
function handleUserInput() {
  if (!chatbotInput || !chatbotMessages) return;
  
  const userInput = chatbotInput.value.trim();
  if (userInput === "") return;

  // Simple input handling - no conversation context needed
  
  addMessage(userInput, true);
  chatbotInput.value = "";

  // Add typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('chatbot-message', 'bot-message', 'typing-indicator');
  typingIndicator.textContent = "...";
  chatbotMessages.appendChild(typingIndicator);
  
  // Scroll to show typing indicator
  setTimeout(() => {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 10);

  // Dynamic delay based on input complexity for more natural feel
  const delay = Math.min(Math.max(userInput.length * 25, 500), 2000);

  setTimeout(() => {
    // Remove typing indicator safely
    if (typingIndicator && typingIndicator.parentNode) {
      chatbotMessages.removeChild(typingIndicator);
    }
    
    // Get simple response
    const response = findBestMatch(userInput);
    addMessage(response, false);
  }, delay);
}

// Removed complex response system - keeping it simple

// Removed helper functions - keeping it simple

// Removed all complex functions - keeping it simple

// Removed all broken functions - keeping it simple

// Add event listeners
if (chatbotSendBtn) {
chatbotSendBtn.addEventListener('click', handleUserInput);
}

if (chatbotInput) {
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});
}

// Initialize chatbot with simple welcome message
window.addEventListener('load', () => {
  if (chatbotMessages) {
    setTimeout(() => {
      addMessage("Hi! I'm Nevin's portfolio assistant. Ask me anything about his skills, experience, projects, or interests!");
    }, 500);
  }
});