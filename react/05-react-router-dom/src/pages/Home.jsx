import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem ratione mollitia, accusantium error, rem eius iusto repudiandae quibusdam animi magni facilis sunt facere nesciunt quisquam delectus? Animi, adipisci iure?</p>
            <p>Visita la página de heroes <Link to="heroes">Heroes</Link></p>
        </>
    )
}

export default Home