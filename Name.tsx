import React, { useReducer } from 'react';

const reduce = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, name: state.name + 1 };
    case 'addage':
      return { ...state, age: state.age + 1 };
  }
};
const initstate = { name: 'mei', sex: 'male', age: 20 };

function Name(props) {
  console.log(props);
  const [state, dispatch] = useReducer(reduce, props.initstate);
  return (
    <div>
      {state.name}
      {state.age}
      <div
        onClick={() => {
          dispatch({ type: 'add' });
        }}
      >
        修改名字
      </div>
      <div
        onClick={() => {
          dispatch({ type: 'addage' });
        }}
      >
        修改年龄
      </div>
    </div>
  );
}

export default Name;
