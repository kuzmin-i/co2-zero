import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'


const ButtonTypeC = ( chapters ) => {

    const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Popover bottom</Popover.Title>
          <Popover.Content>
          <Form.Control type="range" />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );

    

}

export default ButtonTypeC