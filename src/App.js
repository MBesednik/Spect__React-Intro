import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Grid from './Components/Grid/Grid';
import Event from './Components/Event/Event';
import Footer from './Components/Footer/Footer';

//images
import ImageDesign from './assets/Images/design.jpg';
import ImageDevelopment from './assets/Images/development.jpg';
import ImageMarketing from './assets/Images/marketing.jpg';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
        <Section title="Featured events">
          <Grid columns="3">
          <Event 
                        image={ImageDesign}
                        title="UX/UI design workshop"
                        description="Learn how to solve big problems and test new ideas based on Google Sprint methodology..."
                        buttonText="Find out more"
                    />
                    <Event 
                        image={ImageDevelopment}
                        title="Frontend best practices"
                        description="Best frontend practices for developers. Learn advanced CSS techniques and much more..."
                        buttonText="Find out more"
                    />
                    <Event 
                        image={ImageMarketing}
                        title="Digital marketing workshop"
                        description="Lear how to use Google Ads and social networks to gain customers for your digital product..."
                        buttonText="Find out more"
                    />
            </Grid>
        </Section>
      </Main>
      <Footer/>
    </>
  );
}

export default App;