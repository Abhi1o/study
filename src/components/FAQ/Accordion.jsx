import React,{useState} from 'react'
import './FAQ.scss'
const Accordion = ({title,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
     
  
          <div className="faq__wrapper">
            <div className="faq">
              <div className="question" onClick={toggleAnswer}>
                <p>{title}</p>
                <span>{showAnswer ? "-" : "+"}</span>
              </div>
              {showAnswer && (
                <div className="answer visible">
                  <p>
                  {answer}  </p>
                </div>
              )}
            </div>
            </div>
            
            
          
    );
}

export default Accordion