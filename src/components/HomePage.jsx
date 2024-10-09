import React from 'react';
import './HomePage.css';

function HomePage({ setHeaderHidden ,setHomeHidden,category,dispatch}) {
  const handleKnowYourLearningType = () => {
    // Call setHeaderHidden with false to show the header
    console.log("fun");
    setHeaderHidden(false);
    setHomeHidden(false);
  };

  const handleLearningTypeSelection = (learningType) => {
    // Handle the selection of learning type here
    category = learningType;
    setHomeHidden(false);
    setHeaderHidden(false);
    dispatch({type:'search'});
  };

  return (
    <>
     <div class="bg-white max-w-full">
  <nav class="flex justify-between items-center md:p-8 p-10 relative">
    <div class="left flex flex-row items-center">
      <div class="logo w-10 mr-5">
        <img
          src="data:image/png;base64,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"
          alt="" />
      </div>
      <div class="menu">
        <ul class="md:flex flex-row items-center font-nun text-md hidden">
          <li>
            <a class="mx-2 hover:text-[#3329e0] duration-300" href="#">home</a>
          </li>
          <li>
            <a class="mx-2 hover:text-[#3329e0] duration-300" href="#">sign in</a>
          </li>
          <li>
            <a class="mx-2 hover:text-[#3329e0] duration-300" href="#">Pricing</a>
          </li>
          <li>
            <a class="mx-2 hover:text-[#3329e0] duration-300" href="#">Blog</a>
          </li>
          <li>
            <a class="mx-2 hover:text-[#3329e0] duration-300" href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right md:flex flex-row items-center text-md font-semibold hidden">
      <div
        class="signup flex flex-row items-center bg-[#ccc9ff] shadow-xl rounded-md text-[#3329e0] py-4 px-12 mx-2 cursor-pointer hover:bg-blue-700 hover:text-white ease-in transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <a href="#">Sign up</a>
      </div>
      <div class="signin mx-2 py-4 px-6 hover:text-[#3329e0] duration-300">
        <a href="#">Sign in</a>
      </div>
    </div>
    <div
      class="hamburger-menu fixed right-4 md:hidden block cursor-pointer p-3 rounded-full bg-[#ccc9ff] text-white hover:bg-blue-700 z-30">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>
  </nav>


  <div class="container p-8 mx-auto text-center ">
    <div class="text-area font-nun font-black text-[#3329e0]">
      <h2 class="text-3xl md:text-5xl my-10">
      Welcome to the NEW ERA of learning
      </h2>
      <div class="mx-1 p-0 lg:mx-36 py-0 md:px-24 mb:py-2">
        <p class="text-md md:text-4xl text-gray-800 font-light mx-auto">
        Welcome to StudySmart, where personalized learning meets cutting-edge technology. Our platform revolutionizes the way students engage with educational content, offering a tailored learning experience that adapts to individual preferences and learning styles.
        </p>
      </div>
    </div>
    <div class="flex items-center flex-col">
      <button class="bg-[#3329e0] text-white px-8 py-4 rounded-full mt-12 hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0]">
        Get Started
      </button>
      {/* <a href="#" class="text-[#3329e0] my-3">Or book a demo</a> */}
    </div>
  </div>

  </div>
    <div class="homepage min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-8 text-blue-900">Discover Your Learning Style</h1>
    <p class="text-lg text-gray-700 mb-6">Choose your preferred learning style:</p>

    <div class="flex flex-wrap justify-center gap-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" onClick={()=>{handleLearningTypeSelection('Visual')}}>Visual</button>
        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" onClick={()=>{handleLearningTypeSelection('Verbal')}}>Verbal</button>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" onClick={()=>{handleLearningTypeSelection('Auditory')}}>Auditory</button>
    </div>
    
    <p class="text-lg mt-8 text-gray-700">Not sure about your learning style?</p>
  
    <button class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md mt-2 transition duration-300" onClick={()=>{handleKnowYourLearningType()}}>Discover Now</button>
  </div>
  {/* <div class="container w-full mx-auto">
    <video
      src="https://d33wubrfki0l68.cloudfront.net/29bd6ded811640bfab60fd361c25544e98a335f0/f4fce/static/windheader-2a4698080d81010958afff5c0eea04ff.mp4"
      loop autoplay muted></video>
  </div> */}



  <div class="container w-full mt-10 p-10 mx-auto">
    <div class="text text-center font-nun text-2xl md:text-4xl mb-10">
      <h1>Why Choose Us?</h1>
    </div>
    <div class="box grid gap-3 w-fullc grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3">
      <div class="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div class="img mb-12">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2890a57d9e62a6b846d599617580e069c5f0a12f/d9a0c/static/first-step-59eb3eb212e332919543c02ec939ded9.png"
            alt="" />
        </div>
        <h2 class="my-4 text-xl font-medium">
        Personalized Learning        </h2>
        <p class="text-md font-light p-5">
        Say goodbye to one-size-fits-all education. Our system leverages advanced algorithms to analyze your learning style and deliver customized lessons that cater to your unique needs and preferences.</p>
      </div>
      <div class="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div class="img mb-12">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/c2e82d8575c1533514fe4e3e635a0e04326a360b/f1fa0/static/second-step-3328b46379b42647634e0f3175a6acc4.png"
            alt="" />
        </div>
        <h2 class="my-4 text-xl font-medium">
        Efficient Learning        </h2>
        <p class="text-md font-light p-5">
        With our innovative approach combining reinforcement learning and prompt engineering, you'll learn more effectively and efficiently. Our adaptive system ensures that every interaction maximizes your understanding and retention of key concepts.</p>
      </div>
      <div class="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"> 
        <div class="img mb-10">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/1f3af8c639846d239df57652df0cc14cacbfec4b/bb3a5/static/third-step-9c6d5dda0aabdaf5582da388a1c4a673.png"
            alt="" />
        </div>
        <h2 class="my-4 text-xl font-medium">
        Comprehensive Curriculum
        </h2>
        <p class="text-md font-light p-5">
        Whether you're studying for exams, exploring new subjects, or enhancing your skills, our platform offers a comprehensive curriculum spanning a wide range of topics and disciplines.</p>
      </div>
    </div>
  </div>
 
  <div
    class="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
    <div class="left w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
      What We Offer      </h1>
      <p class="my-6">
      <b>Interactive Lessons</b>: Dive into engaging lessons filled with interactive exercises, multimedia content, and real-world examples. Our dynamic learning environment keeps you actively involved and motivated to succeed.<br></br>

<b>Progress Tracking</b>: Monitor your progress in real-time with detailed analytics and performance metrics. Track your strengths, identify areas for improvement, and set personalized learning goals to stay on track.<br></br>

<b>Community Engagement</b>: Connect with a diverse community of learners, educators, and experts from around the world. Share insights, collaborate on projects, and learn from each other's experiences to enrich your learning journey.<br></br>
      </p>
    
    
    </div>
    <img class="w-full md:w-1/2 my-6 md:my-0 " data-aos="fade-left"
      src="https://d33wubrfki0l68.cloudfront.net/4cec7c4fd345338b402158d5d6a717073e95a6d1/ec0f9/static/edit-content-5ac4e21e23781829b5fd741cdda90e12.png"
      alt="" />
  </div>







  <section
    class="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
    <img class="w-full md:w-1/2 my-6 md:my-0" data-aos="zoom-in-right"
      src="https://d33wubrfki0l68.cloudfront.net/3440b6f4c5f14a4d9fd73188abe0650fb48e3c3a/0ce39/static/adone-c515f91e68f94712b82e62360814b06b.png"
      alt="" />
    <div class="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
      Get Started Today
      </h1>
      <p class="my-6">
      Experience the future of education with StudySmart. Sign up now to embark on a personalized learning journey tailored to your unique needs and preferences.
      </p>
      
    </div>
  </section>

 
  <section
    class="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
    <img class="w-full md:w-1/2 my-6 md:my-0" data-aos="zoom-in-right"
      src="https://d33wubrfki0l68.cloudfront.net/19abff473651bcdc6c8816417e25e85d8a422919/7d3c2/static/ateam-849d02d29daff50ad627f56dd22a6d32.png"
      alt="" />
    <div class="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
      Join Our Community
      </h1>
      <p class="my-6">
      Join our vibrant community of learners and educators dedicated to transforming the way we learn and teach. Together, we'll shape the future of education and empower individuals to reach their full potential.
      </p>
      <button class="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4">
        Start collaborating
      </button>
    </div>
  </section>




 




  <section class="fotter p-3 md:p-8 mt-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between w-full my-3">
      <div class="news font-nun">
        <h3 class="text-xl md:text-3xl font-medium">
          Subscribe to our Newsletter
        </h3>
        <p class="text-sm md:text-md my-4 ">
          Get notified first when we release new updates, tools and resources
        </p>
        <div class="my-4 w-full flex flex-row">
          <input class="rounded-md border py-2 px-8 w-full border-gray-500" type="email" name="" id="" />
          <button
            class="bg-[#ccc9ff] shadow-md rounded-md text-[#3329e0] py-2 px-6 mx-2 cursor-pointer hover:bg-blue-700 hover:text-white ease-in transition-all duration-300"
            type="submit">
            Join
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center mx-auto md:mx-0 justify-between w-full p-4 ">
      <div class="dev font-nun w-full md:w-1/2 mt-12 md:mt-0">
        <div class="flex flex-row items-center justify-start">
          <div class="logo w-10 mr-5">
            <img
              src="data:image/png;base64,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"
              alt="" />
          </div>
          <h1 class="font-black text-2xl">StudySmart</h1>
        </div>
        <p class="font-medium text-md my-4 text-left">
          We Are Creating a new world of learning
        </p>
        <p class="text-sm font-extralight text-left">
          @2025 All rights Reserved
        </p>
      </div>
      <div class="help-legal my-2 md:my-8 flex flex-row justify-between w-full xl:w-1/2 mx-auto  p-2 md:p-10 md:pr-2 mt-12">
        <div class="mr-4 md:mr-8">
          <h2 class="font-bold my-3">StudySmart</h2>
          <ul>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Resources</a>
            </li>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Contact us</a>
            </li>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div class="mr-4 md:mr-8">
          <h2 class="font-bold my-3">Help</h2>
          <ul>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Support</a>
            </li>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Sign up</a>
            </li>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
        <div class="mr-4 md:mr-8">
          <h2 class="font-bold my-3">Legal</h2>
          <ul>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Privacy and Security</a>
            </li>
            <li class="my-4 hover:text-blue-700 transition-all ease-in duration-300">
              <a href="#">Terms and Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="social font-nun w-full  text-center mb-12">
      <h1 class="font-bold my-3 text-xl">Social media</h1>
      <ul class="flex flex-row items-center justify-center mt-6">
        <li class="mx-8">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
              class="bi bi-facebook text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
              viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </li>
        <li class="mx-8">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
              class="bi bi-twitter text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
              viewBox="0 0 16 16">
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        </li>
        <li class="mx-8">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
              class="bi bi-instagram text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>


  </>
  );
}

export default HomePage;
