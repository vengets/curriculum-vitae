import React from 'react';
import {DATA} from '../../data/data';
import {CurriculumVitae} from "../curriculumvitae/CurriculumVitae";

function App() {
    return (
        <div className="App">
            <CurriculumVitae profile={DATA} />
        </div>
    );
}

export default App;
