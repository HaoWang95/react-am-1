import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import { AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Edit</div>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
