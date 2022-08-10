import React, { Component } from "react";
import UpdateLoading from "./UpdateLoading";
import UpdateDeleting from "./UpdateDeleting"


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      updateAccount: false,
      deleteAccount: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "updateAccount":
        this.setState({ updateAccount: !this.state.updateAccount });
        break;
      case "deleteAccount":
        this.setState({ deleteAccount: !this.state.deleteAccount });
        break;

      default: return;
    }
  }
  
  render() {
    const { updateAccount, deleteAccount} = this.state;
    return (
      <div>
        {updateAccount && <UpdateLoading /> }
        <br/>
        {deleteAccount && <UpdateDeleting />}
        <br />
        <div>
          <button onClick={() => this.hideComponent("updateAccount")}>
            Modifier le profil
          </button>
          <button onClick={() => this.hideComponent("deleteAccount")}>
            Supprimer le compte
          </button>

        </div>
      </div>
    );
  }
}
  
export default App;