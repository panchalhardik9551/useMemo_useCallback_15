import React, { useCallback, useMemo, useState } from 'react'

export default function Calculate() {
  const [inputList, setInputList] = useState("");
  const [list, setlist] = useState([]);
  const [dataList, setDataList] = useState();
  const [data, setData] = useState([]);

  const itemAdded = useCallback(() => {
    setData([...data, inputList * inputList])
    if (inputList.length > 0) {
      setlist([...list, `${inputList}'s Square = ${inputList * inputList}`])
    }
    setInputList("")
  });

  const memory = useMemo(() => {
    return data.reduce((total, val) => {
      return eval(total + val)
    }, [dataList])
  })

  return (
    <>
      <div className="main">
        <input type="number" placeholder='Enter a Number' name='' id='' value={inputList} onChange={(event) => setInputList(event.target.value)} />
        <button className='btn1' onClick={itemAdded}> + </button>
        <h2 className='head'>{memory}</h2>
        <ul className="scroll">
          {list.map((itemValue, index) => {

            return <li key={index} >
              <div className="list">
                <div className="arr"><i className="fa fa-arrow-right" aria-hidden="true" /> </div> <div className="break"> ➡️ {itemValue}</div>

              </div>
            </li>
          })}
        </ul>
        <div>

        </div>
      </div>
    </>
  )
}
