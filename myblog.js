import React, { useState } from "react";
import "./myblog.scss";
import Home from "./Home.png"
import About from "./about.png"
import Contact from "./email.png"
import Cross from "./cross.png"
import three from "./threeDash.png"

export const MyBlog = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="myblog-container">
      <img className={`cross ${rotate ? "btn1" : null}`} src={Cross} width={50} onClick={() => {
        setRotate(false)
      }} />
      <img className={`threedash ${rotate ? "btn2" : null}`} width={50} src={three} alt="" onClick={() => {
        setRotate(true)
      }} />

      <div className={`hiddden-menu ${rotate ? "menubar" : null}`}>
        <div className="menu-icon-1">
          <img src={Home} width={40} alt="" />
          <span>Home</span>
        </div>
        <div className="menu-icon-2">
          <img src={About} width={40} alt="" />
          <span>About</span>
        </div>

        <div className="menu-icon-3">
          <img src={Contact} width={40} alt="" />
          <span>Contact</span>
        </div>

      </div>

      <div className={`blogData ${rotate ? "transition" : null}`}>

        <div className="myblogheading">
          <h1>Amazing Article</h1>
          <p>Jitesh Pandey</p>
        </div>
        <div className="myblog-para-1">
          Your canine companion can offer comfort and ease your worries. Multiple studies show that dogs and therapy dogs help relieve stress and anxiety.
          Even just petting a familiar dog lowers blood pressure and heart rate, slows breathing, and relaxes tense muscles. Scientists at Washington State University discovered that petting a dog for just 10 minutes can have a significant impact. Study participants had a significant reduction in cortisol, a major stress hormone.        </div>
        <div className="myblog-Image">
          <h2>My Dog</h2>
          <img src="https://images7.alphacoders.com/334/334685.jpg" alt="This is My dog." />
        </div>
        <div className="myblog-para-2">
          There’s a reason why puppies are so irresistible. A dog’s facial features possess an “infant schema.” These “social releasers” can trigger an innate caregiver response in humans. So the next time you can’t stop watching that dog video, know those big eyes and floppy ears are scientifically appealing.        </div>

      </div>

    </div>
  )
}