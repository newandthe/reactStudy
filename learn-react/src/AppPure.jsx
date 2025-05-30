import './App.css';
// import PullUpImpure from "./components/PullUpImpure.jsx";
import PullUpPure from "./components/PullUpPure.jsx";

function AppPure() {
    return (
      <div>
        {/*<PullUpImpure />
        <PullUpImpure />
        <PullUpImpure />*/}

        <br />

        <PullUpPure counter={11}/>
        <PullUpPure counter={11}/>
        <PullUpPure counter={11}/>

      </div>
    );
}

export default AppPure;