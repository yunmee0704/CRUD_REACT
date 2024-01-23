import React, { Component } from 'react'
import './ExpenseForm.css'

export class ExpenseForm extends Component {
  render() {
    return (
    <form>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlfor='charge'>상품</label>
          <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 콜라'/>
        </div>
        <div className='form-group'>
          <label htmlfor='amount'>비용</label>
          <input type='text' className='form-control' id='amount' name='amount' placeholder='예) 100'/>
        </div>
      </div>
      <button type='submit' className='btn'>제출</button>
    </form>
    )
  }
}
