import IntroSection from "./components/intro_section/IntroSection"
import ServiceBox from "./components/sevices/ServiceBox"
import { orderOnline, diningPlace1, nightClub } from "./assets/images"
import { LocalitiesSection,  } from "./components/Localities_section"
import GetTheApp from "./components/getApp/GetTheApp"
import OptionsSection from "./components/optionsNeaMe/OptionsSection"
import Footer from "./components/Footer/Footer"



function App() {


  return (
    <>
      <main className="h-screen flex-grow" >
        {/*Introductory section */}
        <IntroSection />

         {/*Services section */}
        <div className="flex gap-4 justify-center items-center my-5">

        <ServiceBox
          title="Order Online"
          desc="Stay home and order to your door step"
          path={orderOnline}
        />
        <ServiceBox
          title="Dining"
          desc="View the cities dining venues"
          path={diningPlace1}
        />
        <ServiceBox
          title="Night life and clubs"
          desc="Explore the city's top night life outlets"
          path={nightClub}
        />
        </div>

         {/*Collections section */}
          <div className="my-24 flex flex-col gap-3">
          <div className="pl-[5.4rem] my-3">
          <h1 className="text-4xl font-semibold font-generalFont">Collections</h1>
          <p className="font-generalFont font-light text-lg">Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
          </div>
          <div className="flex justify-center gap-3 items-center">
        

              <div className={`w-[16.5rem] h-[18rem] rounded-md flex flex-col justify-end bg-hipHoliParties bg-no-repeat border bg-cover brightness-100 `}>
        
                <div className="pl-4 h-1/6 ">
                  <p className="text-white font-generalFont">Hip Holi Parties</p>
                  <p className="text-white font-generalFont">244 places</p>
                </div>
              </div>
              <div className={`w-[16.5rem] h-[18rem] rounded-md flex flex-col justify-end bg-liveScreen bg-no-repeat border bg-cover brightness-100 `}>
        
                <div className="pl-4 h-1/6 ">
                  <p className="text-white font-generalFont">Best of live screens</p>
                  <p className="text-white font-generalFont">36 places</p>
                </div>
              </div>
              <div className={`w-[16.5rem] h-[18rem] rounded-md flex flex-col justify-end bg-diningPlace1 bg-no-repeat border bg-cover brightness-100 `}>
        
                <div className="pl-4 h-1/6 ">
                  <p className="text-white font-generalFont">New In Town</p>
                  <p className="text-white font-generalFont">24 places</p>
                </div>
              </div>
              <div className={`w-[16.5rem] h-[18rem] rounded-md flex flex-col justify-end bg-diningPlace2 bg-no-repeat border bg-cover brightness-100 `}>
        
                <div className="pl-4 h-1/6 ">
                  <p className="text-white font-generalFont">One of a kind places</p>
                  <p className="text-white font-generalFont">24 places</p>
                </div>
              </div>
          </div>
        </div>


         {/*Localities section */}
         <LocalitiesSection/>

        {/* Get the app section*/}
         <GetTheApp />

        {/* Explore option near me*/}
        <OptionsSection />

        {/* Footer*/}
        <Footer />
        </main>
    </>
  )
}

export default App
