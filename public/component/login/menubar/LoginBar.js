import React, {Component} from 'react';
import $ from 'jquery';

class LoginBar extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let email = this.refs.emailLogin.value;
        let pass = this.refs.passLogin.value;

        var errCount = 0;

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            alert("Cần nhập email hợp lệ");
            errCount ++;
        } 

        if(pass <4) {
            alert("Cần nhập mật khẩu nhiều hơn 4 ký tự");
            errCount ++;
        } 

        var authenObj = {
            username: email,
            password: pass
        }
        
        if(errCount == 0) {
            $.post("/login", authenObj, function(data, status) {
                window.location.replace("/");
            })
        }
    }

    render() {
        return (
            <div className="menu_login rfloat">
                <form className="login_form" onSubmit={this.handleSubmit}>
                    <table cellspacing="0" role="presentation">
                        <tbody>
                            <tr>
                                <td className="labelLogin">
                                    <label for="email">Email hoặc điện thoại</label>
                                </td>
                                <td className="labelLogin">
                                    <label for="pass">Mật khẩu</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" className="inputtext" name="email" id="email" tabindex="1" data-testid="royal_email" ref="emailLogin"/>
                                </td>
                                <td>
                                    <input type="password" className="inputtext" name="pass" id="pass" tabindex="2" data-testid="royal_pass" ref="passLogin"/>
                                </td>
                                <td>
                                    <label className="loginButton" id="loginbutton" for="u_0_8">
                                        <input value="Đăng nhập" aria-label="Đăng nhập" tabindex="4" data-testid="royal_login_button" type="submit" id="u_0_8" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="login_form_label_field">
                                    <div>
                                        <a href="">Quên tài khoản?</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default LoginBar;