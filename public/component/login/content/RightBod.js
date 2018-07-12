import React, {Component} from 'react';
import $ from 'jquery';

var rightBod;

class RightBod extends Component {
    constructor() {
        super();

        this.state = {
            signFirstName: "",
            signLastName: "",
            signEmail: "",
            signPass: "",
            signDoB: "0",
            signMoB: "0",
            signYoB: "0",
            signGender: "",
            errFirstName: "",
            errLastName: "",
            errEmail: "",
            errPassword: "",
            errBirthday: "",
            errGender: ""
        }

        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeDoB = this.handleChangeDoB.bind(this);
        this.handleChangeMoB = this.handleChangeMoB.bind(this);
        this.handleChangeYoB = this.handleChangeYoB.bind(this);
        this.setGender = this.setGender.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleChangeFirstname (event) {
        this.setState({signFirstName: event.target.value});
    }

    handleChangeLastname (event) {
        this.setState({signLastName: event.target.value});
    }

    handleChangeEmail (event) {
        this.setState({signEmail: event.target.value});
    }

    handleChangePass (event) {
        this.setState({signPass: event.target.value});
    }

    handleChangeDoB (event) {
        this.setState({signDoB: event.target.value});
    }

    handleChangeMoB (event) {
        this.setState({signMoB: event.target.value});
    }

    handleChangeYoB (event) {
        this.setState({signYoB: event.target.value});
    }

    setGender (event) {
        this.setState({signGender: event.target.value});
    }

    handleSignup (event) {
        event.preventDefault();
        var errCount = 0;
        if(this.state.signFirstName == "") {
            this.setState({errFirstName: "Cần nhập họ"});
            errCount ++;
        } else {
            this.setState({errFirstName: ""});
        }

        if(this.state.signLastName == "") {
            this.setState({errLastName: "Cần nhập tên"});
            errCount ++;
        } else {
            this.setState({errLastName: ""});
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.signEmail))) {
            this.setState({errEmail: "Cần nhập email hợp lệ"});
            errCount ++;
        } else {
            this.setState({errEmail: ""});
        }

        if(this.state.signPass.length <4) {
            this.setState({errPassword: "Cần nhập mật khẩu nhiều hơn 4 ký tự"});
            errCount ++;
        } else {
            this.setState({errPassword: ""});
        }

        if(this.state.signDoB == "0" || this.state.signMoB == "0" || this.state.signYoB == "0") {
            this.setState({errBirthday: "Cần chọn ngày tháng phù hợp"});
            errCount ++;
        } else {
            this.setState({errBirthday: ""});
        }

        if(this.state.signGender == "") {
            this.setState({errGender: "Cần chọn giới tính"});
            errCount ++;
        } else {
            this.setState({errGender: ""});
        }

        var objSignup = {
            username: this.state.signEmail,
            password: this.state.signPass,
            firstname: this.state.signFirstName,
            lastname: this.state.signLastName,
            gender: this.state.signGender,
            birthday: `${this.state.signDoB}/${this.state.signMoB}/${this.state.signYoB}`
        }
        if(errCount == 0) {
            $.post("/signup", objSignup, function(data, status) {
                if(status == "success") {
                    alert("Vui lòng kiểm tra gmail đã đăng ký để xác nhận.");
                } else {
                    alert("Email bạn đăng ký đã được sử dụng hoặc không tồn tại, vui lòng thử lại.");
                }
            })
        }
    }

    render() {
        return (
            <div id="rightbod">
                    <div className="label-Signup">
                        <div className="label-signup-1">Đăng ký</div>
                        <div className="label-signup-2">Luôn miễn phí.</div>
                    </div>
                    <div className="registration_container">
                        <div>
                            <div className="regis_1">
                                <div className="regis_redesign">
                                    <div>
                                        <form className="formbox" onSubmit={this.handleSignup}>
                                            <div className="formbox">
                                                <div className="in11">
                                                    <input type="text" className="inputbody" placeholder="Họ" value={this.state.signFirstName} onChange={this.handleChangeFirstname}/>
                                                    <a className="error-signup">{this.state.errFirstName}</a>
                                                </div>
                                                <div className="in12">    
                                                    <input type="text" className="inputbody" placeholder="Tên" value={this.state.signLastName} onChange={this.handleChangeLastname}/>
                                                    <a className="error-signup">{this.state.errLastName}</a>
                                                </div>
                                            </div>
                                            <div className="formbox">
                                                <input type="text" className="inputbody in2" placeholder="Số di động hoặc email" value={this.state.signEmail} onChange={this.handleChangeEmail}/>
                                                <a className="error-signup">{this.state.errEmail}</a>
                                            </div>
                                            <div className="formbox" style={{marginTop: '5px'}}>
                                                <input type="password" className="inputbody in2" placeholder="Mật khẩu mới" value={this.state.signPass} onChange={this.handleChangePass}/>
                                                <a className="error-signup">{this.state.errPassword}</a>
                                            </div>
                                            <div className="formbox">
                                                <div className="bday">Ngày sinh</div>
                                            </div>
                                            <div className="formbox">
                                                <span datatype="selectors">
                                                    <span>
                                                        <select title="Day" className="selectbody lfloat" value={this.state.signDoB} onChange={this.handleChangeDoB}>
                                                            <option value="0" selected="1">Ngày</option>
                                                            <option value="01">1</option>
                                                            <option value="02">2</option>
                                                            <option value="03">3</option>
                                                            <option value="04">4</option>
                                                            <option value="05">5</option>
                                                            <option value="06">6</option>
                                                            <option value="07">7</option>
                                                            <option value="08">8</option>
                                                            <option value="09">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                        <select title="Month" className="selectbody lfloat"value={this.state.signMoB} onChange={this.handleChangeMoB}>
                                                            <option value="0" selected="1">Tháng</option>
                                                            <option value="01">Tháng 1</option>
                                                            <option value="02">Tháng 2</option>
                                                            <option value="03">Tháng 3</option>
                                                            <option value="04">Tháng 4</option>
                                                            <option value="05">Tháng 5</option>
                                                            <option value="06">Tháng 6</option>
                                                            <option value="07">Tháng 7</option>
                                                            <option value="08">Tháng 8</option>
                                                            <option value="09">Tháng 9</option>
                                                            <option value="10">Tháng 10</option>
                                                            <option value="11">Tháng 11</option>
                                                            <option value="12">Tháng 12</option>
                                                        </select>
                                                        <select title="Year" className="selectbody lfloat" value={this.state.signYoB} onChange={this.handleChangeYoB}>
                                                            <option value="0" selected="1">Năm</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>
                                                            <option value="2015">2015</option>
                                                            <option value="2014">2014</option>
                                                            <option value="2013">2013</option>
                                                            <option value="2012">2012</option>
                                                            <option value="2011">2011</option>
                                                            <option value="2010">2010</option>
                                                            <option value="2009">2009</option>
                                                            <option value="2008">2008</option>
                                                            <option value="2007">2007</option>
                                                            <option value="2006">2006</option>
                                                            <option value="2005">2005</option>
                                                            <option value="2004">2004</option>
                                                            <option value="2003">2003</option>
                                                            <option value="2002">2002</option>
                                                            <option value="2001">2001</option>
                                                            <option value="2000">2000</option>
                                                            <option value="1999">1999</option>
                                                            <option value="1998">1998</option>
                                                            <option value="1997">1997</option>
                                                            <option value="1996">1996</option>
                                                            <option value="1995">1995</option>
                                                            <option value="1994">1994</option>
                                                            <option value="1993">1993</option>
                                                            <option value="1992">1992</option>
                                                            <option value="1991">1991</option>
                                                            <option value="1990">1990</option>
                                                            <option value="1989">1989</option>
                                                            <option value="1988">1988</option>
                                                            <option value="1987">1987</option>
                                                            <option value="1986">1986</option>
                                                            <option value="1985">1985</option>
                                                            <option value="1984">1984</option>
                                                            <option value="1983">1983</option>
                                                            <option value="1982">1982</option>
                                                            <option value="1981">1981</option>
                                                            <option value="1980">1980</option>
                                                            <option value="1979">1979</option>
                                                            <option value="1978">1978</option>
                                                            <option value="1977">1977</option>
                                                            <option value="1976">1976</option>
                                                            <option value="1975">1975</option>
                                                            <option value="1974">1974</option>
                                                            <option value="1973">1973</option>
                                                            <option value="1972">1972</option>
                                                            <option value="1971">1971</option>
                                                            <option value="1970">1970</option>
                                                            <option value="1969">1969</option>
                                                            <option value="1968">1968</option>
                                                            <option value="1967">1967</option>
                                                            <option value="1966">1966</option>
                                                            <option value="1965">1965</option>
                                                            <option value="1964">1964</option>
                                                            <option value="1963">1963</option>
                                                            <option value="1962">1962</option>
                                                            <option value="1961">1961</option>
                                                            <option value="1960">1960</option>
                                                            <option value="1959">1959</option>
                                                            <option value="1958">1958</option>
                                                            <option value="1957">1957</option>
                                                            <option value="1956">1956</option>
                                                            <option value="1955">1955</option>
                                                            <option value="1954">1954</option>
                                                            <option value="1953">1953</option>
                                                            <option value="1952">1952</option>
                                                            <option value="1951">1951</option>
                                                            <option value="1950">1950</option>
                                                            <option value="1949">1949</option>
                                                            <option value="1948">1948</option>
                                                            <option value="1947">1947</option>
                                                            <option value="1946">1946</option>
                                                            <option value="1945">1945</option>
                                                            <option value="1944">1944</option>
                                                            <option value="1943">1943</option>
                                                            <option value="1942">1942</option>
                                                            <option value="1941">1941</option>
                                                            <option value="1940">1940</option>
                                                            <option value="1939">1939</option>
                                                            <option value="1938">1938</option>
                                                            <option value="1937">1937</option>
                                                            <option value="1936">1936</option>
                                                            <option value="1935">1935</option>
                                                            <option value="1934">1934</option>
                                                            <option value="1933">1933</option>
                                                            <option value="1932">1932</option>
                                                            <option value="1931">1931</option>
                                                            <option value="1930">1930</option>
                                                            <option value="1929">1929</option>
                                                            <option value="1928">1928</option>
                                                            <option value="1927">1927</option>
                                                            <option value="1926">1926</option>
                                                            <option value="1925">1925</option>
                                                            <option value="1924">1924</option>
                                                            <option value="1923">1923</option>
                                                            <option value="1922">1922</option>
                                                            <option value="1921">1921</option>
                                                            <option value="1920">1920</option>
                                                            <option value="1919">1919</option>
                                                            <option value="1918">1918</option>
                                                            <option value="1917">1917</option>
                                                            <option value="1916">1916</option>
                                                            <option value="1915">1915</option>
                                                            <option value="1914">1914</option>
                                                            <option value="1913">1913</option>
                                                            <option value="1912">1912</option>
                                                            <option value="1911">1911</option>
                                                            <option value="1910">1910</option>
                                                            <option value="1909">1909</option>
                                                            <option value="1908">1908</option>
                                                            <option value="1907">1907</option>
                                                            <option value="1906">1906</option>
                                                            <option value="1905">1905</option>
                                                        </select>
                                                    </span>
                                                </span>
                                                <div className="fb1 why h lfloat">Tại sao tôi cần cung cấp ngày sinh của mình</div>
                                                
                                            </div>
                                            <a className="error-signup">{this.state.errBirthday}</a>
                                            <div className="formbox mt1">
                                                <span data-type="radio" className="spanpad">
                                                    <input type="radio" id="fem" className="m0" checked={this.state.signGender == "female"} onChange={this.setGender} value="female"/>
                                                    <label for="fem" className="gender">Nữ</label>
                                                    <input type="radio" id="male" className="m0" checked={this.state.signGender == "male"} onChange={this.setGender} value="male"/>
                                                    <label for="male" class="gender">Nam</label>
                                                </span>
                                                <a className="error-signup">{this.state.errGender}</a>
                                            </div>
                                            <div className="formbox">
                                                <div className="agree">
                                                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                                                    <div className="link">Điều khoản</div>,
                                                    <div className="link">Chính sách dữ liệu</div> và
                                                    <div className="link">Chính sách cookie</div> của chúng tôi. Bạn có thể nhận được thông báo của
                                                    chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                                                </div>
                                            </div>
                                            <div className="formbox">
                                                <input type="submit" className="signbut bolder" value="Đăng ký" />
                                            </div>
                                            <div className="formbox">
                                                <div className="create">
                                                    <div className="link h">Tạo trang</div> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    } 
}

export default RightBod;