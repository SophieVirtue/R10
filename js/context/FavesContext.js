import React, { createContext, Component } from "react";
import { setFave, getFaves, removeFave } from "../config/models";

const FavesContext = createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { faveIds: [] };
  }

  componentDidMount() {
    this.getFaveIds();
  }

  getFaveIds = async () => {
    try {
      const allFaves = await getFaves();
      const faveIds = allFaves.map(fave => fave[0]);
      this.setState({ faveIds });
    } catch (error) {
      console.log(error);
    }
  };

  setFaveId = async faveId => {
    try {
      await setFave(faveId);
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveId = async faveId => {
    try {
      await removeFave(faveId);
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          setFaveId: this.setFaveId,
          removeFaveId: this.removeFaveId
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;