import React, { Component } from 'react'
import './ExpenseForm.css'
import { ExpenseItem } from './ExpenseItem'

export class ExpenseList extends Component {
  render() {
    return (
      <div>
        <ul className='list'>
          <ExpenseItem/>
          <ExpenseItem/>
          <ExpenseItem/>
        </ul>
        <button className='btn'>목록 지우기</button>
      </div>
    )
  }
}
