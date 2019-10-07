import React from "react";
import AddComment from "./components/AddComment";
import Comments from "./components/comments/Comments";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: this.loadFromStorage('comments'),
      newName: '',
      newText: '',
      nameIsEmpty: true,
      textIsempty: true
    };

    this.changeName = this.changeName.bind(this);
    this.changeText = this.changeText.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  changeName(ev) {
    this.setState({newName: ev.target.value});

    if (ev.target.value.trim().length > 0 ) {
      this.setState({nameIsEmpty: false});
    } else {
      this.setState({nameIsEmpty: true});
    }
    
  }

  changeText(ev) {
    this.setState({newText: ev.target.value});

    if (ev.target.value.trim().length > 0 ) {
      this.setState({textIsempty: false});
    } else {
      this.setState({textIsempty: true});
    }
  }

  saveInStorage(key, stateObject) {
    let data = JSON.stringify(stateObject);
    localStorage.setItem(key, data);
  }
  
  loadFromStorage(key) {
    let rawData, data;
    rawData = localStorage.getItem(key);
    if (!rawData) return [];

    data = JSON.parse(rawData);
    return data;
  }

  addComment() {
    const comments = this.state.comments;
    
    if (this.state.newName.trim() !== "" && this.state.newText.trim() !== "") {

      comments.push({
        name: this.state.newName,
        text: this.state.newText,
        date: new Date().toLocaleString()
      });

      this.saveInStorage('comments', comments);

    } else {
      return comments;
    }
    
    this.setState({
      comments,
      newName: '',
      newText: '',
      nameIsEmpty: true,
      textIsempty: true
    });
  }

  removeComment(i) {
    const comments = this.state.comments.slice();
    comments.splice(i, 1);
    this.saveInStorage('comments', comments);
    
    this.setState({comments});
  }

  render() {
    return (
      <div className='wrapper'>
        <AddComment
          state={this.state}
          changeName={this.changeName}
          changeText={this.changeText}
          addComment={this.addComment}
        />
        <Comments
          state={this.state}
          removeComment={this.removeComment}
        />
      </div>
    );
  }
}

export default App;