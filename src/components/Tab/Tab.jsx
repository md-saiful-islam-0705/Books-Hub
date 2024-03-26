import { useState } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tabs, defaultTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {tabs.map((tab) => (
        <a
          key={tab.value}
          role="tab"
          className={`tab ${activeTab === tab.value ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  defaultTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tab;
