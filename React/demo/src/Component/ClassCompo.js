// component : it's block of code when we need we use call it
// component : first letter capital A-Z
// 1) class : statefull 2) function : state less
// class : Component , extensd

import React, { Component } from "react";
import FuncCompo from "./FuncCompo";

class ClassCompo extends Component{
    render(){
        return(
          <div>
              <h1>Hello this class component</h1>
            <FuncCompo />
          </div>
        )
    }
}

export default ClassCompo;

// import React, { Component } from 'react'

// export default class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>RCC : react class component</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
                // RCE
//       </div>
//     )
//   }
// }

// export default ClassCompo;


