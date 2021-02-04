import React from 'react'
import { render, screen } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import WhatType from './WhatType'

describe('<WhatType />', () => {
  render(<Router><WhatType /></Router>)
  const buttons = screen.getAllByRole('button')

  test('displays 2 buttons', () => {
    expect(buttons).toHaveLength(2)
  })
  test('displays student button', () => {
    expect(buttons[0].innerHTML).toMatch('Student')
    expect(buttons[0].href).toMatch('#/register/student')
  })
  test('displays teacher button', () => {
    expect(buttons[1].innerHTML).toMatch('Teacher')
    expect(buttons[1].href).toMatch('#/register/teacher')
  })
})
