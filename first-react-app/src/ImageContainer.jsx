import logo from './logo.svg';
export default function ImageContainer() {   
    return(
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={logo} className="App-logo" alt="logo" />
        </a>
    );
}