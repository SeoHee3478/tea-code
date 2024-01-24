import "./App.css";
import data from "./data/data.js";

function App() {
    return (
        <>
            <article>
                <h1>💜 지브리 애니 목록 🩷</h1>
                <table>
                    <thead>
                        <tr>
                            <th>인기순위</th>
                            <th>제목</th>
                            <th>개봉년도</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((list) => (
                            <tr key={list.id}>
                                <td>{list.rank}위</td>
                                <td>{list.title}</td>
                                <td>{list.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default App;
