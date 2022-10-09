import './balance.css';

const Balance= (props) => {
  return (
    <div className="container">
      <div className="input">
        <h1>Balance {props.tl} </h1>
        <input
          type="text"
          value={props.bal}
          className="inputnum"
          onChange={(e) => props.setbal(+e.target.value)}
          placeholder="0"
        />
       
        <br />
        <button className='btn green'onClick={props.add}>DEPOSIT</button>
        
        <button className='btn red' onClick={props.minus}>WITHDRAW</button>

      </div>
    </div>
  );
}

export default Balance;
