import React from "react";
import PropTypes from "prop-types";

const PostHeader = ({ name, avatar, time }) => (
  <div className="post-header-container">
    <img src={avatar} alt="avatar" className="avatar" />
    <div className="data-container">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default PostHeader;
