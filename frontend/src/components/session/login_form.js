import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './login.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  async demoLogin(e) {
    e.preventDefault();

    const demoUser = {
      email: 'fashionisto@gmail.com',
      password: 'password123'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById("email").focus();
    for (let i = 1; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('submit-login').click();
    document.getElementById('password-input').blur();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-box">
        <h1 className="logo">Outfittr</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
              <input type="text"
                className="input-field"
                id="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br></br>
              <input type="password"
                id="password-input"
                className="input-field"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="submit-btn" id="submit-login" type="submit" value="Submit" />
            <input className="demo-user-btn" type="submit" value="Demo User" onClick={this.demoLogin}/>
            {this.renderErrors()}
            <br/>
              <p className="signup-text">
                Don't have an account? 
                <Link className="signup-link" to={'/signup'}>Signup</Link>
                here!
              </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
