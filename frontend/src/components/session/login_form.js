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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
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
        <form onSubmit={this.handleSubmit}>
          <h1 className="logo">Outfittr</h1> 
          <div className="login-form">
            <br/>
              <input type="text"
                className="input-field"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                className="input-field"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="submit-btn" type="submit" value="Submit" />
            {this.renderErrors()}
            <br/>
              <p className="signup-text">
                Don't have an account? 
                <Link className="signup-link" to={'/signup'}>Signup  </Link>
                here!
              </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);