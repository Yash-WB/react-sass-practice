import React, { useState } from "react";
import "./StayUpToDate.scss";

const StayUpToDate = () => {
  const [activeTab, setActiveTab] = useState("Insights");

  const tabsContent = {
    Insights: {
      title: "Get the Latest Insights",
      content:
        "Discover Schneider Electric Insights on Sustainability, Electricity 4.0, and Next-generation automation. These three issues are the core of our brand. Dive deeper into these topics to better understand our actions and motives.",
      buttonText: "Explore our insights",
      image:
        "https://www.se.com/ww/en/assets/v2/564/media/376232/1200/1364204290-IC-800x550.jpg",
    },
    Events: {
      title: "Upcoming Events",
      content:
        "Stay informed about our upcoming events. From webinars to conferences, discover how we are shaping the future together.",
      buttonText: "View Events",
      image:
        "https://www.se.com/ww/en/assets/v2/564/media/376231/1200/1031472398_green-IC-800x550.jpg",
    },
    Newsroom: {
      title: "Newsroom",
      content:
        "Explore the latest news and updates about Schneider Electric. Get insights into our latest initiatives and innovations.",
      buttonText: "Visit Newsroom",
      image:
        "https://www.se.com/ww/en/assets/v2/564/media/376234/1200/1073238028-IC-800x550.jpg",
    },
    Blog: {
      title: "Our Blog",
      content:
        "Dive into our blog to read in-depth articles about industry trends, sustainability practices, and technological advancements.",
      buttonText: "Read Blog",
      image:
        "https://se.com/ww/en/assets/v2/564/media/376233/1200/878372044-IC-800x550.jpg",
    },
    CustomerStories: {
      title: "Customer Stories",
      content:
        "Hear from our customers and see how Schneider Electric solutions have transformed their operations and achievements.",
      buttonText: "Discover Stories",
      image:
        "https://www.se.com/ww/en/assets/v2/564/media/379060/1200/1294541675_edited-IC-800x550.jpg",
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="StayUpToDate">
      <h1>Stay Up To Date</h1>
      <div className="tabs">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            name={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tabContent">
        <div className="left">
          <h2>{tabsContent[activeTab].title}</h2>
          <p>{tabsContent[activeTab].content}</p>
          <button>{tabsContent[activeTab].buttonText}</button>
        </div>
        <div className="right">
          <img src={tabsContent[activeTab].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StayUpToDate;
