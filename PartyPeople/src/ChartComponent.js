import React from 'react';
import { render } from 'react-dom';
import StockChart from './StockChart';
import { getData } from "./utils"

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
            console.log(data);
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
            <StockChart type={'hybrid'} data={this.state.data} />
		)
	}
}

export default ChartComponent;