import React, { useState } from "react";
import PropTypes from 'prop-types';

function Form({addWatch}) {
    const [nameWatch, setNameWatch] = useState('');
    const [timeZone, setTimeZone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addWatch({ nameWatch, timeZone, id: Date.now() });
        setNameWatch('');
        setTimeZone('');
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="form-label" htmlFor="watchName">Название</label>
            <input className="form-input watchName" type="text" id="watchName" value={nameWatch} onChange={(e) => setNameWatch([e.target.value])} required />
            <label className="form-label" htmlFor="timeZone">Временная зона</label>
            <input className="form-input timeZone" type="number" id="timeZone" value={timeZone} onChange={(e) => setTimeZone([e.target.value])} required />
            <button className="form-btn">Добавить</button>
      </form>
    );
}

Form.propTypes = {
    addWatch: PropTypes.func.isRequired
}

export default Form