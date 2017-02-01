import React from 'react'

const Fixture = (props) => (
    <div id='wrapper'>
        <input id='checked' className="checked" defaultChecked />
        <input id='not' defaultChecked={false} />
    </div>
)

export default Fixture
