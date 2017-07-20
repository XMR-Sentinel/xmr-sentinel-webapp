/**
 * Packages import
 */
import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


import TimeTotal from '../components/TimeTotal.js'

class MainTable extends React.Component {

  constructor() {
    super()
    this.state
    this.state = {
      nodes: [
        {
          cores: [
            { '2.5s': '85.7', '60s': '77.0', '15m': '81.8' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '85.7', '60s': '77.0', '15m': '81.8' },
          highest: ' 152.7'
        },
        { cores: [
            { '2.5s': '147.6', '60s': '148.0', '15m': '146.0' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '147.6', '60s': '148.0', '15m': '146.0' },
          highest: ' 153.2'
        },
        {
          cores: [
            { '2.5s': '143.6', '60s': '146.0', '15m': '143.4' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '143.6', '60s': '146.0', '15m': '143.4' },
          highest: ' 152.7'
        },
        {
          cores: [
            { '2.5s': '146.4', '60s': '137.3', '15m': '138.2' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '146.4', '60s': '137.3', '15m': '138.2' },
          highest: '165.2'
        },
        {
          cores: [
            { '2.5s': '122.3', '60s': '121.3', '15m': '116.4' },
            { '2.5s': '123.8', '60s': '123.0', '15m': '118.0' },
            { '2.5s': '120.6', '60s': '119.8', '15m': '115.6' },
            { '2.5s': '117.6', '60s': '116.7', '15m': '111.7' },
            { '2.5s': '125.0', '60s': '124.5', '15m': '121.0' },
            { '2.5s': '121.7', '60s': '121.1', '15m': '116.6' },
            { '2.5s': '127.8', '60s': '127.2', '15m': '123.6' },
            { '2.5s': '116.3', '60s': '114.4', '15m': '109.7' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '975.1', '60s': '968.0', '15m': '932.7' },
          highest: '1029.5'
        },
        {
          cores: [
            { '2.5s': '33.8', '60s': '31.4', '15m': '30.6' },
            { '2.5s': '34.2', '60s': '30.9', '15m': '29.8' },
            { '2.5s': '35.0', '60s': '33.0', '15m': '32.3' },
            { '2.5s': '30.3', '60s': '26.4', '15m': '25.2' },
            { '2.5s': '38.2', '60s': '36.9', '15m': '36.4' },
            { '2.5s': '34.6', '60s': '32.6', '15m': '32.0' },
            { '2.5s': '35.6', '60s': '33.5', '15m': '32.8' },
            { '2.5s': '38.5', '60s': '37.3', '15m': '36.8' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '280.2', '60s': '262.0', '15m': '256.0' },
          highest: ' 350.5'
        },
        {
          cores: [
            { '2.5s': '27.4', '60s': '31.0', '15m': '34.0' },
            { '2.5s': '30.5', '60s': '33.2', '15m': '36.1' },
            { '2.5s': '28.6', '60s': '31.3', '15m': '34.1' },
            { '2.5s': '25.2', '60s': '30.2', '15m': '33.7' },
            { '2.5s': '28.0', '60s': '31.2', '15m': '34.3' },
            { '2.5s': '30.3', '60s': '33.2', '15m': '36.2' },
            { '2.5s': '19.6', '60s': '24.1', '15m': '29.6' },
            { '2.5s': '32.3', '60s': '34.1', '15m': '36.1' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '222.0', '60s': '248.3', '15m': '274.1' },
          highest: ' 314.0'
        },
        {
          cores: [
            { '2.5s': '20.7', '60s': '18.9', '15m': '18.1' },
            { '2.5s': '25.4', '60s': '21.7', '15m': '20.6' },
            { '2.5s': '31.1', '60s': '29.4', '15m': '28.3' },
            { '2.5s': '31.0', '60s': '29.3', '15m': '28.2' },
            { '2.5s': '32.4', '60s': '30.9', '15m': '29.6' },
            { '2.5s': '32.4', '60s': '29.7', '15m': '28.3' },
            { '2.5s': '32.5', '60s': '30.9', '15m': '29.6' },
            { '2.5s': '30.9', '60s': '29.0', '15m': '27.7' }
          ],
          id: (1 + Math.random()).toFixed(2),
          title: 'Hashrate Report',
          total: { '2.5s': '236.4', '60s': '219.9', '15m': '210.4' },
          highest: '320.5'
        }
    ]}
  }

  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      expandBy: 'column'  // Currently, available value is row and column, default is row
    };
    return (
      <BootstrapTable data={ this.state.nodes.map(node => node.total) }
        options={ options }
        search>
        <TableHeaderColumn dataField='id' isKey={true}>'id'</TableHeaderColumn>
        <TableHeaderColumn dataField='2.5s'>'2.5s'</TableHeaderColumn>
        <TableHeaderColumn dataField='60s' >'60s'</TableHeaderColumn>
        <TableHeaderColumn dataField='15m' >'15m'</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => { // Subscribes, I guess
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTable)
