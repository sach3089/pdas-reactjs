import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard"
import AlexaImage from './image/alexa.png'
import CortanaImage from './image/cortana.png'
import SiriImage from './image/siri.png'

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
          <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                      <ProfileCard 
                          title="Alexa" 
                          handle="@alexa99" 
                          image={AlexaImage} 
                          description="Alexa was developed by amazon to assist ourselves"
                        />
                    </div>
                    <div className="column is-3">
                      <ProfileCard 
                          title="Cortana" 
                          handle="@cortana01" 
                          image={CortanaImage}
                          description="Cortana was developed by microsoft to assist ourselves"
                        />
                    </div>
                    <div className="column is-3">
                      <ProfileCard 
                          title="Siri" 
                          handle="@siri01" 
                          image={SiriImage}
                          description="Siri was developed by apple to assist ourselves"
                        />
                    </div>
                </div>
            </section>
          </div>
           
          
          
          
         
        </div>
    );
}
export default App;