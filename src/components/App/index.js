import React, { Component } from 'react';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

import './style.css';

const serverURL = process.env.SERVER_URL || 'http://localhost:3020';

let param = '';

class App extends Component {
  componentWillMount() {
    param = this.props.params.splat;
  }

  fileManager(param) {
    return (
      <div style={{ height: '480px' }}>
        <FileManager>
          <FileNavigator
            id="filemanager-1"
            api={connectorNodeV1.api}
            apiOptions={
              {
                ...connectorNodeV1.apiOptions,
                apiRoot: param ? serverURL + '/' + param : serverURL
              }
            }
            capabilities={connectorNodeV1.capabilities}
            listViewLayout={connectorNodeV1.listViewLayout}
            viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
          />
        </FileManager>
      </div>
    );
  };

  render() {
    return (
      <div className='App'>
        { this.fileManager(param) }
      </div>
    );
  }
}

export default App;
