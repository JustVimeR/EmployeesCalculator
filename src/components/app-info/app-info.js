import './app-info.css';

const AppInfo = ({ increased, employers }) => {
    return (
        <div className="app-info">
            <h1>Підрахунок працівників в компанії N</h1>
            <h2>Повне число працівників: {employers}</h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}

export default AppInfo;