import React, {Fragment} from 'react';
import {Capsule} from '@iosio/capsule';




export const myTodoLogic = Capsule({
    name: 'myCounter',
    initialState: {
        count: 0
    },
    logic: ({set, get}) => ({
        incrementCounter: async () => {
            const count = get.count();
            set.count(count + 1);
        }
    })
})()

const CounterTestComponent = ({count, incrementCounter}) => {
    console.log(count);
    return (
        <Fragment>
            <div>{count}</div>   
            <div onClick={incrementCounter}>{'bruh'}</div>
        </Fragment>
        )
};

export default Capsule({
    mapState: {myCounter: 'count'},
    mapLogic: ({myCounter}) => ({incrementCounter: myCounter.incrementCounter})
})(({count, incrementCounter}) => (
    <CounterTestComponent {...{count, incrementCounter}}/>
));


