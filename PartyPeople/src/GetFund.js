import React, {useState, useEffect} from 'react';
import axios from 'axios';
import stock_list from './stock.json'

function Fund() {
    const [fund, setFund] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchFund = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 Fund 를 초기화하고
          setError(null);
          setFund(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
          );
          setFund(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
      fetchFund();
    }, []);
    // console.log(fund);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!fund) return null;
    return (
      <ul>
        {stock_list.map((user) => (
          <li key={user.id}>
            {user.cur_price}
            {user.stock_name}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Fund;