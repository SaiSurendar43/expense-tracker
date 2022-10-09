const List = (props) => {
  return (
    <div className="trans">
      <h2>TRANSACTIONS</h2>
      {props.lst.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATE/TIME</th>
              <th>TRANSACTIONS</th>
            </tr>
          </thead>
          {props.lst.map((obj, index) => {
            console.log(obj);
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{obj.date}</td>
                <td>{obj.total}</td>
                <td className={` badge ${obj.action === "DEPOSIT" ? ' green ' :  ' red '}`}>{obj.action}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};
export default List;


