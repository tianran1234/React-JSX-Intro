const App = () => (
    <div>
        <FirstComponent />
        <Named name='Cassie'/>
    </div>
);

ReactDom.render(
    <App />, document.getElementById('root')
)

