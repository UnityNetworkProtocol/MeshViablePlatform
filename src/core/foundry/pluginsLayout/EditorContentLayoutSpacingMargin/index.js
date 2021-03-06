/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

/* ---------------------------- Export Component ---------------------------- */
export default (props) =>
<Flex direction={['column']} >
<TextField
  floatingLabelText="Margin"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.m}
  onChange={handleChange(props.onChange, 'm')}
/>
<TextField
  floatingLabelText="Margin Vertical"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.my}
  onChange={handleChange(props.onChange, 'my')}
/>
<TextField
  floatingLabelText="Margin Horizontal"
  inputStyle={{ color: '#FFF' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: '#FFF' }}
  value={props.state.mx}
  onChange={handleChange(props.onChange, 'mx')}
/>
</Flex>