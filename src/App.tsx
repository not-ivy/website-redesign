import { Toaster } from 'react-hot-toast';
import { Route } from 'wouter';
import Home from './Home';
import Maps from './Maps';
import { NavBar } from "./Navbar";
import Other from './Other';
import Projects from './Projects';

export default function App() {
  return (
    <>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/other" component={Other} />
      <Route path="/maps" component={Maps} />
      <Toaster position='bottom-right' />
    </>
  )
}
