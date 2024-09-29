import "./App.css"
import Content from "./components/Content"
import Profile from "./components/Profile"
import Sidebar from "./components/Sidebar"

function App() {

return (
<div className="dashboard">
    <Sidebar />
    <div className="dashboard--content">
        <Content />
        <Profile />
    </div>
</div>)
}

export default App