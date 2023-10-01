import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <nav className="menu">
                <NavLink to="/">Главная</NavLink>
                {"     "}
                <NavLink to="/posts/new">Новый пост</NavLink>
                {'     '}
                { true ? null : <NavLink to="/posts/{postId}">Просмотр поста</NavLink>}
            </nav>
        </>
    );
}