import React from "react";
import styles from "../styles/Search.module.css";
import Highlighter from "react-highlight-words";

// Articles array
const articles = [
  {
    title: "How do I get started?",
    content:
      "Fill up your information HERE, and you'll receive your Login details through email, allowing you to get started right away!",
  },
  {
    title: "If I need help using the system, how can you provide it?",
    content: `
    a)     Check out our easy Training Videos providing you with every detail you need to know! \n
    b)     For technical support you can always reach us 24/7 on our ChatBot or by email: support@company.com \n
    c)     You can also Contact Us for a dedicated video training sessions, which will cost $49
    `,
  },
  {
    title: "Can I upgrade my lifetime offer plan?",
    content: "Yes, however you can upgrade to the following plans only",
  },
  {
    title: "What is your refund policy?",
    content:
      "We provide you with a 14 days Trial with 25 FREE SMS to test all the company Features. This period should be enough to test your practice’s operations with company. If you need additional time, we could extend the trial period. Otherwise company is FREE* within the allowed amount of transactions and patients created. For more details you can check our Plans.SMS packages are NON-refundable.",
  },
  {
    title: "Will I get automatic system updates?",
    content:
      "Absolutely! Subscribing to company will give you multiple advantages including access to future updates!",
  },
  {
    title: "Is the lifetime offer refundable?",
    content:
      "Unfortunately, there is no refund available for the lifetime offer . however you have a 7 days trial before confirming any purchase .",
  },
  {
    title:
      "Is it possible for me to import/export my data into/out of the system? Will my data get regular backups?",
    content:
      "Yes! The cost of data import is $99 per practice/import and for export it’s 49$ per practice/export .We'll email you an excel document to fill out your information, and we'll import your data into the system automatically. To export your data, we will compile it into an excel spreadsheet and email it to you.In terms of data backup, our system will do it automatically and on a regular basis.",
  },
  {
    title: "Can I upload my radiographs?",
    content:
      "Yes, companys image manager is designed to safely move your images from your local computer to the cloud. It allows you to take notes and keep track of every procedure.",
  },
  {
    title: "How secure is company?",
    content:
      "Keeping your data safe and private is of highest concern to us. We have utilized a range of security and encryption techniques on all access routes to ensure that your data is secure. All data transmission including uploads, downloads, and browsing is converted using 256-bit AES protocol. Passwords stored in the Cloud are always encrypted. The servers where your data is stored, are not publicly visible and can only be accessed by the application. Our employees do not have access to your data in any way. Accessing company using your browser is just as safe as conducting a banking transaction.",
  },
  {
    title: "Can I upgrade or downgrade to different plans halfway through?",
    content:
      "You can easily upgrade or downgrade to different plans based on your needs. The charges will be calculated on a pro-rata basis.",
  },
  {
    title: "Which browsers are supported by company?",
    content:
      "Google Chrome, Internet Explorer,  and Safari are supported by company. Chrome is the most recommended one.",
  },
  {
    title: "Can I discontinue the service once I start it?",
    content:
      "Yes, if you decide to stop the service, simply send us an email and we’ll grant your wish.",
  },
  {
    title: "Can I add multiple clinic areas into the system?",
    content:
      "company's system lets you add as many clinics as you please, and gives you the advantage to manage every clinic all in one platform.",
  },
  {
    title: "Do the Add-Ons apply to the lifetime offer package?",
    content:
      "Yes, if you decide to stop the service, simply send us an email and we’ll grant your wish.",
  },
  {
    title: "Do the Add-Ons apply to the Free plan?",
    content: "Yes, of course! The Add-Ons apply to any plan company offers.",
  },
  {
    title: "Which language is company available in?",
    content:
      "Currently company is available in English language. New languages will be available soon!",
  },
];

const Search = () => {
  // States
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(0);

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
  };
  // Enhanced handler to prevent special character issues
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  // Escape the search term before using it
  const escapedSearchTerm = escapeRegExp(searchTerm);
  const filteredArticles = articles.filter((index) => {
    const lowerCaseArticleTitle = index.title.toLowerCase();
    const lowerCaseContent = index.content.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      lowerCaseArticleTitle.includes(lowerCaseSearchTerm) ||
      lowerCaseContent.includes(lowerCaseSearchTerm)
    );
  });

  // Clear the search term
  const handleClear = () => {
    setSearchTerm("");
  };

  // useEffect listener to listen for changes in searchResult count
  React.useEffect(() => {
    setSearchResults(filteredArticles.length);
  }, [filteredArticles]);

  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Search</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          {searchTerm && (
            <button
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear input"
            >
              x
            </button>
          )}
        </div>
        {searchResults > 0 && searchTerm !== "" && (
          <p>
            <strong>{searchResults} posts</strong> were found.
          </p>
        )}
        <div className={styles.articlesContainer}>
          {filteredArticles.map((article, index) => (
            <div key={index} className={styles.articletitle}>
              <h3 className={styles.articleTitle}>
                <Highlighter
                  searchWords={[escapedSearchTerm]}
                  textToHighlight={article.title}
                />
              </h3>
              <p className={styles.articleContent}>
                {article.content.split("\n").map((segment, index) => (
                  <React.Fragment key={index}>
                    <Highlighter
                      searchWords={[escapedSearchTerm]}
                      textToHighlight={segment}
                    />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Search;
