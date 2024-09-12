import React from "react";
import "../style/About.css";
import "../style/Common.css";
import styles from "../style/Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Highlighter from "react-highlight-words";
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [questions] = React.useState([
    {
      question: "How do I get started?",
      answer:
        "Fill up your information HERE, and you'll receive your Login details through email, allowing you to get started right away!",
    },
    {
      question: "If I need help using the system, how can you provide it?",
      answer: `
        a)     Check out our easy Training Videos providing you with every detail you need to know! \n
        b)     For technical support you can always reach us 24/7 on our ChatBot or by email: support@HealthFlow.com \n
        c)     You can also Contact Us for a dedicated video training sessions, which will cost $49
        `,
    },
    {
      question: "Can I upgrade my lifetime offer plan?",
      answer: "Yes, however you can upgrade to the following plans only",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We provide you with a 14 days Trial with 25 FREE SMS to test all the HealthFlow Features. This period should be enough to test your practice’s operations with HealthFlow. If you need additional time, we could extend the trial period. Otherwise HealthFlow is FREE* within the allowed amount of transactions and patients created. For more details you can check our Plans.SMS packages are NON-refundable.",
    },
    {
      question: "Will I get automatic system updates?",
      answer:
        "Absolutely! Subscribing to HealthFlow will give you multiple advantages including access to future updates!",
    },
    {
      question: "Is the lifetime offer refundable?",
      answer:
        "Unfortunately, there is no refund available for the lifetime offer . however you have a 7 days trial before confirming any purchase .",
    },
    {
      question:
        "Is it possible for me to import/export my data into/out of the system? Will my data get regular backups?",
      answer:
        "Yes! The cost of data import is $99 per practice/import and for export it’s 49$ per practice/export .We'll email you an excel document to fill out your information, and we'll import your data into the system automatically. To export your data, we will compile it into an excel spreadsheet and email it to you.In terms of data backup, our system will do it automatically and on a regular basis.",
    },
    {
      question: "Can I upload my radiographs?",
      answer:
        "Yes, HealthFlows image manager is designed to safely move your images from your local computer to the cloud. It allows you to take notes and keep track of every procedure.",
    },
    {
      question: "How secure is HealthFlow?",
      answer:
        "Keeping your data safe and private is of highest concern to us. We have utilized a range of security and encryption techniques on all access routes to ensure that your data is secure. All data transmission including uploads, downloads, and browsing is converted using 256-bit AES protocol. Passwords stored in the Cloud are always encrypted. The servers where your data is stored, are not publicly visible and can only be accessed by the application. Our employees do not have access to your data in any way. Accessing HealthFlow using your browser is just as safe as conducting a banking transaction.",
    },
    {
      question:
        "Can I upgrade or downgrade to different plans halfway through?",
      answer:
        "You can easily upgrade or downgrade to different plans based on your needs. The charges will be calculated on a pro-rata basis.",
    },
    {
      question: "Which browsers are supported by HealthFlow?",
      answer:
        "Google Chrome, Internet Explorer,  and Safari are supported by HealthFlow. Chrome is the most recommended one.",
    },
    {
      question: "Can I discontinue the service once I start it?",
      answer:
        "Yes, if you decide to stop the service, simply send us an email and we’ll grant your wish.",
    },
    {
      question: "Can I add multiple clinic areas into the system?",
      answer:
        "HealthFlow's system lets you add as many clinics as you please, and gives you the advantage to manage every clinic all in one platform.",
    },
    {
      question: "Do the Add-Ons apply to the lifetime offer package?",
      answer:
        "Yes, if you decide to stop the service, simply send us an email and we’ll grant your wish.",
    },
    {
      question: "Do the Add-Ons apply to the Free plan?",
      answer:
        "Yes, of course! The Add-Ons apply to any plan HealthFlow offers.",
    },
    {
      question: "Which language is HealthFlow available in?",
      answer:
        "Currently HealthFlow is available in English language. New languages will be available soon!",
    },
  ]);

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
  };

  // Enhanced handler to prevent special character issues
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update state with the raw input value
  };
  const escapedSearchTerm = escapeRegExp(searchTerm); // Escape the search term before using it

  const filteredQuestions = questions.filter((question) => {
    const lowerCaseQuestion = question.question.toLowerCase();
    const lowerCaseAnswer = question.answer.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      lowerCaseQuestion.includes(lowerCaseSearchTerm) ||
      lowerCaseAnswer.includes(lowerCaseSearchTerm)
    );
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Frequently asked questions</h2>
      <p className={styles.subtitle}>
        Probably you'll find your answer here. Contact us if you don't find what
        you're looking for.
      </p>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchIcon}
          color="#CCCCCC"
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleSearchInputChange} // Use the enhanced handler
        />
      </div>
      <div className={styles.questionsContainer}>
        {filteredQuestions.map((question, index) => (
          <div key={index} className={styles.question}>
            <h3 className={styles.questionTitle}>
              {" "}
              <Highlighter
                highlightClassName="highlight" // Specify the CSS class for highlighted text
                searchWords={[escapedSearchTerm]}
                textToHighlight={question.question}
              />
            </h3>
            <p className={styles.questionAnswer}>
              {question.answer.split("\n").map((segment, index) => (
                <React.Fragment key={index}>
                  <Highlighter
                    highlightClassName="highlight"
                    searchWords={[escapedSearchTerm]}
                    textToHighlight={segment}
                  />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Search;
