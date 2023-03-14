import Heading from './components/Heading';
import Oscar from './components/Oscar';
import { Status } from './components/Status';

export default function AdvanceProp() {
    return (
        <div>
            <div className="App">
                <Status status='loading' />
                <Heading>Welcome</Heading>
                <Oscar>
                    <Heading>Nabajyoti Modak</Heading>
                </Oscar>
            </div>
        </div>
    )
}