> **npm start** to run the application

Some basics of react in simple words:

## what are props?

props - props are like html attributes and pass this to any component. so, component will have access to props.

## what is state?

state is an object that lives with the component and responsible for keeping track of changing data within component. that change could be result of user interaction like click etc.

In other words, state is an object that lives inside a component and holds the data for self need or for its children. 

## what is ref?

ref allows us to react to reference an actual dom node on the page.

## stateless component

stateless arrow function syntax can be used instead of regular class XYZ extends React.Component. 
> const Header = (props) => ();

For more check this [article](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc).

## React Context

Explained clearly on official documention: https://reactjs.org/docs/context.html#dynamic-context

## getDefaultProps
The result of getDefaultProps() will be cached and used to ensure that this.props.value will have a value if it was not specified by the parent component.

## componentWillMount()
Triggered before render().

## componentDidMount
Called after render. Can access refs. The componentDidMount() method of child components is invoked before that of parent components. This is the place to call external libraries, use setTimeout, make ajax requests

## shouldComponentUpdate(nextProps, nextState) - Update only
called when there are new props or state changes. return false to prevent a render. good for performance.

## componentWillReceiveProps(nextProps) - Update only
Called before render when props change. Access to old props. It is not triggered after the component is mounted.

## componentWillUpdate(nextProps, nextState)
Invoked immediately before rendering when new props or state are being received. Not called for the initial render. Cannot use setState in this method. Use componentWillReceiveProps instead. Use this as an opportunity to perform preparation before an update occurs.

## render
Triggered when the state changes.

## componentDidUpdate(prevState, prevProps) - Update only
Access to prevState, prevProps Use this as an opportunity to operate on the DOM when the component has been updated.

## componentWillUnmount
Clean up event bindings, etc.


## React CheatSheet
https://reactcheatsheet.com/