import { Footer, Loader, Navbar, Transactions, Welcome , Services} from './components'
const App = () => {
  return (
    <div className='min-h-screen'>
      <h1> Hello From Web 3</h1>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
