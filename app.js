function WelcomeFunc({name, children}) {
    return <div><h1>Bonjour {name}</h1>
        <p>{children}</p>
    </div>
}

class Welcome extends React.Component {

    render() {
        return <div><h1>Bonjour {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}


class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmont() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { n: props.start }
        this.timer = null
    }
    
    componentDidMount() {
        window.setInterval(this.plus.bind(this), 1000)
    }

    componentWillUnmont() {
        window.clearInterval(this.timer)
    }

    plus() {
        // Si plusieurs setState : mettre dans une fonction
        this.setState((state, props) => ({n: state.n + props.step}))
    }
    
    render() {
        return <div>Vous êtes en ligne depuis {this.state.n} secondes</div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}


function Home() {
    return <div>
        <Welcome name="Karen" />
        <Welcome name="Romain" />
        <Clock />
        <Incrementer start={10} />
        <Incrementer start={100} step={10} />
    </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'))