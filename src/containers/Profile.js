import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route, Redirect, Switch } from 'react-router-dom'

import Header from '../components/Header'
import CreditsActiveList from '../components/CreditsActiveList'
import CreditsPassiveList from '../components/CreditsPassiveList'
import CreditRequestList from '../components/CreditRequestList'

import { getUserData, editMoney, editMoneyConfirm } from '../actions/user/index'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moneyQuantity: this.props.money
        }
    }

    componentDidMount() {
        this.props.dispatch(getUserData(this.props.nickname))
    }

    moneyEditing = () => {
        this.props.dispatch(editMoney())
    }

    moneyInputHandler = (e) => {
        this.setState({
            moneyQuantity: e.target.value 
        })
    }

    moneyChangesConfirm = (e) => {
        if(e.key === 'Enter') {
            this.props.dispatch(editMoneyConfirm(this.props.nickname, parseInt(this.state.moneyQuantity, 10)))
    
            this.setState({
                moneyQuantity: e.target.value 
            })
        }
    }
    
    render() {
        const { nickname, name, surname, rating, description, money, editingMoney } = this.props
        return (
            <div className="profile">
                <Header />
                <div className="container profile_container">
                    <div className="profile_user">
                        <div className="profile_img">
                            <img src="./img/boy.png" />
                            <div className="profile_money">
                                <strong className="label">Money: </strong>
                                <span 
                                    className="money_quantity"
                                    onDoubleClick={() => this.moneyEditing()}
                                >
                                    { money }
                                    {editingMoney ? 
                                        <input 
                                            className="change_money_input"
                                            type="number"
                                            value={this.state.moneyQuantity}
                                            onChange={(e) => this.moneyInputHandler(e)}
                                            onBlur={(e) => this.moneyChangesConfirm(e)}
                                            onKeyPress={(e) => this.moneyChangesConfirm(e)}
                                        />
                                        :
                                        ''
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="profile_info">
                            <div className="item">
                                <strong className="label">Nickname: </strong>
                                <div>
                                    { nickname }
                                </div>
                            </div>
                            <div className="item">
                                <strong className="label">Name: </strong>
                                <div>
                                    { name }
                                </div>
                            </div>
                            <div className="item">
                                <strong className="label">Surname: </strong>
                                <div>
                                    { surname }
                                </div>
                            </div>
                            <div className="item">
                                <strong className="label">Rating: </strong>
                                <div>
                                    { rating }
                                </div>
                            </div>
                            <div className="item">
                                <strong className="label">Description: </strong>
                                <div>
                                    { description }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="active_credits">
                        <h2>Active credits</h2>
                    </div>
                    <CreditsActiveList />
                    <div className="passive_credits">
                        <h2>Passive credits</h2>
                    </div>
                    <CreditsPassiveList />
                    <div className="request_credits">
                        <h2>Request for credits</h2>
                    </div>
                    <CreditRequestList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: localStorage.getItem('user'),
        name: state.user.name,
        surname: state.user.surname,
        rating: state.user.rating,
        description: state.user.description,
        money: state.user.money,
        editingMoney: state.user.editingMoney
    }
}

export default connect(
    mapStateToProps
)(Profile)