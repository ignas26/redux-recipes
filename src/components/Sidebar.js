import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/recipes';

const Sidebar = (props)=>{
  const sidebar = props.recipes.recipe.map((rep, i)=>{
    return (
        <li key={i} className="sidebar-li" onClick={() => props.makeActive(rep)}>
          <div className="h-line"
          {rep.name}
          </div>
        </li>
  )
}
);

  return (
      <div className="sidebar inline">
        <ul className="sidebar-inside">
        {sidebar}
        </ul>
      </div>
          )
};


const mapStateToProps = (state)=> {
  return {
    recipes: state.recipes
  }
};

  export default connect(mapStateToProps, actions)(Sidebar)
