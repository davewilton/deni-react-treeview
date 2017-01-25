import React from 'react'
import TreeView from '../src/deni-react-treeview/deni-react-treeview'
import './theme-customization.scss'

class Example extends React.Component{

  constructor(props) {
    super(props);
  }

  onAfterLoad() {
    this.refs.treeview.api.selectItem(2);
  }

  render() {

    return (
      <div>
        <p>Take a look at de css file from this example and be free to styling the way you want, for example changing its icons, font family, font size, row height, vertical scrollbar appearance and so on...</p>
        <TreeView ref="treeview" onAfterLoad={this.onAfterLoad.bind(this)} url="https://denimar.github.io/static-data/dogs.json" ></TreeView>
      </div>
    );
  }

}

export default Example;