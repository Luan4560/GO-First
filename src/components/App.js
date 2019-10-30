import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

import "../style/style.scss";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Luan Nascimento",
        avatar: "https://avatars1.githubusercontent.com/u/44880379?v=4",
        time: "há 3 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Rocketseat",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      },
      {
        id: 3,
        name: "Filipe Deschamps",
        avatar: "https://avatars0.githubusercontent.com/u/4248081?v=4",
        time: "há 43 minutos",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
